const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))(); // @todo: refactor to class
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

describe('STC 20: Save a note on a call with follow up task', function () {
    beforeAll(function () {
        return dashboardPO.login(e2eConfig.username, e2eConfig.password)
            .then(() => browser.get('http://blank.org/'))
            .then(() => popupPO.ensureFloatingUIVisibility());
    });

    it('saves a note with followup task', function () {
        return popupPO.switchToSingleMatch()
            .then(() => popupPO.saveNote('call tomorrow'))
            .then(() => popupPO.waitForNoteTaskIcon());
    });
});
