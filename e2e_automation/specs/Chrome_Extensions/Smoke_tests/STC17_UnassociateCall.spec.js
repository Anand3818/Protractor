const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))(); // @todo: refactor to class
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

describe('STC 17: Unassociate a call', function () {
    beforeAll(function () {
        return dashboardPO.login(e2eConfig.username, e2eConfig.password)
            .then(() => browser.get('http://blank.org/'))
            .then(() => popupPO.ensureFloatingUIVisibility());
    });

    it('unassociates the call', async function () {
        await popupPO.switchToSingleMatch()
        await popupPO.unassociateCall()
    });
});
