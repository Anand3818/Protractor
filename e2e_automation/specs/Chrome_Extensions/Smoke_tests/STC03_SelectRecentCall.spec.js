const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

const EC = protractor.ExpectedConditions;

describe('STC 03: Select recent call', () => {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await browser.get('http://blank.org/')
            await popupPO.ensureFloatingUIVisibility();
    });

    it('switches to recent call', async() =>{
        await popupPO.switchToSingleMatch()
            await browser.wait(EC.visibilityOf(popupPO.recordLink))
    });
});
