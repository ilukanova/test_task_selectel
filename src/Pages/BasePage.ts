import { browser, by, element, protractor } from 'protractor';

export class BasePage {

    protected url: string = '';
    protected EC: any = '';
    
    constructor(url: string) {
        this.url = url;
        this.EC = protractor.ExpectedConditions;
    }

    public open = async () => {
        await browser.get(this.url);
    }

    public blur = async () => {
        await element(by.tagName('body')).click();
    }

    public getErrorText = async (stl: string) => {
        let errorEl = element(by.css(`[stl="${stl}"]`));
        await this.waitElementPresent(errorEl);
        return errorEl.getText();
    }

    public waitElementPresent = async (el: any, timeout: number = 10000) => {
        await browser.wait(this.EC.presenceOf(el), timeout);
    }

    public waitElementClickable = async (el: any, timeout: number = 5000) => {
        await browser.wait(this.EC.elementToBeClickable(el), timeout);
    }
}