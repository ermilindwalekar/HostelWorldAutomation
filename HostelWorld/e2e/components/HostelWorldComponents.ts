import { browser, element, by, $, ExpectedConditions } from "protractor";
const EC = ExpectedConditions;
const maxwait = 20000;
export class HostelWorldComponents {
    inputSearchBox: string = '//input[@id="home-search-keywords"]';
    highlightedlistItem: string = '//div[@class="suggestions-container"]//li[@class="hover"]';
    btnLetsGo: string = '//button[contains(@class,"submit-search-form") and contains(text(),"Let")]';
    featuredProperties: string = '//div[@id="fabResultsContainer"]//span[text()="Featured Properties"]';
    mapToggleActive: string = 'hide-for-small topfilter rounded maptoggle active';
    propertiesList: string = '//div[@id="fabResultsContainer"]//div[@class="property-card-desktop d-flex flex-row"]';
    /**
     * Comment: Function will Navigate to given url
     * Author: Milind Walekar
     */
    public navigateToURL(url: string) {
        return browser.get(url);
    }

    /**
     * Comment: Enter City
     * Author: Milind Walekar
     */
    public enterCity(city: string) {
        return browser.wait(EC.visibilityOf(element(by.xpath(this.inputSearchBox))), maxwait, 'inputSearchBox notfound').then(() => {
            element(by.xpath(this.inputSearchBox)).click();
            return element(by.xpath(this.inputSearchBox)).sendKeys(city);
        });
    }

    /**
     * Comment: Function will Select City
     * Author: Milind Walekar
     */
    public selectCity() {
        return browser.wait(EC.visibilityOf(element(by.xpath(this.highlightedlistItem))), maxwait, 'highlightedlistItem notfound').then(() => {
            return element(by.xpath(this.highlightedlistItem)).click();
        });
    }

    /**
     * Comment: Click Lets Go Button
     * Author: Milind Walekar
     */
    public clickLetsGoButton() {
        return browser.wait(EC.visibilityOf(element(by.xpath(this.btnLetsGo))), maxwait, 'btnLetsGo notfound').then(() => {

            return element(by.xpath(this.btnLetsGo)).click();
        });
    }

    /**
     * Comment: Returns Boolean wether Map Toggle button is Active or not
     * Author: Milind Walekar
     */
    public isMapToggleActive() {
        return $(this.mapToggleActive).isPresent();
    }
    /**
     * Comment: Returns Boolean wether Map Toggle button is Active or not
     * Author: Milind Walekar
     */
    public isFeaturedPropertiesTextPresent() {
        return browser.wait(EC.visibilityOf(element(by.xpath(this.featuredProperties))), maxwait, 'featuredProperties notfound').then(() => {
            return element(by.xpath(this.featuredProperties)).isPresent();
        });
    }

    /**
     * Comment: Return the count of properties
     * Author: Milind Walekar
     */
    public getCountOfProperties() {
        return browser.wait(EC.visibilityOf(element.all(by.xpath(this.propertiesList)).first()), maxwait, 'propertiesList notfound').then(() => {
            browser.executeScript('arguments[0].scrollIntoView();', element.all(by.xpath(this.propertiesList)).first().getWebElement());
            return element.all(by.xpath(this.propertiesList)).count();
        });
    }

    /**
     * Comment: Verify Properties List Page
     * Author: Milind Walekar
     */
    public verifyPropertiesListPage() {
        // verifies that Bydefault DISPLAY: List is selected 
        expect(this.isMapToggleActive()).toBeFalsy();
        // verifies the featured properties title
        expect(this.isFeaturedPropertiesTextPresent()).toBeTruthy();
        // verifies list of properties
        expect(this.getCountOfProperties()).toBeGreaterThan(0);
    }
}