const dashboardPO = require('../../../pages/Dashboard.po');
const credentials = new (require('../../../env/credentials'))();
const faker = require('../../../config/TestData');
const usersPO = new (require('../../../pages/Users.Dashboard.po'))();

const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

describe('Troubleshooting Smoke Test', function () {
    beforeAll(function () {
        return dashboardPO.login(credentials.adminUser.username, credentials.adminUser.password)
            .then(() => expect(browser.getCurrentUrl()).not.toContain('login'),
            // usersPO.closeCEPopup()
            );
    });
    let fakerUser = faker.Random.name,
        fakerEmail = faker.Random.email,
        fakerTeam = faker.Random.name + faker.Random.number;

    it('Click on Start logging without Title and Description',async function () {
        await usersPO.ClickOnTroubleshootingPage();
        await usersPO.GotoCallSequenceDiagnosticTool();
        await usersPO.ClickOnStartLoggingButton();
        await usersPO.verifyRequiredErrorBubble();
    });

    it('Logout', async function(){
        browser.navigate().refresh();
        browser.sleep(4000);
        await dashboardPO.logout()
    });

    afterAll(function () {
        // dashboardPO.logout()
    });
});