const EC = protractor.ExpectedConditions;
const TIMEOUT = global.BROWSER_WAIT_TIMEOUT;

function SalesForcePO() {
    let self = this;
        self.username = element(by.css('#username'));
        self.password = element(by.css('#password'));
        self.loginBtn = element(by.css('#Login'));

        // legacy
        self.recordURL = 'https://login.salesforce.com/?ec=302&startURL=%2F0034600000T4nmlAAB';
        self.callURL = 'https://na40.salesforce.com/00T46000009oSmL';
        self.recordName = element(by.css('div[id="contactHeaderRow"] h2[class="topName"]'));
        self.cePopup = element(by.css('#tenfold_iframe_inner'));
        self.noteContent = element(by.css('#tsk6_ileinner'));
    

    self.navigate = async function() {
        await browser.get('https://login.salesforce.com');
    }

    self.login = async function(username, password) {
        await self.navigate()
            await browser.wait(EC.visibilityOf(self.username), TIMEOUT, 'Username field is not visible')
            await self.username.clear()
            await self.username.sendKeys(username)
            await self.password.clear()
            await self.password.sendKeys(password)
            await self.loginBtn.click()
    }

    self.waitForNewTab = async function(beforeHandles) {
        await browser.wait(
            () => new Promise(
                resolve =>
                    setTimeout(() => browser.getAllWindowHandles()
                        .then(handles => resolve(handles.length > beforeHandles.length))),
                1000
            ),
            TIMEOUT,
            'New tab should be opened'
        );
    }

    self.waitForUrlToMatch = async function(pattern) {
        let lastInvalidUrl = null;
        await browser.wait(
            () => new Promise(resolve =>
                setTimeout(
                    () => browser.getCurrentUrl()
                        .then((url) => {
                            if (!url.match(pattern)) {
                                lastInvalidUrl = url;
                            }

                            resolve(!url.match(pattern));
                        }),
                    1000
                )),
            TIMEOUT,
            `Browser location ${lastInvalidUrl} did not match ${pattern}`
        );
    }

    self.closeNewestTab = async function() {
        await browser.close()
            await self.switchToNewestTab()
    }

    self.switchToNewestTab = async function() {
        await browser.getAllWindowHandles()
            await (handles => browser.switchTo().window(handles[handles.length - 1]));
    }

    self.waitForCreateCaseTab = async function(beforeHandles) {
        await self.waitForNewTab(beforeHandles)
            await self.switchToNewestTab()
            await self.waitForUrlToMatch(/#\/sObject\/Case\/new\?count=1/)
    }

    self.waitForCreateOpportunityTab = async function(beforeHandles) {
        await self.waitForNewTab(beforeHandles)
            await self.switchToNewestTab()
            await self.waitForUrlToMatch(/#\/alohaRedirect\/.+\/e\?accid=.+&opp3=.+/) // @todo: verify account name
    }

    self.waitForCaseTab = async function(id, beforeHandles) {
        await self.waitForNewTab(beforeHandles)
            await self.switchToNewestTab()
            await self.waitForUrlToMatch(new RegExp(`#\\/sObject\\/${id}\\/view`))
    }
}

module.exports = new SalesForcePO();
