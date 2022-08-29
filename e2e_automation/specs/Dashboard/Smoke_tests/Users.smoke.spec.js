const dashboardPO = require('../../../pages/Dashboard.po');
const credentials = new (require('../../../env/credentials'))();
const faker = require('../../../config/TestData');
const usersPO = new (require('../../../pages/Users.Dashboard.po'))();

const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

describe('Users Smoke Test', function () {
    beforeAll(function () {
        return dashboardPO.login(credentials.adminUser.username, credentials.adminUser.password)
            .then(() => expect(browser.getCurrentUrl()).not.toContain('login'),
            );
    });
    let fakerUser = faker.Random.name,
        fakerEmail = faker.Random.email,
        fakerTeam = faker.Random.name + faker.Random.number;
  
    it('Create user and verify',async function () {
        await usersPO.get();
        await browser.sleep(4000);
        await usersPO.newUser(fakerUser, fakerEmail);
        await usersPO.get();
        await browser.sleep(4000);
        await usersPO.searchForUser(fakerUser, 1);
        await browser.sleep(4000);
        await expect(usersPO.verifyUserOnUsersTab(fakerUser).isDisplayed()).toBeTruthy();
    });

    it('Create duplicate user and verify',async function () {
        await usersPO.get();
        await usersPO.newUser(fakerUser, fakerEmail);
        await browser.wait(EC.presenceOf(usersPO.userCreationFail), TIMEOUT);
        await expect(usersPO.userCreationFail.isPresent()).toBeTruthy();
    });

    it('Search for existing user',async function () {
        await usersPO.get();
        await usersPO.searchForUser(fakerUser, 1);
        await browser.sleep(2000);
        await expect(usersPO.verifyUserOnUsersTab(fakerUser).isDisplayed()).toBeTruthy();
    });

    it('Edit the user with existing user profile',async function () {
        await usersPO.ClickOnUsersTabOnHeadder();
        await usersPO.ClickOnEditUserOption1();
        await usersPO.EditNonAdminName(credentials.NonAdminNameEdit);
        expect(usersPO.GetNonAdminFirstName()).toEqual(credentials.NonAdminNameEdit);
    });

    it('Create new extension',async function () {
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnPhoneSystem();
        await usersPO.ClickOnPhoneSimulatorlink();
        await usersPO.getSimpulatorNewTabURL();
        await usersPO.get();
        await usersPO.searchForUser(credentials.NonAdminNameEdit, 1);
        await browser.sleep(5000);
        await usersPO.clickOnAddExtentionIcon();
        await usersPO.EnterNewExtensionNum(credentials.EnterExtensionNum_phoneSimulator);
        await browser.sleep(3000);
        await usersPO.ClickOnCrossButton();
        browser.sleep(3000);       
    });

    xit('Adding non assigned extension to a new user',async function () {
        await usersPO.get();
        await usersPO.searchForUser(credentials.NonAdminNameEdit, 1);
        await usersPO.clickOnAddExtentionIcon();
        await usersPO.EnterNewExtensionNum(credentials.EnterExtensionNum);
        await browser.sleep(3000);
    });
    
    xit('Adding assigned extension to a new user',async function () {       
        browser.navigate().refresh();
        await usersPO.EnterExtensionNumExtensionIcon(credentials.EnterExtensionNum);
            //await usersPO.ValidateUnExtensionAssignment();
        //await usersPO.ClickOnCrossButton();
    });

    xit('Click on settings button and validate popup is open or not & Phone settings fields under an extension',async function () {
        await usersPO.ClickOnSettingButton();
        await usersPO.ValidatePhoneSettingPopup();
        await usersPO.ClickOnCrossButton();
        browser.sleep(3000);
    });
    
    xit('Delete user',async function () {
        await usersPO.searchForUser(credentials.NonAdminNameEdit, 1);
        await browser.sleep(2000);
        await usersPO.clickOnUserSettingbyUsername(credentials.NonAdminNameEdit);
        await usersPO.deleteUserAndVerify(credentials.NonAdminNameEdit);
        await browser.sleep(6000);
        await expect(usersPO.verifyUserOnUsersTab(fakerUser).isPresent()).toBeFalsy();
    });

    xit('Synchronize Users_From Salesforce',async function () {
        await usersPO.ValidatingSynchronizeUserFromSalesforce();
    });

    afterAll(function () {
        //dashboardPO.logout()
    });
});