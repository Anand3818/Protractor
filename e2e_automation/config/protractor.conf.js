const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const browserLogs = require('./BrowserLogs');

const DEFAULT_TIMEOUT = 900000;

exports.config = {
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--no-sandbox',
                '--disable-gpu',
                '--load-extension=dist'],
        },
        loggingPrefs: {
            driver: 'INFO',
            browser: 'INFO',
        },
    },
    specs: [
        // '../specs/Chrome_Extensions/Smoke_tests/*.spec.js',
        '../specs/Dashboard/Smoke_tests/Users.smoke.spec.js',
        // '../specs/Dashboard/Regression_tests/User.regression.spec.js'
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: DEFAULT_TIMEOUT,
        isVerbose: true,
    },
    directConnect: true, // this bypasses the selenium server and talks with chrome driver directly
    onPrepare() {
        global.BROWSER_WAIT_TIMEOUT = Math.floor(DEFAULT_TIMEOUT * 0.9);

        require('jasmine-expect');

        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true,
            },
            spec: {
                displayStacktrace: true,
            },
        }));

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            fixedScreenshotName: true,
            savePath: './test/e2e_automation/report',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
        }));

        // setup browser logs reporting on failed tests
        jasmine.getEnv().addReporter(browserLogs.getReporter());
        afterEach(browserLogs.getAfterEach());

        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();

        protractor.ElementFinder.prototype.jsClick = function () {
            return browser.executeScript('arguments[0].click()', this);
        };
    },
    baseUrl: 'https://dev-dashboard.tenfold.com/',
};
