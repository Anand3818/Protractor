const e2eConfig = require('../../../config/E2EConfig').DEFAULT;
const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();
const phoneSimulatorPO = new (require('../../../pages/PhoneSimulator.po'))(e2eConfig);

const EC = protractor.ExpectedConditions;


describe('STC 22:PrimaryExtensions',() =>{
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await popupPO.switchToDefaultContent()
    });

    it('set extension', async ()=>{
        await browser.get('https://dashboard.tenfold.com/profile');
        browser.sleep(5000);
        await dashboardPO.clickonIcon();
        await dashboardPO.enterExtension(e2eConfig.extension);
        await dashboardPO.selectExtension();
        await expect(dashboardPO.enterextension.isPresent()).toBeTrue();

    })

    it('Navigate to phone simulator', async ()=> {
        await phoneSimulatorPO.navigate(e2eConfig.organizationId)
        await expect(browser.getCurrentUrl()).toContain(e2eConfig.organizationId)
    });

    it('perform call',async ()=> {
        await expect(browser.getCurrentUrl()).toContain(e2eConfig.organizationId)
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
            await popupPO.switchToDefaultContent()
            await phoneSimulatorPO.rightHangup()
    })
});

    // it('set Primary exten