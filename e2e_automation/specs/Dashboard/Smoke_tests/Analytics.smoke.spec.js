const dashboardPO = require('../../../pages/Dashboard.po');
const credentials = new (require('../../../env/credentials'))();
const faker = require('../../../config/TestData');
const usersPO = new (require('../../../pages/Users.Dashboard.po'))();

const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

describe('Analytics Smoke Test', function () {
    beforeAll(function () {
        return dashboardPO.login(credentials.adminUser.username, credentials.adminUser.password)
            .then(() => expect(browser.getCurrentUrl()).not.toContain('login'),
            usersPO.closeCEPopup()
            );
    });
    let fakerUser = faker.Random.name,
        fakerEmail = faker.Random.email,
        fakerTeam = faker.Random.name + faker.Random.number;

    it('Analytics visibility Team level',async function () {
        await usersPO.ClickOnTeamsButton();
        await usersPO.ClickOnCreateTeamButton();
        await usersPO.EnterTeamName(fakerTeam);
        await usersPO.TeamManagerSelectionFromDropdown(credentials.SelectTeamManager);
        await usersPO.ClickOnSaveButtonOfAddTeamPage();
        await usersPO.CheckAnalyticsAvalibility();   
        await usersPO.ClickOnAnalyticsButton();
        await usersPO.ClickOnTeam_DropDown_InAnalyticsPage();
    });

    it('Enable feature',async function () {        
        await browser.sleep(2000);   
        await usersPO.ValidateDisabledAnalyticsInHeader();
    });

    it('Analytics Visibility for all Users in the Org',async function () {        
        await usersPO.CheckAnalyticsAvalibility();   
        await usersPO.ClickOnAnalyticsButton();
        await usersPO.ClickOnUsersDropDown();
        await usersPO.CountNumOfUsers();
    });

    it('Analytics User Table columns verification',async function () {        
        await usersPO.newUser(fakerUser, fakerEmail);
        await usersPO.get();
        await browser.sleep(4000);
        await usersPO.CheckAnalyticsAvalibility();  
        await usersPO.ClickOnAnalyticsButton(); 
        await usersPO.ClickOnUsersDropDown();
        // await expect(usersPO.ValidateUserOnUserDropDownOnAnalyticsPage(fakerTeam).isDisplayed()).toBeTruthy();
    });

    it('Analytics Visibility for only Admin and Teams with broader Visibility',async function () {           
        await usersPO.navigateToCompanyPage();
        await usersPO.AnalyticsVisibilityRadioButtons();
    });

    it('Disable feature',async function () {        
        await browser.sleep(2000);   
        await usersPO.ValidateDisabledAnalyticsInHeader();
        await expect(usersPO.AnalyticsButtonInHeadder.isPresent()).toBeFalse();
    });

    afterAll(async function () {
        //Removing added Team
        await usersPO.ClickOnTeamsButton();
        await usersPO.EnterValue_SearchButtonInTeamsPage(fakerTeam);
        await usersPO.validateSearchResultByTeamName(fakerTeam);
        await usersPO.RemoveTeamByTeamName(fakerTeam);
        //Removing added user
        await usersPO.get();
        await usersPO.searchForUser(fakerUser, 1);
        await browser.sleep(2000);
        await usersPO.clickOnUserSettingbyUsername(fakerUser);
        await usersPO.deleteUserAndVerify(fakerUser);
        await usersPO.get();
        browser.sleep(3000);
        dashboardPO.logout()
    });
});