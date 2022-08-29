const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))(); // @todo: refactor to class
const salesForcePO = require('../../../pages/Salesforce.po');
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;
const phoneSimulatorPO = new (require('../../../pages/PhoneSimulator.po'))(e2eConfig);

describe('STC 21: Create case for a contact',() => {
    const prepareAccountCall = () => phoneSimulatorPO.navigate(e2eConfig.organizationId)
    .then(() => phoneSimulatorPO.setLeftExtension(e2eConfig.extension))
    .then(() => phoneSimulatorPO.setRightExtension(e2eConfig.accountPhoneNumber))
    .then(() => phoneSimulatorPO.setLeftPhoneNumber(e2eConfig.accountPhoneNumber))
    .then(() => phoneSimulatorPO.leftDial())
    .then(() => phoneSimulatorPO.rightAnswer())
    .then(() => popupPO.switchToPopup())
    .then(() => popupPO.waitForLoggedIn())
    .then(() => popupPO.waitForPhoneCall(e2eConfig.accountPhoneNumber))
    .then(() => popupPO.switchToDefaultContent())
    .then(() => phoneSimulatorPO.leftHangup());

    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await salesForcePO.login(e2eConfig.crm.username, e2eConfig.crm.password)
            await prepareAccountCall()
            await browser.get('http://blank.org/')
            await popupPO.ensureFloatingUIVisibility()
    });

    it('opens new browser tab with contact', async function () {
        await popupPO.switchToSingleMatch()
            await browser.getAllWindowHandles()
            .then(beforeHandles => popupPO.createCase()
                .then(() => salesForcePO.waitForCreateCaseTab(beforeHandles)))
            .then(() => salesForcePO.closeNewestTab());
    });
});
