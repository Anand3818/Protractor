const e2eConfig = require('../../../config/E2EConfig').DEFAULT;
const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();
const phoneSimulatorPO = new (require('../../../pages/PhoneSimulator.po'))(e2eConfig);

describe('STC 05: Multi-match inbound call',() =>{
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await phoneSimulatorPO.navigate(e2eConfig.organizationId)
            await popupPO.ensureFloatingUIVisibility()
            await popupPO.switchToDefaultContent()
    });

    it('make a call', async function () {
        await phoneSimulatorPO.setLeftExtension(e2eConfig.extension)
            await phoneSimulatorPO.setRightExtension(e2eConfig.multiMatchPhoneNumber)
            await phoneSimulatorPO.setRightPhoneNumber(e2eConfig.extension)
            await phoneSimulatorPO.rightDial()
            await phoneSimulatorPO.leftAnswer()
            await popupPO.switchToPopup()
            await popupPO.waitForLoggedIn()
            await popupPO.waitForPhoneCall(e2eConfig.multiMatchPhoneNumber)
            await popupPO.switchToFirstRecent()
            await popupPO.waitForMultiMatchScreen()
            await popupPO.switchToDefaultContent()
            await phoneSimulatorPO.rightHangup()
    });
});
