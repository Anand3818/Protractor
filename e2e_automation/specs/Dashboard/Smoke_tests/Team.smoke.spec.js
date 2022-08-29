const dashboardPO = require('../../../pages/Dashboard.po');
const credentials = new (require('../../../env/credentials'))();
const faker = require('../../../config/TestData');
const usersPO = new (require('../../../pages/Users.Dashboard.po'))();

const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

describe('Company Settings Smoke Test', function () {
    beforeAll(function () {
        return dashboardPO.login(credentials.adminUser.username, credentials.adminUser.password)
            .then(() => expect(browser.getCurrentUrl()).not.toContain('login'),
            // usersPO.closeCEPopup()
            );
    });
    let fakerUser = faker.Random.name,
        fakerEmail = faker.Random.email,
        fakerTeam = faker.Random.name + faker.Random.number;

    it('Create a team',async function () {
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnTeamsButton();
        await usersPO.ClickOnCreateTeamButton();
        await usersPO.EnterTeamName(fakerTeam);
        await usersPO.TeamManagerSelectionFromDropdown(credentials.SelectTeamManager);
        await usersPO.ClickOnSaveButtonOfAddTeamPage();
        await expect(usersPO.PreviouslyAddedTeamName(fakerTeam).isDisplayed()).toBeTruthy();
    });
    
    it('Edit team',async function () {
        await usersPO.EnterValue_SearchButtonInTeamsPage(fakerTeam);
        await usersPO.ClickOnEditButtonByTeamName(fakerTeam);
        await usersPO.ReEnterTeamName('updated'+fakerTeam);
        await usersPO.ClickOnSaveButtonOfAddTeamPage();
        await expect(usersPO.PreviouslyAddedTeamName('updated'+fakerTeam).isDisplayed()).toBeTruthy();
        await browser.sleep(3000);
    });

    it('Search team with team name',async function () {
        await expect(usersPO.SearchByTeamName('updated'+fakerTeam).isDisplayed()).toBeTruthy();
    });

    it('Search for non existing team, team name, user(Manager)',async function () {        
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnTeamsButton();
        await usersPO.Search_for_non_existing_team_team_name_userManager('NON_EXISTING_'+fakerTeam);
    });
    
    it('Verify PhoneSystem is connected',async function () {
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnPhoneSystem();
        await usersPO.ClickOnPhoneSimulatorlink();
        await usersPO.NewTabHandle();
    });

    it('Filter Users with Team',async function () {
        await usersPO.get();
        await browser.sleep(4000);
        await usersPO.newUser(fakerUser+"user", fakerEmail);
        await usersPO.get();
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnTeamsButton();
        await usersPO.EnterValue_SearchButtonInTeamsPage('updated'+fakerTeam);
        await usersPO.ClickOnManageTeamUserByTeamName('updated'+fakerTeam);
        await usersPO.selectAvailableValuesByNameOnTeamUserPopup(fakerUser+"user");
        await usersPO.EnterValue_SearchButtonInTeamsPage(fakerUser+"user");
        await usersPO.validateSearchResultByTeamName('updated'+fakerTeam);
       
    });

    it('Remove Team',async function () {
        await usersPO.EnterValue_SearchButtonInTeamsPage('updated'+fakerTeam);
        await usersPO.validateSearchResultByTeamName('updated'+fakerTeam);
        await usersPO.RemoveTeamByTeamName('updated'+fakerTeam);
        //Removing added user
        await usersPO.get();
        await usersPO.searchForUser(fakerUser+"user", 1);
        await browser.sleep(2000);
        await usersPO.clickOnUserSettingbyUsername(fakerUser+"user");
        await usersPO.deleteUserAndVerify(fakerUser+"user");
        await usersPO.get();
    });

    it('Synchronize with Salesforce on teams page',async function () {
        await usersPO.ClickOnCompanySettings();
        await usersPO.ClickOnTeamsButton();
        await usersPO.ClickOnSyncronize_with_salesForce_button();
    });

    afterAll(function () {
        dashboardPO.logout()
    });
});