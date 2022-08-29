const e2eConfig = require('../../../config/E2EConfig').DEFAULT;
const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();
const phoneSimulatorPO = new (require('../../../pages/PhoneSimulator.po'))(e2eConfig);
const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;


describe('STC 04: Single-match inbound call',  () => {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await phoneSimulatorPO.navigate(e2eConfig.organizationId)
            await popupPO.ensureFloatingUIVisibility()
            await popupPO.switchToDefaultContent()
    });

    it('make a In-bound call', async function () {
        await phoneSimulatorPO.setLeftExtension(e2eConfig.extension)
            await phoneSimulatorPO.setRightExtension(e2eConfig.singleMatchPhoneNumber)
            await phoneSimulatorPO.setRightPhoneNumber(e2eConfig.extension)
            await phoneSimulatorPO.rightDial()
            await phoneSimulatorPO.leftAnswer()
            await popupPO.switchToPopup()
            await popupPO.waitForLoggedIn()
            await popupPO.waitForPhoneCall(e2eConfig.singleMatchPhoneNumber)
            await popupPO.switchToFirstRecent()
            await popupPO.waitForSingleMatchScreen()
    });
    
    it('save notes', async function(){
        await popupPO.saveNote('test note')
        await popupPO.waitForNoteToBeSaved()
        await browser.wait(EC.visibilityOf(popupPO.notesField), TIMEOUT, 'Notes field should be visible again')
    });

    // it('hangup call', async function(){
    //     await phoneSimulatorPO.rightHangup()
    // })
});