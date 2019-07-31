import { browser } from "protractor";
import { HostelWorldComponents } from "../components/HostelWorldComponents";

beforeEach(() => {
    // Here waitForAngularEnabled is set to false because the application is non-angular
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
});
describe('Hostel World test suite', () => {
    const hostelWorldComp = new HostelWorldComponents();

    it('Hostel World using POM layered architecture', () => {
        hostelWorldComp.navigateToURL('https://www.hostelworld.com/').then(() => {
            hostelWorldComp.enterCity('Dublin').then(() => {
                hostelWorldComp.selectCity().then(() => {
                    hostelWorldComp.clickLetsGoButton().then(() => {
                        hostelWorldComp.verifyPropertiesListPage();
                        browser.sleep(3000);
                    });
                });
            });
        });
    });
});