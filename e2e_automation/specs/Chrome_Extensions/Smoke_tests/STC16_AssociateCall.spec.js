const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();// @todo: refactor to class
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

describe('STC 16: Associate a call', () => {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await browser.get('http://blank.org/')
            await popupPO.ensureFloatingUIVisibility()
    });

    it('associates the call', async function () {
        const recordName = 'john';

        await popupPO.switchToNoMatch()
            await popupPO.searchFor(recordName)
            await popupPO.clickFirstSearchResult()
            await popupPO.waitForSingleMatchScreen()
            await expect(popupPO.recordLink.getText()).toEqual(recordName)
    });
});
