/* global browser */

// @Deprecated: use protractor.conf.js

var CEHelper = require('./helpers/CEHelper');
var Firebase = require('./helpers/FirebaseHelper');
var SpecReporter = require('jasmine-spec-reporter');
var Promise = require('bluebird');

// var istanbulPlugin = require('protractor-istanbul-plugin');

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    // restartBrowserBetweenTests: true,
    getMultiCapabilities: CEHelper.getCapabilities,
    // plugins: [{ inline: istanbulPlugin }],
    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
        print: function () {},
    },
    specs: [
        'tests/popup/**/*.spec.js',
    ],
    exclude: [
        'tests/popup/popup-smoke-test/*.spec.js',
    ],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().setSize(1025, 700);
        // jasmine.getEnv().clearReporters();

        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
        browser.manage().timeouts().pageLoadTimeout(120000);

        var _get = browser.get;

        browser.get = function (...args) {
            function getUrl(tries) {
                if (tries > 10) {
                    throw new Error('CANNOT GET ' + args[0]);
                }
                return new Promise(function (resolve) {
                    var timeout = setTimeout(function () {
                        getUrl(tries + 1).then(resolve);
                    }, 15000);
                    _get.apply(browser, args.concat([]))
                        .then(clearTimeout.bind(null, timeout))
                        .then(resolve);
                });
            }
            return getUrl(0);
        };

        return Firebase.resetUser();
    },
};