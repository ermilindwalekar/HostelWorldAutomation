var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// Configuration File
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webderiver instance
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars']
        }
    },
    // Framework to use. Jasmine is recommended default: Jasmine Chai o rMocha
    framework: 'jasmine',

    // spec patterns are relative to the current working directory when protractor is called
    // suites: {
    specs: ['../HostelWorld/e2e/test/HostelWorldSpec.js'],
    // },
    // Options to be passed to jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare() {
        // This is used for reporting purpose for creating automation execution report.
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: '../HostelWorld/reports/'
            })
        );
    }
}