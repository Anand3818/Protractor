const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;
const e2eConfig = require('../config/E2EConfig');

function PhoneSimulatorPO() {
    let self = this;
        self.e2eConfig = e2eConfig;

        self.leftExtensionInput = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(1) > app-phone > div > div.phone-number > div > input'));
        self.leftExtensionButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(1) > app-phone > div > div.phone-number > div > button'));
        self.leftPhoneNumberInput = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(1) #phone-number-box'));
        self.leftDialButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(1) #dialer-call-button'));
        self.leftHangupButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(1) > app-phone > div > div.phone-screen > app-call-screen > div > div.call-screen-menu > div:nth-child(2) > div'));
        self.leftAnswerButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(1) > app-phone > div > div.phone-screen > app-call-screen > div > div.call-screen-menu > div:nth-child(1) > div'));

        self.rightExtensionInput = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(2) > app-phone > div > div.phone-number > div > input'));
        self.rightExtensionButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(2) > app-phone > div > div.phone-number > div > button'));
        self.rightPhoneNumberInput = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(2) #phone-number-box'));
        self.rightDialButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(2) #dialer-call-button'));
        self.rightHangupButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(2) > app-phone > div > div.phone-screen > app-call-screen > div > div.call-screen-menu > div:nth-child(2) > div'));
        self.rightAnswerButton = element(by.css('#ngb-tab-0-panel > div > div > div:nth-child(2) > app-phone > div > div.phone-screen > app-call-screen > div > div.call-screen-menu > div:nth-child(1) > div'));
    

    self.navigate = async function(ID) {
        return browser.get('https://phone-simulator.tenfold.com/'+ID);
    }

    self.setLeftExtension = async function(value) {
        await self.leftExtensionButton.isPresent()
            .then(present => present && self.leftExtensionButton.click()
                .then(() => browser.wait(EC.visibilityOf(self.leftExtensionInput), TIMEOUT, 'Left extension input is not visible'))
                .then(() => self.leftExtensionInput.clear()))
            .then(() => self.leftExtensionInput.clear())
            .then(() => self.leftExtensionInput.sendKeys(value))
            .then(() => browser.actions().sendKeys(protractor.Key.ENTER).perform())
            .then(() => browser.wait(EC.visibilityOf(self.leftExtensionButton), TIMEOUT, 'Left extension button is not visible'));
    }

    self.setLeftPhoneNumber = async function(value) {
        await browser.wait(EC.visibilityOf(self.leftPhoneNumberInput), TIMEOUT, 'Left phone number input is not visible')
            await self.leftPhoneNumberInput.clear()
            await self.leftPhoneNumberInput.sendKeys(value)
    }

    self.leftDial = async function() {
        await self.leftDialButton.jsClick()
            await browser.wait(EC.visibilityOf(self.leftHangupButton), TIMEOUT, 'Left hangup button is not visible')
    }

    self.leftHangup = async function() {
        await self.leftHangupButton.jsClick()
            await browser.wait(EC.visibilityOf(self.leftDialButton), TIMEOUT, 'Left dial button is not visible')
    }

    self.leftAnswer = async function() {
        await browser.wait(EC.visibilityOf(self.leftAnswerButton), TIMEOUT, 'Left answer button is not visible')
            await self.leftAnswerButton.jsClick()
            await browser.wait(EC.not(EC.visibilityOf(self.leftAnswerButton)), TIMEOUT, 'Left answer button is visible')
    }

    self.setRightExtension = async function(value) {
        await self.rightExtensionButton.isPresent()
            .then(present => present && self.rightExtensionButton.click()
                .then(() => browser.wait(EC.visibilityOf(self.rightExtensionInput), TIMEOUT, 'Right extension input is not visible'))
                .then(() => self.rightExtensionInput.clear()))
            .then(() => self.rightExtensionInput.clear())
            .then(() => self.rightExtensionInput.sendKeys(value))
            .then(() => browser.actions().sendKeys(protractor.Key.ENTER).perform())
            .then(() => browser.wait(EC.visibilityOf(self.rightExtensionButton), TIMEOUT, 'Right extension button is not visible'));
    }

    self.setRightPhoneNumber = async function(value) {
        await browser.wait(EC.visibilityOf(self.rightPhoneNumberInput), TIMEOUT, 'Right phone number input should be visible')
            await self.rightPhoneNumberInput.clear()
            await self.rightPhoneNumberInput.sendKeys(value)
    }

    self.rightDial = async function() {
        await self.rightDialButton.jsClick()
            await browser.wait(EC.visibilityOf(self.rightHangupButton), TIMEOUT, 'Right hangup button should be visible')
    }

    self.rightHangup = async function() {
        await self.rightHangupButton.jsClick()
            await (() => browser.wait(EC.visibilityOf(self.rightDialButton), TIMEOUT, 'Right dial button should be visible'));
    }

    self.rightAnswer = async function() {
        await browser.wait(EC.visibilityOf(self.rightAnswerButton), TIMEOUT, 'Right answer button should be visible')
            await self.rightAnswerButton.jsClick()
            await browser.wait(EC.not(EC.visibilityOf(self.rightAnswerButton)), TIMEOUT, 'Right answer button should not be visible')
    }
}

module.exports = PhoneSimulatorPO;
