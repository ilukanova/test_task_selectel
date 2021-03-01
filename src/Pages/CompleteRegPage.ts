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
        await this.waitElementClickable(this.fillUserProfileButton);
        await this.fillUserProfileButton.click();
    }

    public testInputOneSymbolInSurnameField = async () => {
        await this.surnameInput.sendKeys('а');
        await this.blur();
    }

    public testInputOneSymbolInNameField = async () => {
        await this.nameInput.sendKeys('б');
        await this.blur();
    }

    public testInputOneSymbolInMiddleField = async () => {
        await this.middleNameInput.sendKeys('в');
        await this.blur();
    }

    public testInputNonCyrillicSymbolsInSurnameField = async () => {
        await this.surnameInput.sendKeys('test123');
        await this.blur();
    }

    public testInputNonCyrillicSymbolsInNameField = async () => {
        await this.nameInput.sendKeys('test@#$%');
        await this.blur();
    }

    public testInputNonCyrillicSymbolsInMiddleField = async () => {
        await this.middleNameInput.sendKeys('test тест');
        await this.blur();
    }

    public testInputIncorrectValueInMobileField = async () => {
        await this.mobileInput.sendKeys('567574');
        await this.blur();
    }

    public testCheckAllRequiredFields = async () => {
        await this.submitMobileButton.click()
    }
}