const PROFILES = {
    DEFAULT: 'default',
};

const CONFIGURATIONS = {
    [PROFILES.DEFAULT]: {
        username: 'dhruva.pathak+dev@tenfold.com',
        password: '7Iron-hide',
        organizationId: '5b488bb53e780f0007ded1e6',
        extension: '6666',
        singleMatchPhoneNumber: '500400',
        multiMatchPhoneNumber: '4155991160',
        get noMatchPhoneNumber() {
            return Math.floor(Math.random() * 10000000000);
        },
        accountPhoneNumber: '1000000001',
        crm: {
            type: 'salesforce',
            username: 'dpat@ten.com',
            password: '7iron-hide',
            loginUrl: 'https://login.salesforce.com/',
        },
    },
};

const PHONE_SIMULATOR_URL = 'https://phone-simulator.tenfold.com/';

class E2EConfig {
    constructor(profile = PROFILES.DEFAULT) {
        this.configuration = CONFIGURATIONS[profile];
    }

    get username() {
        return this.configuration.username;
    }

    get password() {
        return this.configuration.password;
    }

    get organizationId() {
        return this.configuration.organizationId;
    }

    get phoneSimulatorURL() {
        return PHONE_SIMULATOR_URL + this.organizationId;
    }

    get extension() {
        return this.configuration.extension;
    }

    get singleMatchPhoneNumber() {
        return this.configuration.singleMatchPhoneNumber;
    }

    get noMatchPhoneNumber() {
        return this.configuration.noMatchPhoneNumber;
    }

    get multiMatchPhoneNumber() {
        return this.configuration.multiMatchPhoneNumber;
    }

    get crm() {
        return this.configuration.crm;
    }

    get accountPhoneNumber() {
        return this.configuration.accountPhoneNumber;
    }
}

E2EConfig.DEFAULT = new E2EConfig(PROFILES.DEFAULT);

module.exports = E2EConfig;
