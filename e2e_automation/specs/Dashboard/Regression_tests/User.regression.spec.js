const dashboardPO = require('../../../pages/Dashboard.po');
const credentials = new (require('../../../env/credentials'))();
const faker = require('../../../config/TestData');
const usersPO = new (require('../../../pages/Users.Dashboard.po'))();

const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

describe('Dashboard Smoke Test', function () {
    beforeAll(function () {
        return dashboardPO.login(credentials.adminUser.username, credentials.adminUser.password)
            .then(() => expect(browser.getCurrentUrl()).not.toContain('login'),
            // usersPO.closeCEPopup()
            );
    });
    let fakerUser = faker.Random.name,
        fakerEmail = faker.Random.email,
        fakerTeam = faker.Random.name + faker.Random.number;

    it('Create user non admin',async function () {
        await usersPO.get();
        await browser.sleep(4000);
        await usersPO.newUser(fakerUser, fakerEmail);
        await usersPO.get();
        await browser.sleep(4000);
        await usersPO.searchForUser(fakerUser, 1);
        await browser.sleep(4000);
        await expect(usersPO.verifyUserOnUsersTab(fakerUser).isDisplayed()).toBeTruthy();
    });

    it('Edit the user with existing user profile',async function () {
        await usersPO.ClickOnUsersTabOnHeadder();
        await usersPO.ClickOnEditUserOption1();
        await usersPO.EditNonAdminName(fakerUser+"_Updated");
        await usersPO.searchForUser(fakerUser+"_Updated", 1);
        await browser.sleep(4000);
        await expect(usersPO.verifyUserOnUsersTab(fakerUser+"_Updated").isDisplayed()).toBeTruthy();
    });

    it('Searching for non existing user',async function () {
        await usersPO.get();
        browser.sleep(4000);
        await usersPO.searchForUserRegression(credentials.User_Does_Not_Exist, 1);
        browser.sleep(2000);
        expect(usersPO.verifyUserOnUsersTab(credentials.User_Does_Not_Exist).isPresent()).toBeFalsy();
    });

    afterAll(async function () {
        //Removing added user
        await usersPO.get();
        await usersPO.searchForUser(fakerUser+"_Updated", 1);
        await browser.sleep(2000);
        await usersPO.clickOnUserSettingbyUsername(fakerUser+"_Updated");
        await usersPO.deleteUserAndVerify(fakerUser+"_Updated");
        await usersPO.get();
        browser.sleep(3000);
        dashboardPO.logout()
    });
});