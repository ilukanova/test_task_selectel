import { element } from 'protractor';
import { locators } from "../locators";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private loginInput: any = element(locators.LoginPage.loginInput);
    private passwordInput: any = element(locators.LoginPage.passwordInput);
    private submitButton: any = element(locators.LoginPage.submitButton);

    public login = async (login: string, password: string) => {
        await this.waitElementPresent(this.loginInput);
        await this.loginInput.sendKeys(login);
        await this.passwordInput.sendKeys(password);
        await this.submitButton.click();
    }
}