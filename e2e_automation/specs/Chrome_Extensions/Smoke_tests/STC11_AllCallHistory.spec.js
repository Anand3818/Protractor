const dashboardPO = require('../../../pages/Dashboard.po');
const popupPO = new (require('../../../pages/Popup.po'))();
const historyPO =  require('../../../pages/History.po')
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

describe('STC 02: AllCallHistory',() => {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password)
            await browser.get('http://blank.org')
            await popupPO.ensureFloatingUIVisibility()
    });
    
    it('All call history when analytics is disabled', async ()=>{
        await browser.get('https://dashboard.tenfold.com/features#/analytics');
        await historyPO.Analyticspage();
        browser.sleep(3000);
        await historyPO.AllCallHistoryDisabled();
    })

    it('Enable anaytics again', async ()=>{
        await browser.get('https://dashboard.tenfold.com/features#/analytics');
        await historyPO.Analyticspage();
        browser.sleep(3000);
        await historyPO.AllCallHistoryEnabled();
    })
})