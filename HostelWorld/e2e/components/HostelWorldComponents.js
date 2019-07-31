"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var EC = protractor_1.ExpectedConditions;
var maxwait = 20000;
var HostelWorldComponents = /** @class */ (function () {
    function HostelWorldComponents() {
        this.inputSearchBox = '//input[@id="home-search-keywords"]';
        this.highlightedlistItem = '//div[@class="suggestions-container"]//li[@class="hover"]';
        this.btnLetsGo = '//button[contains(@class,"submit-search-form") and contains(text(),"Let")]';
        this.featuredProperties = '//div[@id="fabResultsContainer"]//span[text()="Featured Properties"]';
        this.mapToggleActive = 'hide-for-small topfilter rounded maptoggle active';
        this.propertiesList = '//div[@id="fabResultsContainer"]//div[@class="property-card-desktop d-flex flex-row"]';
    }
    /**
     * Comment: Function will Navigate to given url
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.navigateToURL = function (url) {
        return protractor_1.browser.get(url);
    };
    /**
     * Comment: Enter City
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.enterCity = function (city) {
        var _this = this;
        return protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.xpath(this.inputSearchBox))), maxwait, 'inputSearchBox notfound').then(function () {
            protractor_1.element(protractor_1.by.xpath(_this.inputSearchBox)).click();
            return protractor_1.element(protractor_1.by.xpath(_this.inputSearchBox)).sendKeys(city);
        });
    };
    /**
     * Comment: Function will Select City
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.selectCity = function () {
        var _this = this;
        return protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.xpath(this.highlightedlistItem))), maxwait, 'highlightedlistItem notfound').then(function () {
            return protractor_1.element(protractor_1.by.xpath(_this.highlightedlistItem)).click();
        });
    };
    /**
     * Comment: Click Lets Go Button
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.clickLetsGoButton = function () {
        var _this = this;
        return protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.xpath(this.btnLetsGo))), maxwait, 'btnLetsGo notfound').then(function () {
            return protractor_1.element(protractor_1.by.xpath(_this.btnLetsGo)).click();
        });
    };
    /**
     * Comment: Returns Boolean wether Map Toggle button is Active or not
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.isMapToggleActive = function () {
        return protractor_1.$(this.mapToggleActive).isPresent();
    };
    /**
     * Comment: Returns Boolean wether Map Toggle button is Active or not
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.isFeaturedPropertiesTextPresent = function () {
        var _this = this;
        return protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.xpath(this.featuredProperties))), maxwait, 'featuredProperties notfound').then(function () {
            return protractor_1.element(protractor_1.by.xpath(_this.featuredProperties)).isPresent();
        });
    };
    /**
     * Comment: Return the count of properties
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.getCountOfProperties = function () {
        var _this = this;
        return protractor_1.browser.wait(EC.visibilityOf(protractor_1.element.all(protractor_1.by.xpath(this.propertiesList)).first()), maxwait, 'propertiesList notfound').then(function () {
            protractor_1.browser.executeScript('arguments[0].scrollIntoView();', protractor_1.element.all(protractor_1.by.xpath(_this.propertiesList)).first().getWebElement());
            return protractor_1.element.all(protractor_1.by.xpath(_this.propertiesList)).count();
        });
    };
    /**
     * Comment: Verify Properties List Page
     * Author: Milind Walekar
     */
    HostelWorldComponents.prototype.verifyPropertiesListPage = function () {
        // verifies that Bydefault DISPLAY: List is selected 
        expect(this.isMapToggleActive()).toBeFalsy();
        // verifies the featured properties title
        expect(this.isFeaturedPropertiesTextPresent()).toBeTruthy();
        // verifies list of properties
        expect(this.getCountOfProperties()).toBeGreaterThan(0);
    };
    return HostelWorldComponents;
}());
exports.HostelWorldComponents = HostelWorldComponents;
