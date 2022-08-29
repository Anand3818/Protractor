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
    
    it('Search for user in team Users window',async function () {
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnTeamsButton();
        await usersPO.ClickOnCreateTeamButton();
        await usersPO.EnterTeamName(fakerTeam);
        await usersPO.TeamManagerSelectionFromDropdown(credentials.SelectTeamManager);
        await usersPO.ClickOnSaveButtonOfAddTeamPage();

        await usersPO.get();
        await browser.sleep(4000);
        await usersPO.newUser(fakerUser+"user", fakerEmail);
        await usersPO.get();
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnTeamsButton();
        await usersPO.EnterValue_SearchButtonInTeamsPage(fakerTeam);
        await usersPO.ClickOnManageTeamUserByTeamName(fakerTeam);
        await usersPO.searchAndVerifyUserByNameOnTeamUserPopup(fakerUser+"user");
        // await usersPO.EnterValue_SearchButtonInTeamsPage(fakerUser+"user");
        // await usersPO.validateSearchResultByTeamName(fakerTeam);
    });

    it('Selected values column and available user column should be populated with correct values',async function () {
        await usersPO.EnterValue_SearchButtonInTeamsPage(fakerTeam);
        await usersPO.validateSearchResultByTeamName(fakerTeam);
        await usersPO.ClickOnManageTeamUserByTeamName(fakerTeam);
        await usersPO.selectAvailableValuesByNameOnTeamUserPopup(fakerUser+"user");
    });

    it('Search team with member of the team',async function () {
        await usersPO.EnterValue_SearchButtonInTeamsPage(fakerUser+"user");
        await usersPO.validateSearchResultByTeamName(fakerTeam);
    });

    it('Search team with team manager',async function () {
        await usersPO.EnterValue_SearchButtonInTeamsPage(credentials.SelectTeamManager);
        await usersPO.validateSearchResultByTeamName(fakerTeam);
    });

   

    afterAll(async function () {
        //Removing added Team
        await usersPO.ClickOnTeamsButton();
        await usersPO.EnterValue_SearchButtonInTeamsPage(fakerTeam);
        await usersPO.validateSearchResultByTeamName(fakerTeam);
        await usersPO.RemoveTeamByTeamName(fakerTeam);
        //Removing added user
        await usersPO.get();
        await usersPO.searchForUser(fakerUser+"user", 1);
        await browser.sleep(2000);
        await usersPO.clickOnUserSettingbyUsername(fakerUser+"user");
        await usersPO.deleteUserAndVerify(fakerUser+"user");
        await usersPO.get();
        browser.sleep(3000);

        dashboardPO.logout()
    });
});