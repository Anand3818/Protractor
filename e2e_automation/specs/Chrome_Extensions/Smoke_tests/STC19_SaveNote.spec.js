const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();// @todo: refactor to class
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

describe('STC 19: Save a note on a call', () => {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await browser.get('http://blank.org/')
            await popupPO.ensureFloatingUIVisibility()
    });

    it('saves note', async function () {
        await popupPO.switchToSingleMatch()
            await popupPO.saveNote('test note')
            await popupPO.waitForNoteToBeSaved()
            await browser.wait(EC.visibilityOf(popupPO.notesField), TIMEOUT, 'Notes field should be visible again')
    });
});
