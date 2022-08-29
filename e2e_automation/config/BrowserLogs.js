module.exports.getReporter = () => ({
    specStarted(result) {
        jasmine.getEnv().currentSpec = result;
    },
    specDone() {
        jasmine.getEnv().currentSpec = null;
    },
});

module.exports.getAfterEach = () =>
    () => {
        const {currentSpec} = jasmine.getEnv();

        if (!currentSpec) {
            return;
        }

        if (currentSpec.failedExpectations.length === 0) {
            return;
        }

        return browser.manage().logs().get('browser')
            .then((logs) => {
                if (logs.length === 0) {
                    return;
                }

                const start = logs[0].timestamp;

                console.log('\nBrowser logs dump:');
                console.log(`Start time: ${new Date(start).toISOString()}\n`);

                console.log('LEVEL\t\tTIME\t\tMESSAGE');
                logs.forEach(log => console.log(`${log.level.name}\t\t+${log.timestamp - start}ms\t\t${log.message}`));
            });
    };
