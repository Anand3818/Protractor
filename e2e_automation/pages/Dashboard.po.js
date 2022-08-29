const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

class DashboardPageObject {
    constructor() {
        // login page
        this.username = element(by.id('username'));
        this.password = element(by.id('password'));
        this.lOGINButton = element(by.buttonText('LOG IN'));

        // dashboard page
        this.userProfile = element(by.css('#nav-user-profile > a'));
        this.signoutButton = element(by.id('signout-btn'));
        this.loggedUserEmail = element(by.css('#nav-user-profile .user-info div:nth-child(2)'));

        this.currentlyLogged = null;
    }

    get() {
        return browser.get(browser.baseUrl + 'login');
    }

    setUsername(value) {
        return browser.wait(EC.visibilityOf(this.username), TIMEOUT, 'Username field is not visible')
            .then(() => this.username.clear())
            .then(() => this.username.sendKeys(value));
    }


    setPassword(value) {
        return browser.wait(EC.visibilityOf(this.password), TIMEOUT, 'Password field is not visible')
            .then(() => this.password.clear())
            .then(() => this.password.sendKeys(value));
    }

    clickLOGINButton() {
        return this.lOGINButton.click();
    }

    isLogged() {
        return this.loggedUserEmail.isPresent();
    }

    getLoggedUsername() {
        return this.isLogged()
            .then(present => (present && this.loggedUserEmail.getText()) || null);
    }

    login(username, password) {
        if (this.currentlyLogged === username) {
            return Promise.resolve();
        }

        return this.get()
            .then(() => this.getLoggedUsername())
            .then(current => ((current && (current !== username && this.logout())) || Promise.resolve())
                .then(() => {
                    if (current !== username) {
                        return this.setUsername(username)
                            .then(() => this.setPassword(password))
                            .then(() => this.clickLOGINButton());
                    }
                }))
            .then(() => {
                this.currentlyLogged = username;
            });
    }

    logout() {
        browser.sleep(5000);
        browser.executeScript("arguments[0].scrollIntoView(true);", this.userProfile.getWebElement());
        browser.wait(EC.visibilityOf(this.userProfile), TIMEOUT, "User Profile dropDown is not visible");
        return this.userProfile.click()
            .then(() => this.signoutButton.click())
            .then(() => new Promise(resolve => setTimeout(resolve, 5000)))
            .then(() => browser.wait(EC.visibilityOf(this.username), TIMEOUT, 'Username field is not visible'))
            .then(() => {
                this.currentlyLogged = null;
            });
    }
}

module.exports = new DashboardPageObject();
