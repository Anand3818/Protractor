const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))(); 
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

describe('STC 01: Layout and presentation',() => {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await browser.get('http://blank.org')
            await popupPO.ensureFloatingUIVisibility()
    });

    it('has correct size', async() => {
        await browser.wait(
            () => browser.sleep(500)
                .then(() => popupPO.messageBox.getSize())
                .then(size => size.width === 512),
            2000
        );
    });

    it('close floating UI', async() =>{
        await popupPO.closefloatingUI();
    })
});
