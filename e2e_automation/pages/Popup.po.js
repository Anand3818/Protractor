const historyPO = require('./History.po');

const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

function PopupPO() {
    let self = this;
        self.data = {};

        // popup iframe
        self.popupIframe = element(by.css('callinize-popup::shadow iframe'));
        self.popupContainerClosed = element(by.css('#tenfold_iframe_inner.callinize-closed'));

        // Default Popup Components
        self.activeButton = element(by.css('button[id=top-toggle-active]'));
        self.recentButton = element(by.css('button[id=top-toggle-recent]'));
        self.closePopup = element(by.css('#close_popup_image'));
        self.hidePopup = element(by.css('#callinize_bottom_left_sidebar'));
        self.messageBox = element(by.id('callinize_message_box'));
        self.popupBox = element(by.id('callinize_popup'));

        // login screen
        self.loginContainer = element(by.id('callinize_login_container'));
        self.loginBtn = element(by.css('#callinize_login_container a[id="callinize_login_button"]'));

        // ACTIVE TAB:
        self.activeName = element(by.css('#callinize_call_details div[id=callinize_caller_name]'));
        self.recordLink = element(by.css('a[id="callinize_match_name"]'));
        self.activeParent = element(by.css('#callinize_call_details a[id=callinize_caller_company]'));
        self.activePhone = element(by.css('#callinize_call_details span[id=callinize_caller_phone]'));
        self.activityText = element(by.css('#callinize_current_note > activity.flex-carousel-seat.ng-scope.ng-isolate-scope.is-ref'));
        self.rightArrow = element(by.css('activities div[class="callinize_notes_right"]'));
        self.unassociateLnk = element(by.css('#callinize_unassociate_call'));
        self.cancelUnassociateBtn = element(by.css('div[class="sweet-alert sweetalert-compact-popup showSweetAlert visible"] button[class=cancel]'));
        self.confirmUnassociateBtn = element(by.css('.sa-confirm-button-container>.confirm'));
        self.verifyUnassociate = element(by.id('#callinize_edit_name'));
        self.noMatchFoundText = element(by.css('div [class="contact-search-help ng-binding"]'));
        self.noMatchFoundPhone = element(by.css('div [class="contact-search-help ng-binding"] span[class="phone-number ng-binding"]'));
        self.searchField = element(by.css('#callinize_edit_name'));
        self.firstValueFound = element(by.css('div[class="callinize_multiple_picks ng-scope"] div[class="callinize_empty_circle"]'));
        self.notesField = element(by.css('#callinize_save_memo'));
        self.saveNotesBtn = element(by.css('#callinize_save_button'));
        self.savingNotesMsg = element(by.css('#callinize_add_notes_container span[class="saving-status-text ng-binding"]'));

        self.savingErrorBox = element(by.css('#callinize_add_notes_container.error'));
        self.notesEmailIcon = element(by.css('#callinize_email_icon'));
        self.notesTaskIcon = element(by.css('#callinize_task_icon'));
        self.notesSpinnerIcon = element(by.css('#loader-1'));
        self.notesErrorIcon = element(by.css('#callinize_add_notes_container > div > svg.error-icon.ng-scope'));
        self.taskToastMsg = element(by.css('div[role="tooltip"] .ui-tooltip-content'));
        self.noRecordFound = element(by.css('div[class="contacts_status callinize_no_contacts_found ng-binding"]'));
        self.createContactBtn = element(by.css('#create_record_actions > button:nth-child(1)'));
        self.createAccountBtn = element(by.css('#create_record_actions > button:nth-child(2)'));
        self.createLeadBtn = element(by.css('#create_record_actions > button:nth-child(3)'));
        self.contactIdentifier = element(by.css('div[class="ng-style=\'getRecordColor(call.matchedCrmRecrods[0].moduleMeta.color)\' identifier-contacts"]'));
        self.accountIdentifier = element(by.css('div[class="ng-style=\'getRecordColor(call.matchedCrmRecrods[0].moduleMeta.color)\' identifier-accounts"]'));
        self.leadIdentifier = element(by.css('div[class="ng-style=\'getRecordColor(call.matchedCrmRecrods[0].moduleMeta.color)\' identifier-leads"]'));
        self.multiMatchRecordContainer = element(by.id('callinize_multiple_selectbox'));

        // Relations menu
        self.relationsButton = element(by.id('show-relate-opportunity'));
        self.createOpportunityButton = element(by.id('relate-resource-new-opportunity-btn'));
        self.createCaseButton = element(by.id('relate-resource-new-case-btn'));
        self.relationsRefresh = element(by.css('#resources-container > div.selectize-dropdown-content > div:nth-child(1) > div.optgroup-header > img.refresh-icon'));
        self.firstCaseSubject = element(by.css('#resources-container > div.selectize-dropdown-content > div:nth-child(3) > div.option.checkbox.checkbox-success.checkbox-circle.ng-scope > label > span:nth-child(2)'));
        self.firstCaseUnselected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope"] label[for="dispo-checkbox-ca-0"]'));
        self.firstCaseSelected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope selected"] label[for="dispo-checkbox-ca-0"]'));
        self.firstOpportunitySubject = element(by.css('#resources-container > div.selectize-dropdown-content > div:nth-child(2) > div:nth-child(2) > label'));
        self.firstOpportunityUnselected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope"] label[for="dispo-checkbox-op-0"]'));
        self.firstOpportunitySelected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope selected"] label[for="dispo-checkbox-op-0"]'));
        self.firstCustomResourceUnselected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope"] label[for="dispo-checkbox-invoice__c-0"]'));
        self.firstCustomResourceSelected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope selected"] label[for="dispo-checkbox-invoice__c-0"]'));

        // Activities
        self.firstActivityTitle = element(by.css('#callinize_current_note > activity.flex-carousel-seat.ng-scope.ng-isolate-scope.is-ref > div > div > span.callinize_created_by_text > activity-type > span:nth-child(3)'));
        self.firstOpportunityActivityTitle = element(by.css('#callinize_current_note > activity.flex-carousel-seat.ng-scope.ng-isolate-scope.is-ref > div > div > span.callinize_created_by_text > activity-type > div:nth-child(1) > a'));
        self.firstActivityLink = element(by.css('#callinize_current_note > activity.flex-carousel-seat.ng-scope.ng-isolate-scope.is-ref > div > div > span.callinize_created_by_text > activity-type > div:nth-child(1) > a'));
        self.firstActivityCreationDate = element(by.css('#callinize_current_note > activity.flex-carousel-seat.ng-scope.ng-isolate-scope.is-ref > div > div > span.callinize_created_by_date'));

        self.recordLabelAccount = element(by.css('#callinize_record_identifier_matched.identifier-account'));

        // no match screen
        self.noMatchContainer = element(by.id('callinize_no_match'));

        // Opportunities/Cases Menu
        self.relationsBtn = element(by.css('span[class="icon-suitcase"]'));
        self.relationsMenu = element(by.css('div[id="resources-container"] div[class="selectize-dropdown-content"]'));
        self.createNewLbl = element(by.css('div[translate="createNew"]'));
        self.refreshBtn = element(by.css('img[class="refresh-icon"]'));
        self.loadingIcon = element(by.css('img[class="loading-icon"]'));
        self.newOpportunity = element(by.css('div[id="relate-resource-new-opportunity-btn"]'));
        self.newCase = element(by.css('div[id="relate-resource-new-case-btn"]'));
        self.oppsSectionIco = element(by.css('div[feature="opportunities"] div[class="callinize_record_identifier identifier-opportunities ng-binding"]'));
        self.oppsSection = element(by.css('div[feature="opportunities"] div[translate="opportunities"]'));
        self.casesSectionIco = element(by.css('div[feature="cases"] div[class="callinize_record_identifier identifier-case ng-binding"]'));
        self.casesSection = element(by.css('div[feature="cases"] div[translate="cases"]'));
        self.firstOppUnselectedLbl = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope"] label[for="dispo-checkbox-op-0"]'));
        self.firstOppSelectedLbl = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope selected"] label[for="dispo-checkbox-op-0"]'));
        self.firstCaseUnselectedLbl = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope"] label[for="dispo-checkbox-ca-0"]'));
        self.firstCaseSelectedLbl = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope selected"] label[for="dispo-checkbox-ca-0"]'));

        // Dispositions SubMenu
        self.disposBtn = element(by.css('button[id="show-dispositions"]'));
        self.dispositionsContainer = element(by.id('dispositions-container'));

        self.dispOpt00 = element(by.css('#dispo-checkbox00-label'));
        self.dispOpt00Selected = element(by.css('.selected #dispo-checkbox00-label'));
        self.dispOpt1Unselected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope"] label[id="dispo-checkbox13-label"]')); // Salutation Disposition: "Dr."
        self.dispOpt1Selected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope selected"] label[id="dispo-checkbox13-label"]')); // Salutation Disposition: "Dr."
        self.dispOpt2Unselected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope"] label[id="dispo-checkbox30-label"]')); // Salutation Disposition: "Web"
        self.dispOpt2Selected = element(by.css('div[class="option checkbox checkbox-success checkbox-circle ng-scope selected"] label[id="dispo-checkbox30-label"]')); // Salutation Disposition: "Web"

        // RECENT TAB: Recent Item for Selection
        self.recentNoMatchItem = $$('.history-container fieldset.no-match').first();
        self.recentSingleMatchItem = $$('.history-container fieldset.single-match').first();
        self.recentMultiMatchMatchItem = $$('.history-container fieldset.multi-match').first();

        self.recentItem0 = element(by.css('#history-container-history-item-0'));
        self.recentItem0Name = element(by.css('#history-container-history-item-0 span[class="history-name ng-binding"]'));

        self.recentItem2 = element(by.css('#history-container-history-item-2'));

        self.recentItem10 = element(by.css('#history-container-history-item-10'));
        self.recentItemLeadWithRequiredDisposition = self.recentItem10;
        self.recentContactPic = element(by.css('#history-container-history-item-2 img[class="mini-contact-pic"]'));
        self.recentCallDot = element(by.css('#history-container-history-item-2 div[class*="history-call-dot"]'));
        self.recentItemName = element(by.css('#history-container-history-item-2 span[class="history-name ng-binding"]'));
        self.recentRecordBadge = element(by.css('#history-container-history-item-2 div[class*="recent-view-badge callinize_record_identifier"]'));
        self.recentCallIcon = element(by.css('#history-container-history-item-2 img[class="history-call-direction"]'));
        self.recentItemParent = element(by.css('#history-container-history-item-2 span[class="history-name ng-binding history-name-parent"]'));
        self.recentItemPhone = element(by.css('#history-container-history-item-2 span[class="history-name history-phone ng-binding"]'));
        self.recentTimeElapsed = element(by.css('#history-container-history-item-2 span[class="history-elapsed"]'));
        self.incomingOutgoing = element(by.css('#callinize_incoming_outgoing'));
    

    self.switchToPopup = async function() {
        await browser.wait(EC.visibilityOf(self.popupIframe), TIMEOUT, 'Popup is not visible')
            await browser.switchTo().frame(self.popupIframe.getWebElement())
    }

    self.switchToDefaultContent = async function() {
        await browser.switchTo().defaultContent();
    }

    self.saveNotes = async function(note, assert) {
        browser.wait(EC.visibilityOf(self.notesField), TIMEOUT, 'Notes field is not visible');
        // browser.sleep(250);
        self.notesField.clear();
        self.notesField.sendKeys(note);
        self.saveNotesBtn.click();
        // browser.sleep(250);
        await browser.wait(EC.visibilityOf(self.savingNotesMsg), TIMEOUT, 'Saving notes message is not visible');

        await self.data.note == self.notesField.getText();
        await self.data._savingMessage == self.savingNotesMsg.getText();

        if (assert) assert();
        return self;
    }

    self.goToRecord = async function() {
        self.recordLink.click();
        return self;
    }

    self.clearMetaData = async function() {
        self.data = {};
    }

    self.getRecordName = async function() {
        await self.recordLink.getText();
    }

    self.searchFor = async function(value) {
        return browser.wait(EC.visibilityOf(self.searchField), TIMEOUT, 'Search field is not visible')
            .then(() => self.searchField.clear())
            .then(() => self.searchField.sendKeys(value));
    }

    self.clickFirstSearchResult = async function() {
        return browser.wait(EC.visibilityOf(self.firstValueFound), TIMEOUT, 'First search result is not visible')
            .then(() => self.firstValueFound.jsClick());
    }

    self.switchToRecent = async function(timeout = TIMEOUT) {
        await browser.wait(EC.visibilityOf(self.recentButton), timeout, 'Waiting for recent button visibility timed out')
            await self.recentButton.jsClick()
            await browser.wait(EC.visibilityOf(self.recentItem0), timeout, 'Switching to recent screen timed out')
    }

    self.switchToSingleMatch = async function() {
        await self.switchToRecent()
            await self.recentSingleMatchItem.jsClick()
            await self.waitForSingleMatchScreen()
    }

    self.switchToNoMatch = async function() {
        await self.switchToRecent()
            await self.recentNoMatchItem.jsClick()
            await self.waitForNoMatchScreen()
    }

    self.switchToFirstRecent = async function() {
        await self.recentItem0.jsClick();
    }

    self.getAccount = async function() {
        return $$('.history-container fieldset.single-match')
            .then(els => Promise.all(els.map(el => el.$$('.identifier-account').isPresent()))
                .then((findings) => {
                    const idx = findings.findIndex(f => f);
                    if (idx < 0) { throw new Error('No account found in recent history'); }

                    return els[idx];
                }));
    }

    self.switchToAccount = async function() {
        await self.switchToRecent()
            await self.getAccount()
            await ((account => account.jsClick()))
            await (() => self.waitForAccountScreen());
    }

    self.saveNote = async function(value) {
        await browser.wait(EC.visibilityOf(self.notesField), TIMEOUT, 'Waiting for notes field visibility timed out')
            await self.notesField.clear()
            await self.notesField.sendKeys(value)
            await self.saveNotesBtn.jsClick()
    }

    self.openDispositions =async function() {
        await browser.wait(EC.visibilityOf(self.disposBtn))
            await self.disposBtn.jsClick()
            await browser.wait(EC.visibilityOf(self.dispositionsContainer), TIMEOUT, 'Waiting for dispositions to be opened timed out')
    }

    self.waitForNoMatchScreen = async function() {
        await browser.wait(EC.visibilityOf(self.noMatchContainer), TIMEOUT, 'Waiting for no match screen to be present timed out');
    }

    self.waitForMultiMatchScreen= async function() {
        await browser.wait(EC.visibilityOf(self.multiMatchRecordContainer), TIMEOUT, 'Waiting for multi match screen to be present timed out');
    }

    self.waitForSingleMatchScreen = async function() {
        await browser.wait(EC.visibilityOf(self.recordLink), TIMEOUT, 'Waiting for single match screen to be present timed out');
    }

    self.waitForAccountScreen = async function() {
        await browser.wait(EC.visibilityOf(self.recordLabelAccount), TIMEOUT, 'Record label of account type is not visible');
    }

    self.waitForNoteTaskIcon = async function() {
        await browser.wait(EC.visibilityOf(self.notesTaskIcon), TIMEOUT, 'Waiting for task icon timed out');
    }

    self.waitForNoteToBeSaved = async function() {
        await browser.wait(EC.visibilityOf(self.notesSpinnerIcon), 1000, 'Note saving status spinner is not visible')
            await browser.wait(EC.not(EC.visibilityOf(self.notesSpinnerIcon)), TIMEOUT, 'Note saving status spinner should disappear after a while')
            await expect(self.notesErrorIcon.isPresent()).toBe(false, 'Server error while saving note')
    }

    self.waitForPhoneCall = async function(number) {
        await browser.wait(
            () => self.switchToRecent(500)
                .then(() => browser.wait(EC.textToBePresentInElement(self.recentItem0, number), 500))
                .catch(() => false), // retry if not found
            TIMEOUT,
            `Waiting for phone call ${number} to be present timed out`
        );
    }

    self.waitForLoggedIn = async function() {
        await browser.wait( // @todo: ET-247: session in not detected correctly sometimes thus refreshing is needed
            () => browser.wait(EC.not(EC.visibilityOf(self.loginContainer)), 5000)
                .catch(() => browser.refresh()
                    .then(() => self.switchToPopup())
                    .then(() => { console.log('Reloaded CE due to still being not logged in'); return false; })),
            TIMEOUT,
            'Logging in failure'
        );
    }

    self.isFloatingUIVisible = async function() {
        return browser.sleep(1000)
            .then(() => self.popupContainerClosed.isPresent())
            .then(present => !present);
    }

    self.showFloatingUI = async function() {
        await historyPO.get()
            await historyPO.showFloatingUI()
    }

    self.ensureFloatingUIVisibility = async function() {
        return browser.getCurrentUrl()
            .then(url => self.isFloatingUIVisible()
                .then(visible => visible || self.showFloatingUI())
                .then(() => browser.get(url)))
            .then(() => self.switchToPopup())
            .then(() => self.waitForLoggedIn());
    }

    self.openRelationsMenu = async function() {
        await self.relationsBtn.jsClick()
            await browser.wait(EC.visibilityOf(self.relationsMenu), TIMEOUT, 'Relations menu is not visible')
    }

    self.createCase = async function() {
        await self.openRelationsMenu()
            await self.createCaseButton.jsClick()
    }

    self.waitForFirstActivity = async function() {
        await browser.wait(EC.visibilityOf(self.firstActivityTitle), TIMEOUT, 'First activity should be visible');
    }

    self.waitForFirstActivityCreationDate = async function() {
        await browser.wait(EC.visibilityOf(self.firstActivityCreationDate), TIMEOUT, 'First activity should be visible');
    }

    self.openFirstActivity = async function() {
        await self.firstActivityLink.jsClick();
    }

    self.showDispositions = async function() {
        await browser.wait(EC.visibilityOf(self.disposBtn), TIMEOUT, 'Dispositions button not visible')
            await self.disposBtn.jsClick()
            await browser.wait(EC.visibilityOf(self.dispositionsContainer), TIMEOUT, 'Dispositions container not visible')
            await browser.wait(EC.visibilityOf(self.dispOpt00), TIMEOUT, 'First disposition option is not visible')
    }

    self.closeDispositions = async function() {
        await browser.wait(EC.visibilityOf(self.dispositionsContainer), TIMEOUT, 'Dispositions container not visible')
            await self.disposBtn.jsClick()
            await browser.wait(EC.not(EC.visibilityOf(self.dispositionsContainer)), TIMEOUT, 'Dispositions container still visible')
    }

    self.selectDispositionOpt00 = async function() {
        await self.dispOpt00.jsClick()
            await browser.wait(EC.visibilityOf(self.dispOpt00Selected), TIMEOUT, 'First disposition option should be selected')
    }

    self.unselectDispositionOpt00 = async function() {
        await self.dispOpt00Selected.jsClick()
            await browser.wait(EC.visibilityOf(self.dispOpt00), TIMEOUT, 'First disposition option should not be selected')
    }

    self.unassociateCall=async function(){
        await self.unassociateLnk.jsClick()
        browser.sleep(2000);
        await self.confirmUnassociateBtn.jsClick();
        await self.waitForNoMatchScreen()
    }
}

module.exports = PopupPO;
