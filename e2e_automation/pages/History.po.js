const extensionPO = require('./Extension.po');

const EC = protractor.ExpectedConditions;

const CTD_TOGGLE_WAIT = 1000;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

class HistoryPO {
    constructor() {
        this.showFloatingUIIcon = element(by.id('show'));
        this.settingsIcon = element(by.css('#header .icon-group.settings svg'));
        this.settingsDropdown = element(by.id('settings-dropdown'));
        this.settingsCTDToggleLabel = element(by.css('#myonoffswitch + label'));
        this.settingsCTDToggleChecked = element(by.css('#myonoffswitch:checked'));
        this.loginDialog = element(by.id('login_dialog'));
        this.analyticsButtonenabled = element(by.id('analytics'));
        this.analyticsButtondisabled = element(by.css('#analytics[style="display: none;"]'))
        this.analytics = element(by.css('.ng-scope>a[href="/features#analytics"]'))
        this.toggleAnalytics = element(by.css('.tgl-btn'))
    }

    // @todo: add version (v3, previous, edge) support
    get() {
        return extensionPO.get()
            .then(() => extensionPO.enableDevMode())
            .then(() => extensionPO.getExtensionID())
            .then(id => browser.get(`chrome-extension://${id}/vedge/history/template/history.html`))
            .then(() => this.waitForLoggedIn());
    }

    waitForLoggedIn() {
        return browser.wait(
            () => browser.wait(EC.not(EC.visibilityOf(this.loginDialog)), 5000)
                .catch(() => browser.refresh()
                    .then(() => { console.log('refreshing'); return false; })),
            TIMEOUT,
            'Login button should not be visible'
        );
    }

    showFloatingUI() {
        return this.showFloatingUIIcon.click();
    }

    openSettings() {
        return browser.actions()
            .mouseMove(this.settingsIcon)
            .click()
            .perform()
            .then(() => browser.wait(EC.visibilityOf(this.settingsDropdown), TIMEOUT, 'Settings drop down is not visible'));
    }

    isCTDEnabled() {
        return this.settingsCTDToggleChecked.isPresent();
    }

    toggleCTD() {
        return this.settingsCTDToggleLabel.click();
    }

    toggleCTDOn() {
        return this.get()
            .then(() => this.openSettings())
            .then(() => browser.sleep(CTD_TOGGLE_WAIT))
            .then(() => this.isCTDEnabled())
            .then(enabled => !enabled && this.toggleCTD())
            .then(() => browser.sleep(CTD_TOGGLE_WAIT))
            .then(() => browser.wait(EC.presenceOf(this.settingsCTDToggleChecked), TIMEOUT, 'CTD toggle is not enabled'));
    }

    toggleCTDOff() {
        return this.get()
            .then(() => this.openSettings())
            .then(() => browser.sleep(CTD_TOGGLE_WAIT))
            .then(() => this.isCTDEnabled())
            .then(enabled => enabled && this.toggleCTD())
            .then(() => browser.sleep(CTD_TOGGLE_WAIT))
            .then(() => browser.wait(EC.not(EC.presenceOf(this.settingsCTDToggleChecked)), TIMEOUT, 'CTD toggle is not disabled'));
    }

    AllCallHistoryEnabled(){
        return this.get()
        .then(()=>browser.wait(EC.presenceOf(this.analyticsButtonenabled),TIMEOUT));
    }

    Analyticspage(){
        this.analytics.click();
        this.toggleAnalytics.click();
    }

    AllCallHistoryDisabled(){
        return this.get()
        .then(()=>browser.wait(EC.presenceOf(this.analyticsButtondisabled),TIMEOUT));
    }
}

module.exports = new HistoryPO();
