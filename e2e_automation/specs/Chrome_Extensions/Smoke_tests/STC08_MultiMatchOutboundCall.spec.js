const e2eConfig = require('../../../config/E2EConfig').DEFAULT;
const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();
const phoneSimulatorPO = new (require('../../../pages/PhoneSimulator.po'))(e2eConfig);

describe('STC 08: Multi-match outbound call', function () {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await phoneSimulatorPO.navigate(e2eConfig.organizationId)
            await popupPO.ensureFloatingUIVisibility()
            await popupPO.switchToDefaultContent()
    });

    it('make a call', async function () {
        await phoneSimulatorPO.setLeftExtension(e2eConfig.extension)
            await phoneSimulatorPO.setLeftPhoneNumber(e2eConfig.multiMatchPhoneNumber)
            await phoneSimulatorPO.leftDial()
            await phoneSimulatorPO.rightAnswer()
            await popupPO.switchToPopup()
            await popupPO.waitForLoggedIn()
            await popupPO.waitForPhoneCall(e2eConfig.multiMatchPhoneNumber)
            await popupPO.switchToFirstRecent()
            await popupPO.waitForMultiMatchScreen()
            await popupPO.switchToDefaultContent()
            await phoneSimulatorPO.leftHangup()
    });
});
