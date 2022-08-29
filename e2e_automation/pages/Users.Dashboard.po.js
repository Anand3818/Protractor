	//const credentials = new (require('../../../.env/credentials'))();
	const EC = protractor.ExpectedConditions;
	const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

	function Users() {

	let self = this;
	self.createUser = element(by.id('create-user'));
	self.fullname = element(by.id('fullname'));
	self.email = element(by.id('username'));
	self.saveUserButton = element(by.id('btnCreateUserModal'));
	self.createUserPopup = element(by.id('create-user-modal'));
	self.userCreatedPopup = element(by.xpath("//h2[contains(text(),'was created successfully')]"));
	self.closeCEPopupBtn = $('#chrome-modal button.close');
	self.searchButton = element(by.xpath('//label[@for="search"]'));
	self.searchForText = $('#search');
	self.userCreationFail = $('.btn.btn-danger');
	self.dropdownToggle = $('.dropdown-toggle');
	self.deleteUser = $('[ng-click="deleteUser(user)"]');
	self.deleteUser_new = element(by.xpath("(//i[@class='fa fa-warning'])[2]"));
	self.AddExtentionPlusIcon = element(by.css("#user-extensions-0 > table-cell-extensions > input-user-extensions > div > span > i"));
	self.EnterExtensionValue = element(by.xpath("(//div[@class='tags']/input)"));
	self.DropDown_Value_Extension = element(by.xpath("//*[@class='option-value extension-value']"));
	self.ExtensionAlreadyassignedMessage = element(by.xpath("//*[text()='The extension selected has already been assigned to Akshay garg']"));
	self.crossButtonOfAssignedExtension = element(by.xpath("(//a[@class='remove-button ng-binding'])[1]"));
	self.SettingsButton = element(by.xpath("(//i[@class='fa fa-gear ng-scope'])[1]"));
	self.PhoneSettingPopup = element(by.xpath("//div[@id='phone-settings-modal']"));
	self.CancelButtonPhoneSettingPopup = element(by.xpath("(//*[text()='Cancel'])[1]"));
	self.CompanySettings = element(by.xpath("(//a[text()='Company settings'])"));
	self.TeamsButton = element(by.xpath("(//ul[@class='nav nav-pills tabs clearfix']/li[2]/a)"));
	self.CreateTeamButton = element(by.xpath("(//div[@class='add-team-button-wrapper'])/button[1]"));
	self.AddTeamName = element(by.xpath("(//input[@id='newTeamName'])"));
	self.AddTeamName1 = element(by.xpath("//input[@id='newTeamName']"));
	self.AddTeam_Manager = element(by.xpath("(//select[@id='newTeamManager'])"));
	self.SelectTeamManagerDropdown = element(by.xpath(""));
	self.SaveButtonOfAddTeamPage = element(by.xpath("(//button[@class='btn btn-lg ng-binding btn-primary'])[1]"));
	self.DeleteButtonOfTeamMember = element(by.xpath("(//i[@class='fa fa-times'])[1]"));
	self.ConfirmButton_DeleteButtonOfTeamMember = element(by.xpath("(//button[@class='confirm'])"));
	self.OKbutton_ConfirmButton_DeleteButtonOfTeamMember = element(by.xpath("//button[text()='OK']"));
	self.PhoneSystem = element(by.xpath("//a[contains(text(),'Phone System')]"));
	self.Link_PhoneSimulator = element(by.xpath("//div[@class='ng-scope']/a"));
	self.FeaturesButton = element(by.xpath("//li[@id='nav-features']"));
	self.AnalyticsOption = element(by.xpath("(//li[@class='ng-scope'])/a[text()='Analytics']"));
	self.AnalyticsOptionInHeadder = element(by.xpath("//li[@id='nav-analytics']"));
	self.EnableDisableButton = element(by.xpath("//label[@class='tgl-btn']"));
	self.UsersDropDown = element(by.xpath("(//a[@class='dropdown-toggle'])[2]"));
	self.UserDropDownList = element(by.xpath("//li[@class='ng-scope']"));
	self.UserOnHeadder = element(by.xpath("((//li[@class='navtop'])/a[1])[1]"));
	self.ActiveUserListInDashboard = element(by.xpath("//td[@class='table-cell-name']/table-cell-name"));
	self.EditButtonTeamName = element(by.xpath("//i[@class='fa fa-edit']"));
	self.Team_DropDown_InAnalyticsPage = element(by.xpath("(//text[@class='ng-binding'])[1]"));
	self.SearchButtonInTeamsPage = element(by.xpath("(//i[@class='fa fa-search'])"));
	self.SearchButtonInTeams = element(by.xpath("(//div[@class='search-bar-input'])[1]/input"));
	self.ManageTeamUser_button = element(by.xpath("(//td[@class='table-action-buttons']/i[1])[1]"));
	self.AvailableValuesInTeamUserPopup = element(by.xpath("//select[@class='picklist-available-values']/option[1]"));
	self.SelectArrow = element(by.xpath("//i[@class='fa fa-arrow-right']"));
	self.SaveButtonOfTeamUsersPopup = element(by.xpath("(//button[@class='btn btn-lg ng-binding btn-primary'])[3]"));
	self.UsersTabOnHeadder = element(by.xpath("(//i[@class='fa fa-bars'])[1]"));
	self.EditUser = element(by.xpath("(//button[@class='btn dropdown-toggle'])[1]"));
	self.NonAdminFirstName = element(by.xpath("//input[@id='fullname-edit-user']"));
	self.SaveUserButtonInPopup = element(by.xpath("(//button[@class='btn btn-primary'])[3]"));
	self.EditUserOption1 = element(by.xpath("(//ul[@class='dropdown-menu']/li/a/i[@class='fa fa-pencil'])[1]"));
	self.AnalyticsButtonInHeadder = element(by.xpath("//a[@href='/analytics']"));
	self.CompanyTextFieldOnCompanyPage = element(by.xpath("//input[@id='company']"));
	self.SynchronizeUsersFromSalesforce = element(by.xpath("(//div[@class='ng-binding'])[3]"));
	//NEW
	self.mobile_1_img = element(by.xpath("(//div[@class='phone'])[1]"));
	self.MobNumEnterTextBox1 = element(by.css("#ngb-tab-0-panel > div > div > div:nth-child(1) > app-phone > div > div.phone-number > div > input"));
	self.MobNumEnterTextBox2 = element(by.css("#ngb-tab-0-panel > div > div > div:nth-child(2) > app-phone > div > div.phone-number > div > input"));
	self.PhoneNumberBox1 = element(by.xpath("(//input[@id='phone-number-box'])[1]"));
	self.PhoneNumberBox2 = element(by.xpath("(//input[@id='phone-number-box'])[2]"));
	self.GreenCallButon = element(by.xpath("(//i[@class='zmdi zmdi-hc-lg zmdi-phone'])[1]"));
	self.CallReceiveButton2 = element(by.xpath("(//i[@class='fa fa-phone fa-2x'])[2]"));
	self.CallDisconnrctionIssue = element(by.xpath("(//i[@class='fa fa-phone fa-2x'])[2]"));



	self.ValidatingSynchronizeUserFromSalesforce = async function(){
		browser.wait(EC.visibilityOf(self.SynchronizeUsersFromSalesforce), 5000);
		browser.actions().mouseMove(self.SynchronizeUsersFromSalesforce).perform();
		await self.SynchronizeUsersFromSalesforce.click();
	}

	self.CLICKonUsersTabOnHeadder = async function(){
		browser.wait(EC.visibilityOf(self.UsersTabOnHeadder), 5000);
		browser.actions().mouseMove(self.UsersTabOnHeadder).perform();
		await self.UsersTabOnHeadder.click();
	}

	self.clickOnUserSettingbyUsername = async function(value){
		var el = element(by.xpath("//b[text()='"+value+"']/../../..//i[@class='fa fa-bars']"));
		browser.wait(EC.visibilityOf(el), TIMEOUT, "User Setting button is not Visible");
		await el.click();
	}

	self.deleteUserAndVerify = async function(value){
		await self.deleteUser.click();
	}

	self.SearchByTeamName = function(name) {
		return element(by.xpath("//td[contains(text(),'" + name + "')]"));
	};

	self.userColumnValue = function(userNo) {
		return element(by.xpath("(//table/tbody/tr/td[@class='table-cell-name']//b)[" + userNo +"]")).getText();
	}

	self.verifyEmailOnUsersTab = function(email) {
		return element(by.xpath('//a[contains(text(),"'+ email +'")]'));
	}

	self.verifyUserOnUsersTab = function(user) {
		return element(by.xpath('//b[contains(text(),"'+ user +'")]'));
	}

	self.get = function() {
		browser.get(browser.baseUrl + 'users');
	}

	self.newUser = async function(username, email) {
		await browser.wait(EC.visibilityOf(self.createUser), TIMEOUT, 'Create User button is not visible');
		await browser.sleep(5000);
		await browser.executeScript('arguments[0].click();', self.createUser);
		await self.fullname.sendKeys(username);
		await self.email.sendKeys(email);
		await self.saveUserButton.click();
	}

	self.searchForUserRegression = async function(username, userNo) {
		await browser.wait(EC.visibilityOf(self.searchButton), TIMEOUT, 'Search button on user page');
		await browser.executeScript('arguments[0].click();', self.searchButton);
		await self.searchForText.sendKeys(username);
		browser.sleep(2000);
	}

	self.searchForUser = async function(username, userNo) {
		browser.wait(EC.invisibilityOf($('.reveal-modal-bg')), TIMEOUT, "edit user pop up is still visible")
		browser.sleep(3000);
		await self.searchButton.click();
		await self.searchForText.clear();
		await self.searchForText.sendKeys(username);
		browser.sleep(2000);
	}

	self.closeCEPopup = async function() {
		await browser.sleep(3000);
		await self.closeCEPopupBtn.isPresent().then(function(flag){
			if(flag){
				self.closeCEPopupBtn.isDisplayed().then(function(flag1){
				if(flag1)
					browser.executeScript("arguments[0].scrollIntoView();", self.closeCEPopupBtn.getWebElement());
					try{
					browser.wait(EC.visibilityOf(self.closeCEPopupBtn), 20000).then(function(){
						self.closeCEPopupBtn.click();    
						});
					}
					catch(err)
					{}
				});
			}    
		});
	}

	self.navigateToCompanyPage = async function(){
		await browser.get(browser.baseUrl +'organization');
		await browser.wait(EC.presenceOf(self.CompanyTextFieldOnCompanyPage), TIMEOUT, 'navigateToCompanyPage');
		await self.CompanyTextFieldOnCompanyPage.isPresent().then(function(navigateToCompanyPage){
		}).then(function(){
			browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath("(//*[@class='radio'])[1]")).getWebElement());
			browser.sleep(3000);
		});
	}

	self.AnalyticsVisibilityRadioButtons = async function(){
		element(by.xpath("(//*[@class='radio'])")).isPresent().then(function(flag){
			if(flag){   
				browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath("(//*[@class='radio'])[1]")).getWebElement());                      
				element(by.xpath("(//*[@class='radio'])[1]")).click();
				expect(element(by.xpath("(//*[@class='radio'])[2]")).getAttribute('class')).not.toContain('valid-parse');
				element(by.xpath("(//*[@class='radio'])[2]")).click();
				expect(element(by.xpath("(//*[@class='radio'])[1]")).getAttribute('class')).not.toContain('valid-parse'); 
			}
		});    
	}

	self.createNEWUser = async function(username_facker,ID_facker){
		await self.createUser.click();
		await element(by.xpath("//input[@id='fullname']")).sendKeys(username_facker);
		await element(by.xpath("//input[@id='username']")).sendKeys(ID_facker);
		
	}

	self.clickOnAddExtentionIcon = async function(){
		browser.sleep(3000);
		await self.AddExtentionPlusIcon.isDisplayed().then(function(flag){
			if(flag)
				self.AddExtentionPlusIcon.click();
		});
	}

	self.EnterExtensionNumExtensionIcon = async function(number){       
		browser.sleep(4000);
		await browser.executeScript('arguments[0].click();', self.EnterExtensionValue);
		await self.EnterExtensionValue.sendKeys(number);
		await browser.sleep(4000);
		//await self.DropDown_Value_Extension.click();
	}

	self.EnterNewExtensionNum = async function(NewExtension){
		await browser.wait(EC.visibilityOf(self.EnterExtensionValue), TIMEOUT, 'Drop_down List visible');
		await self.EnterExtensionValue.sendKeys(NewExtension);
		await browser.wait(EC.visibilityOf(self.DropDown_Value_Extension), TIMEOUT, 'Drop_down List visible');
		await self.DropDown_Value_Extension.click();
		await expect(element(by.xpath("(//i[@class='fa fa-gear ng-scope'])[1]")).isPresent()).toBeTruthy();
	}

	self.ValidateExtensionAssignment = async function(){
		await browser.wait(EC.visibilityOf(element(by.xpath("//*[text()='The extension selected has already been assigned to Dashboard Automation']"))), TIMEOUT, 'Create User button is not visible');
		await expect((element(by.xpath("//*[text()='The extension selected has already been assigned to Dashboard Automation']"))).isPresent()).toBe(true);
		await browser.sleep(5000);
	};

	self.ValidateUnExtensionAssignment = async function(){
		await expect((element(by.xpath("//ul[@class='suggestion-list']"))).isDisplayed()).toBe(false);
	};

	self.ClickOnCrossButton = async function(){
		await browser.sleep(2000);
		await browser.executeScript('arguments[0].click();', self.crossButtonOfAssignedExtension); 
		await browser.sleep(2000);       
		await browser.executeScript('arguments[0].click();', element(by.xpath("//button[@class='confirm']")));
		await browser.sleep(2000);
		//await browser.wait(EC.visibilityOf(self.crossButtonOfAssignedExtension), TIMEOUT, 'Cross button of assigned extension number');
		//await self.crossButtonOfAssignedExtension.click();
	}

	self.ClickOnSettingButton = async function(){
		await browser.wait(EC.visibilityOf(self.SettingsButton), TIMEOUT, 'Wait for settings button');
		await self.SettingsButton.click();
		await browser.sleep(3000);
	}

	self.ValidatePhoneSettingPopup = async function(){
		await browser.wait(EC.visibilityOf(self.PhoneSettingPopup), TIMEOUT, 'Phone setting popup visibility');
		await expect(self.PhoneSettingPopup.isDisplayed()).toBeTruthy();
		await browser.sleep(3000);
		await browser.wait(EC.visibilityOf(self.CancelButtonPhoneSettingPopup), TIMEOUT, 'Phone setting cancel button visibility');
		await self.CancelButtonPhoneSettingPopup.click();
	}

	self.ClickOnCompanySettings = async function(){
		self.waitForInvisibiltyOfSpinner();
		await browser.wait(EC.visibilityOf(self.CompanySettings), TIMEOUT, 'CompanySettings'); 
		await self.CompanySettings.click();
	}

	self.ClickOnSyncronize_with_salesForce_button = async function(){
		await browser.wait(EC.visibilityOf(element(by.xpath("(//button[@class='btn btn-primary'])[2]"))), TIMEOUT, 'Syncronize with salesforce button'); 
		browser.sleep(4000);
		await element(by.xpath("(//button[@class='btn btn-primary'])[2]")).click();
		await browser.wait(EC.visibilityOf(element(by.xpath("(//div[@class='partner-modal-title'])[1]"))), TIMEOUT, 'Syncronize with salesforce Popup');
		expect(element(by.xpath("(//div[@class='partner-modal-title'])[1]")).isDisplayed()).toBeTruthy();
		browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
		browser.sleep(2000);
	}

	self.ClickOnTeamsButton = async function(){
		await browser.get(browser.baseUrl +'organization#!/teams');
		await browser.sleep(4000);
	}

	self.ClickOnTroubleshootingPage = async function(){
		await browser.get(browser.baseUrl +'callsequence');
		await browser.sleep(4000);
	}

	self.GotoCallSequenceDiagnosticTool = async function(){
		await browser.wait(EC.visibilityOf(element(by.xpath("(//a[@class='pure-button pure-input-1-2 pure-button-primary callsequence-button'])"))), TIMEOUT, 'GotoCallSequenceDiagnosticTool');
		element(by.xpath("(//a[@class='pure-button pure-input-1-2 pure-button-primary callsequence-button'])")).click();
		await browser.wait(EC.visibilityOf(element(by.xpath("//input[@type='submit']"))), TIMEOUT, '');
	}

	self.ClickOnStartLoggingButton = async function(){
		browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath("//input[@type='submit']")).getWebElement());
		element(by.xpath("//input[@type='submit']")).click();
		
	}

	self.ValidateUserOnUserDropDownOnAnalyticsPage = async function(NewUser){
		return element(by.xpath('(//ul[@class="dropdown-menu"])[4]//*[contains(text(),"'+ NewUser +'")]'));
	}

	self.ClickOnCreateTeamButton = async function(){
		await browser.sleep(4000);
		await browser.wait(EC.visibilityOf(self.CreateTeamButton), TIMEOUT, 'Teams button visibility');
		browser.actions().mouseMove(self.CreateTeamButton).click().perform();
	}

	self.EnterTeamName = async function(DemoTeamName){
		await browser.sleep(5000);
		//console.log("*****************************"+DemoTeamName+"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		await browser.wait(EC.elementToBeClickable(self.AddTeamName), TIMEOUT, 'Teams Name Text Field visibility');
		await self.AddTeamName.click();
		await browser.wait(EC.elementToBeClickable(self.AddTeamName), TIMEOUT, 'Teams Name Text Field visibility');
		await self.AddTeamName.sendKeys(DemoTeamName);
	}

	self.ReEnterTeamName = async function(DemoTeamName){
		browser.sleep(5000);
		await self.AddTeamName1.click();
		await self.AddTeamName1.clear();
		await self.AddTeamName1.sendKeys(DemoTeamName);
	}


	self.ClickOnTeamManager = async function(){
		await browser.wait(EC.elementToBeClickable(self.AddTeam_Manager), TIMEOUT, 'Team Manager Drop-down Cicable');
		await self.AddTeam_Manager.click();
	}

	self.TeamManagerSelectionFromDropdown = async function(ManagerValue){
		await self.ClickOnTeamManager();
		await browser.wait(EC.elementToBeClickable(element(by.xpath("(//select[@id='newTeamManager'])/option[1]"))), TIMEOUT, 'Team Manager Drop-down Clicable');
		element(by.xpath("//select[@id='newTeamManager']/option[text()='" + ManagerValue +"']")).click();
	}

	self.ClickOnSaveButtonOfAddTeamPage = async function(){
		await browser.wait(EC.elementToBeClickable(self.SaveButtonOfAddTeamPage), TIMEOUT, 'Save button of Add Team Page');
		await self.SaveButtonOfAddTeamPage.click();
		await browser.wait(EC.invisibilityOf($('.partner-modal-title.ng-binding')), 20000, 'Seems Team name is already taken');
	}

	self.PreviouslyAddedTeamName = function(user) {
		browser.wait(EC.elementToBeClickable(element(by.xpath('//td[contains(text(),"'+ user +'")]'))), TIMEOUT, 'Save button of Add Team Page');
		return element(by.xpath('//td[contains(text(),"'+ user +'")]'));
	}

	self.DeletePreviouslyAddedTeamName = function(){
		browser.sleep(5000);
		browser.wait(EC.visibilityOf(self.DeleteButtonOfTeamMember), TIMEOUT, '10000');
		self.DeleteButtonOfTeamMember.click();
		browser.sleep(2000);
		browser.wait(EC.visibilityOf(self.ConfirmButton_DeleteButtonOfTeamMember), TIMEOUT, '2000');
		self.ConfirmButton_DeleteButtonOfTeamMember.click();
		browser.sleep(2000);  
		browser.wait(EC.visibilityOf(self.OKbutton_ConfirmButton_DeleteButtonOfTeamMember), TIMEOUT, '30000000');
		self.OKbutton_ConfirmButton_DeleteButtonOfTeamMember.click();
		browser.navigate().refresh();
	}

	self.ClickOnPhoneSystem = function(){
		browser.get(browser.baseUrl + 'organization#!/phone');
	}

	self.ClickOnPhoneSimulatorlink = async function(){     
		await browser.sleep(4000);
		await browser.wait(EC.elementToBeClickable(self.Link_PhoneSimulator), TIMEOUT, 'Wait for phone simulator link');
		await browser.sleep(4000);
		browser.executeScript("arguments[0].click();", self.Link_PhoneSimulator.getWebElement());
	}

	self.ClickOnFeaturesbutton = async function(){
		await browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button');
		await self.FeaturesButton.click();
	}

	self.enableDisableAnalytics = async function(){
		await browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button1');
		await self.FeaturesButton.click();
		await browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button2');
		await self.AnalyticsOption.click();
		await browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button3');
		await self.EnableDisableButton.click();                  
					
	}

	self.NewTabHandle = async function(){
		browser.sleep(5000);
		await browser.getAllWindowHandles().then(function (handles) {
			browser.switchTo().window(handles[1]).then(function () {
				expect(browser.getCurrentUrl()).toContain('phone-simulator.tenfold.com');
				browser.close();
				browser.switchTo().window(handles[0]);
			});
		});
	}

	//NEW
    self.getSimpulatorNewTabURL = async function(){
        browser.sleep(5000);
        await browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                //browser.wait(EC.elementToBeClickable(self.mobile_1_img), TIMEOUT, 'NOT VISIBLE: mobile_1_img');
                browser.driver.getCurrentUrl().then(function(url) {
                    if(url.indexOf("-dev") >= 0 ){
                        console.log("url contains -dev")
						browser.close();
						browser.switchTo().window(handles[0]);
                    }else{                                              
                        url = url.replace('phone-simulator.','phone-simulator-dev.');               
                        // URL_Split = url.split('phone-simulator');
                        // url = URL_Split[0] + "phone-simulator-dev" + URL_Split[1];
                        browser.get(url);                       
                        browser.executeScript('window.scrollTo(0,10000);');
                        browser.wait(EC.elementToBeClickable(self.MobNumEnterTextBox1), TIMEOUT, 'NOT VISIBLE: MobNumEnterTextBox1');
                        browser.executeScript("arguments[0].click()", self.MobNumEnterTextBox1);
                        self.MobNumEnterTextBox1.clear();
                        self.MobNumEnterTextBox1.sendKeys("1234");
                        self.MobNumEnterTextBox1.sendKeys(protractor.Key.ENTER);
                        browser.wait(EC.elementToBeClickable(self.MobNumEnterTextBox2), TIMEOUT, 'NOT VISIBLE: MobNumEnterTextBox2');
                        browser.executeScript("arguments[0].click()", self.MobNumEnterTextBox2);
                        self.MobNumEnterTextBox2.clear();
                        self.MobNumEnterTextBox2.sendKeys("5678");
                        self.MobNumEnterTextBox2.sendKeys(protractor.Key.ENTER);
                        //PhoneNumberBox1
                        browser.wait(EC.elementToBeClickable(self.PhoneNumberBox1), TIMEOUT, 'NOT VISIBLE: PhoneNumberBox1');
                        browser.executeScript("arguments[0].click()", self.PhoneNumberBox1);
                        self.PhoneNumberBox1.clear();
                        self.PhoneNumberBox1.sendKeys("5678");
                        //PhoneNumberBox2
                        browser.wait(EC.elementToBeClickable(self.PhoneNumberBox2), TIMEOUT, 'NOT VISIBLE: PhoneNumberBox2');
                        browser.executeScript("arguments[0].click()", self.PhoneNumberBox2);
                        self.PhoneNumberBox2.clear();
                        self.PhoneNumberBox2.sendKeys("1234");                        
                        browser.wait(EC.elementToBeClickable(self.GreenCallButon), TIMEOUT, 'NOT VISIBLE: GreenCallButon');
                        browser.executeScript("arguments[0].click()", self.GreenCallButon);
                        browser.wait(EC.elementToBeClickable(self.CallReceiveButton2), TIMEOUT, 'NOT VISIBLE: CallReceiveButton2');
                        browser.executeScript("arguments[0].click()", self.CallReceiveButton2);
						browser.sleep(8000);

						browser.wait(EC.elementToBeClickable(self.CallDisconnrctionIssue), TIMEOUT, 'NOT VISIBLE: CallDisconnrctionIssue');
                        browser.executeScript("arguments[0].click()", self.CallDisconnrctionIssue);
                        browser.sleep(8000);
						browser.close();
						browser.switchTo().window(handles[0]);
                    }
                    //browser.close();
                    //browser.switchTo().window(handles[0]);
                });
            });
        });
    }

	self.ClickOnFeaturesbutton = async function(){
		await browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button');
		await self.FeaturesButton.click();
	}

	self.AnalyticsEnable = async function(){
		await self.closeCEPopup();
		browser.sleep(2000);
		browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button1');
		self.FeaturesButton.click();
		browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button2');
		self.AnalyticsOption.click();
		browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button3');
		self.EnableDisableButton.click();
		browser.sleep(3000);
		browser.navigate().refresh();
	}

	self.ClickOnDELButtonTeamName = async function(){
		browser.wait(EC.visibilityOf(element(by.xpath("(//i[@class='fa fa-times'])[1]"))), 30000, "Delete 1").then(function() {
			element(by.xpath("(//i[@class='fa fa-times'])[1]")).click();
		});
		browser.wait(EC.visibilityOf(self.ConfirmButton_DeleteButtonOfTeamMember), TIMEOUT, '2000');
		self.ConfirmButton_DeleteButtonOfTeamMember.click();
		browser.sleep(7000);  
	}

	self.RemoveTeamByTeamName = async function(teamName){
		var el = element(by.xpath("//td[text() = '"+teamName+"']/..//i[@class='fa fa-times']"));
		self.waitForInvisibiltyOfSpinner();
		browser.wait(EC.elementToBeClickable(el), TIMEOUT, 'Remove Team button is not clickable for team '+teamName);
		await el.click();
		var el1 = element(by.xpath("//p[@style='display: block;' and text()='Are you sure you want to remove "+teamName+"?']"));
		browser.wait(EC.visibilityOf(el1), TIMEOUT, 'Remove Team confirmation popup is not visible');
		browser.sleep(1000);
		expect(el1.isDisplayed()).toBeTruthy();
		await self.ConfirmButton_DeleteButtonOfTeamMember.click();
		await browser.wait(EC.visibilityOf(element(by.xpath("//h2[text()='Team removed successfully']"))), TIMEOUT, 'Team Removed Successfully popup is not visible');
		expect(element(by.xpath("//h2[text()='Team removed successfully']")).isDisplayed()).toBeTruthy();
		await self.OKbutton_ConfirmButton_DeleteButtonOfTeamMember.click();
	}

	self.Analytics_Enable = async function(){
		await browser.get(browser.baseUrl +'features');
		browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button2');
		self.AnalyticsOption.click();
		browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button3');
		self.EnableDisableButton.click();
		browser.sleep(3000);
		browser.navigate().refresh();
		browser.sleep(3000);
	}

	self.ValidateDisabledAnalyticsInHeader = async function(){
		browser.sleep(5000);
		await element(by.css("#nav-analytics > a")).isPresent().then(function(flag){          
			browser.sleep(3000);       
			if(flag)
			{
				browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button1');
				self.FeaturesButton.click();
				browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button2');
				self.AnalyticsOption.click();
				browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button3');
				self.EnableDisableButton.click();
				browser.sleep(3000);
				browser.navigate().refresh();
				browser.sleep(3000);                       
			}                           
			else
			{
				browser.sleep(3000);   
			}    
		});
	} 

	self.ClickOnTeam_DropDown_InAnalyticsPage = async function(){
		browser.wait(EC.elementToBeClickable(self.Team_DropDown_InAnalyticsPage), TIMEOUT, 'Edit button of Add Team Page');
		await self.Team_DropDown_InAnalyticsPage.click();
		browser.sleep(2000);
		element.all(by.xpath("(//ul[@class='dropdown-menu'])[3]/li")).getText().then(function(Team){
			self.ClickOnCompanySettings();
			self.ClickOnTeamsButton();
			for (let i = 0; i < 2; ++i){
				browser.sleep(2000);                  
			};
		});
	}

	self.CheckAnalyticsAvalibility = async function(){
		browser.sleep(3000);
		await self.AnalyticsButtonInHeadder.isPresent().then(function(flag){            
			browser.sleep(3000);       
			if(flag)
			{
				browser.sleep(3000);                       
			}                           
			else
			{
				browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button1');
				self.FeaturesButton.click();
				browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button2');
				self.AnalyticsOption.click();
				browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button3');
				self.EnableDisableButton.click();
				browser.sleep(3000);
				browser.navigate().refresh();
				browser.sleep(3000);   
			}    
		});
	} 

	self.ValidateAnalyticsInHeader1 = async function(){
		await self.AnalyticsOptionInHeadder.isPresent().then(function(flag){
			if(flag)
			{
				self.AnalyticsOptionInHeadder.isDisplayed().then(function(flag1)
				{
					if(flag1)
					{
						browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button1');
						self.FeaturesButton.click();
						browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button2');
						self.AnalyticsOption.click();
						browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button3');
						self.EnableDisableButton.click();
						browser.sleep(3000);
						browser.waitForAngular();
						browser.navigate().refresh();                      
					}                    
				});
			}
			else
			{
				browser.wait(EC.elementToBeClickable(self.FeaturesButton), TIMEOUT, 'Wait for Features button1');
				self.FeaturesButton.click();
				browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button4');
				self.AnalyticsOption.click();
				browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button5');
				self.EnableDisableButton.click();
				browser.sleep(3000);
				browser.waitForAngular();
				browser.navigate().refresh();
				browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button4');
				self.AnalyticsOption.click();
				browser.wait(EC.elementToBeClickable(self.EnableDisableButton), TIMEOUT, 'Wait for Features button5');
				self.EnableDisableButton.click();
				browser.sleep(3000);
				browser.waitForAngular();
				browser.navigate().refresh();
			}    
		});
	}

	self.ClickOnAnalyticsInList = async function(){
		await browser.wait(EC.elementToBeClickable(self.AnalyticsOption), TIMEOUT, 'Wait for Features button6');
		await self.AnalyticsOption.click();
	}

	self.ClickOnAnalyticsButton = async function(){
		browser.executeScript("arguments[0].scrollIntoView();", self.AnalyticsButtonInHeadder.getWebElement());
		self.AnalyticsButtonInHeadder.click();
	}

	self.ClickOnUsersDropDown = async function(){
		browser.sleep(2000);
		await browser.wait(EC.elementToBeClickable(self.UsersDropDown), TIMEOUT, 'Wait for Features button8');
		await browser.sleep(4000);
		await self.UsersDropDown.click();
	}

	self.CountNumOfUsers = async function(){
		browser.sleep(2000);
		element.all(by.xpath("//li[@role='presentation']/a[1]")).getText().then(function(list){
			browser.wait(EC.elementToBeClickable(self.UserOnHeadder), TIMEOUT, 'Wait for Features button9');
			self.UserOnHeadder.click();
			browser.sleep(4000);
			element.all(by.xpath("//td[@class='table-cell-name']/table-cell-name/b")).getText().then(function(listInDashboard){
				for(let j=1 ; j < list.length; ++j){
					if(list[j]!="")
					{expect(listInDashboard.includes(list[j]))};
				};
			});
		});
	}

	self.ClickOnEditButtonTeamName = async function(){
		browser.wait(EC.elementToBeClickable(self.EditButtonTeamName), TIMEOUT, 'Edit button of Add Team Page');
		await self.EditButtonTeamName.click();
	}

	self.ClickOnEditButtonByTeamName = async function(teamName){
		var el = element(by.xpath("//td[text() = '"+teamName+"']/..//i[@class='fa fa-edit']"));
		browser.wait(EC.visibilityOf(el), TIMEOUT, "Edit button is not clickable for team "+teamName)
		browser.wait(EC.elementToBeClickable(el), TIMEOUT, 'Edit button is not clickable for team '+teamName);
		await el.click();
	}

	self.validateSearchResultByTeamName = async function(value){
		var el = element(by.xpath("//td[text() = '"+value+"']"));
		expect(el.isDisplayed()).toBeTruthy();
	}

	self.Search_SearchButtonInTeamsPage = async function(){
		browser.sleep(2000);
		await browser.wait(EC.elementToBeClickable(self.SearchButtonInTeams), TIMEOUT, 'Wait for Features button8');
		await self.SearchButtonInTeams.click();
	}

	self.Search_for_non_existing_team_team_name_userManager = async function(fakerTeam){
		browser.wait(EC.visibilityOf(element(by.xpath("(//div[@class='search-bar-input']/input)[1]"))), 50000, "Search text box in team page").then(function() {
			element(by.xpath("(//div[@class='search-bar-input']/input)[1]")).sendKeys(fakerTeam);
			var myElement = element(by.xpath("//*[contains(text(),'fakerTeam')]"));
			expect(myElement.isPresent()).toBeFalsy();
			element(by.xpath("(//div[@class='search-bar-input']/input)[1]")).clear();
		});

	}

	self.VelidateTest_Failure_TeamName = function(Failure_TeamName){       
		return element(by.xpath('//*[text()="Failure_TeamName"]')); 
	}

	self.VelidateTest_Failure_Manager = async function(Failure_Manager){
		return element(by.xpath('//*[contains(text(),"'+ Failure_Manager +'")]'));
	}

	self.CLEAR_FUN = async function(Path){
		browser.sleep(2000);
		await self.SearchButtonInTeamsPage.clear();
		element(by.xpath("(//div[2][@class='search-bar-input']/input[1])[1]")).clear();
	}

	self.ClickOnManageTeamUser_button = async function(){
		browser.sleep(5000);
		await browser.wait(EC.elementToBeClickable(self.ManageTeamUser_button), TIMEOUT, 'Search for ManageTeamUser_button');
		await self.ManageTeamUser_button.click();
		browser.sleep(3000);
	}

	self.ClickOnManageTeamUserByTeamName = async function(teamName){
		var el = element(by.xpath("//td[text() = '"+teamName+"']/..//i[@class='fa fa-users']"));
		browser.sleep(2000);
		await browser.wait(EC.elementToBeClickable(el), TIMEOUT, 'ManageTeamUser action button is not clickable for team '+ teamName);
		await el.click();
		browser.sleep(3000);
	}

	self.ClickOnAvailableValuesInTeamUserPopup = async function(){
		await browser.wait(EC.elementToBeClickable(self.AvailableValuesInTeamUserPopup), TIMEOUT, 'Click on AvailableValuesInTeamUserPopup');
		await self.AvailableValuesInTeamUserPopup.click();
		browser.sleep(1000);
		await self.SelectArrow.click();
		browser.sleep(2000);
		await self.SaveButtonOfTeamUsersPopup.click();
	}

	self.selectAvailableValuesByNameOnTeamUserPopup = async function(value){
		var el = element(by.xpath("//select[@class='picklist-available-values']/option[text()='"+value+"']"));
		var el1 = element(by.xpath("//select[@class='picklist-selected-values']/option[text()='"+value+"']"));
		await browser.wait(EC.elementToBeClickable(self.AvailableValuesInTeamUserPopup), TIMEOUT, 'Click on AvailableValuesInTeamUserPopup');
		await element(by.xpath("//input[@placeholder='Type to filter']")).clear();
		await element(by.xpath("//input[@placeholder='Type to filter']")).sendKeys(value);
		await el.click();
		browser.sleep(1000);
		await self.SelectArrow.click();
		expect(el1.isDisplayed()).toBeTruthy();
		await self.SaveButtonOfTeamUsersPopup.click();
		browser.sleep(2000);
	}

	self.searchAndVerifyUserByNameOnTeamUserPopup = async function(value){
		var el = element(by.xpath("//select[@class='picklist-available-values']/option[text()='"+value+"']"));
		await browser.wait(EC.elementToBeClickable(self.AvailableValuesInTeamUserPopup), TIMEOUT, 'Click on AvailableValuesInTeamUserPopup');
		await element(by.xpath("//input[@placeholder='Type to filter']")).clear();
		await element(by.xpath("//input[@placeholder='Type to filter']")).sendKeys(value);
		expect(el.isDisplayed()).toBeTruthy();
		await self.SaveButtonOfTeamUsersPopup.click();
		browser.sleep(2000);
	}

	self.MemberCountValue = function() {
		browser.sleep(4000);
		return element(by.xpath("(//td[@class='ng-binding'])[3]")).getText();
	}

	self.ClickOnUsersTabOnHeadder = async function(){
		await self.UsersTabOnHeadder.click();
	}

	self.ClickOnEditUser = async function(){
		browser.sleep(2000);
		await browser.wait(EC.elementToBeClickable(self.EditUser), TIMEOUT, 'Click on EditUser');
		await self.EditUser.click();
		browser.sleep(3000);
	}

	self.ClickOnEditUserOption1 = async function(){
		browser.sleep(3000);
		await browser.wait(EC.elementToBeClickable(self.EditUserOption1), TIMEOUT, 'Click on EditUser');
		await self.EditUserOption1.click();
	}

	self.ReEnterNonAdminFirstName = async function(UserName){
		await self.closeCEPopup();
		await browser.wait(EC.elementToBeClickable(self.NonAdminFirstName), TIMEOUT, 'Edit First Name');
		await self.NonAdminFirstName.clear();
		await self.NonAdminFirstName.sendKeys(UserName);
	}

	self.EditNonAdminName = async function(UserName){
		await browser.wait(EC.elementToBeClickable(self.NonAdminFirstName), TIMEOUT, 'Edit First Name');
		await self.NonAdminFirstName.clear();
		await self.NonAdminFirstName.sendKeys(UserName);
		browser.sleep(3000);
		await self.SaveUserButtonInPopup.click();
		browser.sleep(4000);
	}

	self.GetNonAdminFirstName = async function(){
		return element(by.xpath("((//td[@class='table-cell-name'])/table-cell-name/b)[1]")).getText();
	}

	self.verifyRequiredErrorBubble = async function(){
		expect(element(by.xpath("//input[@id='txt_title' and @required]")).isDisplayed()).toBeTruthy();
	}

	self.clickConfirmButton_DeleteButtonOfTeamMember = async function(){
		await self.ConfirmButton_DeleteButtonOfTeamMember.click();
	}

	self.EnterValue_SearchButtonInTeamsPage = async function(Team_Name) {
		var el = element(by.css("#search-bar > div.search-bar-input > input"));
		browser.executeScript("arguments[0].click()", el);
		element(by.css("#search-bar > div.search-bar-input > input")).clear();
		element(by.css("#search-bar > div.search-bar-input > input")).sendKeys(Team_Name);
		browser.sleep(1000);
	}

	self.clickOnPrfileHeader = async function(){
		var el = element(by.xpath("//a[@href='/profile' and text()='Profile']"));
		browser.wait(EC.elementToBeClickable(el), TIMEOUT, "Profile tab in header is not clickable");
		await el.click();
		browser.wait(EC.invisibilityOf(element(by.xpath("//div[@class='splash']"))), TIMEOUT, "Waiting for invisibility of spinner")
	}

	self.verificationOfProfileTab = async function(){
		browser.wait(EC.visibilityOf(element(by.xpath("//a[@href='#settings' and text()='Settings']"))), TIMEOUT, "Seems Profile page did not loaded properly")
		await element(by.xpath("//a[@href='#settings' and text()='Settings']")).click();
		await element(by.xpath("//a[@href='#email_templates' and text()='Email Templates']")).click();
		await element(by.xpath("//a[@href='#voicemail-drop' and text()='Voicemail Drop']")).click();
		await element(by.xpath("//a[@href='#install' and text()='Install Extension']")).click();
		await element(by.xpath("//a[@href='#downloads' and text()='Downloads']")).click();
	}

	self.clickOnVoiceMailDropTab = async function(){
		var el = element(by.xpath("//a[@href='#voicemail-drop' and text()='Voicemail Drop']"));
		browser.wait(EC.elementToBeClickable(el), TIMEOUT, "Voice Mail Drop tab is not clickable");
		await el.click();
	}

	self.verificationOfVoiceMailDropTab = async function(){
		var el = element(by.xpath("//div[@id='voicemail-drop']/h1[text()='Voicemail Drop']"));
		expect(el.isDisplayed()).toBeTruthy();
	}

	self.waitForInvisibiltyOfSpinner = async function(){
		browser.wait(EC.invisibilityOf($('#tenfold-spinner')), TIMEOUT, "Spinner is still there").then(function(){
			browser.sleep(2000);
		});
	}

	}

	module.exports = Users;