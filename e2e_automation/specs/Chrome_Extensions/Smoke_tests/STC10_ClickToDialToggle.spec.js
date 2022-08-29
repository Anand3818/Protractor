const dashboardPO = require('../../../pages/Dashboard.po');
const historyPO = require('../../../pages/History.po');
const ctdTestPO = require('../../../pages/CTDTestPage.po');
const switchPO = require('../../../pages/switch.po')
const e2eConfig = require('../../../config/E2EConfig').DEFAULT;

describe('STC 10: Click to Dial', () => {
    beforeAll(async () => {
        await dashboardPO.login(e2eConfig.username, e2eConfig.password);
    });

    afterAll(async () => {
        await historyPO.toggleCTDOn();
    });

    describe('disabled',  () => {
        it('does not replace phone numbers with links', async() => {
            await historyPO.toggleCTDOff()
                await ctdTestPO.get()
                await ctdTestPO.waitForCTDDisabled();
        });
    });

    describe('enabled',  () => {
        it('does replace phone numbers with links', async() =>{
            await historyPO.toggleCTDOn()
                await ctdTestPO.get()
                await ctdTestPO.waitForCTDEnabled()
        });
    });

    // describe('click to dial', () => {
    //     it('click to dial and verify', async() =>{
    //         await switchPO.switchToNewTab('1','https://phone-simulator.tenfold.com/5b488bb53e780f0007ded1e6');
    //         browser.sleep(3000);
    //         await switchPO.switchWindow('0');
    //         await switchPO.clickToDial();
    //         await switchPO.switchWindow('1');
    //     })
    // })
});
