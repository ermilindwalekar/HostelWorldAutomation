"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HostelWorldComponents_1 = require("../components/HostelWorldComponents");
beforeEach(function () {
    // Here waitForAngularEnabled is set to false because the application is non-angular
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.manage().window().maximize();
});
describe('Hostel World test suite', function () {
    var hostelWorldComp = new HostelWorldComponents_1.HostelWorldComponents();
    it('Hostel World using POM layered architecture', function () {
        hostelWorldComp.navigateToURL('https://www.hostelworld.com/').then(function () {
            hostelWorldComp.enterCity('Dublin').then(function () {
                hostelWorldComp.selectCity().then(function () {
                    hostelWorldComp.clickLetsGoButton().then(function () {
                        hostelWorldComp.verifyPropertiesListPage();
                        protractor_1.browser.sleep(3000);
                    });
                });
            });
        });
    });
});
