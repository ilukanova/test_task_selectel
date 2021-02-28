import { element, ElementFinder } from 'protractor';
import { locators } from "../locators";
import { BasePage } from "./BasePage";

export class CompleteRegPage extends BasePage{

    private continueRegButton: ElementFinder = element(locators.CompleteRegPage.continueRegButton);
    private argeementCheckbox: ElementFinder = element(locators.CompleteRegPage.argeementCheckbox);
    private fillUserProfileButton: ElementFinder = element(locators.CompleteRegPage.fillUserProfileButton);
    private surnameInput: ElementFinder = element(locators.CompleteRegPage.surnameInput);
    private nameInput: ElementFinder = element(locators.CompleteRegPage.nameInput);
    private middleNameInput: ElementFinder = element(locators.CompleteRegPage.middleNameInput);
    private mobileInput: ElementFinder = element(locators.CompleteRegPage.mobileInput);
    private submitMobileButton: ElementFinder = element(locators.CompleteRegPage.submitMobileButton);
    public commonFormError: ElementFinder = element(locators.CompleteRegPage.commonFormError);

    public continueReg = async () => {
        await this.waitElementPresent(this.continueRegButton);
        await this.continueRegButton.click();
    }
    
    public chooseAccountType = async () => {
        await this.waitElementPresent(this.argeementCheckbox);
        await this.argeementCheckbox.click();
        //console.log(this.fillUserProfileButton);
        await this.waitElementClickable(this.fillUserProfileButton);
        await this.fillUserProfileButton.click();
    }

    public testInputOneSymbolInSurnameField = async (surname: string) => {
        await this.surnameInput.sendKeys(surname);
        await this.blur();
    }

    public testInputOneSymbolInNameField = async (name: string) => {
        await this.nameInput.sendKeys(name);
        await this.blur();
    }

    public testInputOneSymbolInMiddleField = async (middlename: string) => {
        await this.middleNameInput.sendKeys(middlename);
        await this.blur();
    }

    public testInputIncorrectValueInMobileField = async (mobile: string) => {
        await this.mobileInput.sendKeys(mobile);
        await this.blur();
    }

    public testCheckAllRequiredFields = async () => {
        await this.submitMobileButton.click()
    }
}