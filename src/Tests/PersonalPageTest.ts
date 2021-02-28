import { browser, by, element, protractor } from 'protractor';
import { LoginPage } from "../Pages/LoginPage";
import { CompleteRegPage } from "../Pages/CompleteRegPage";

const LOGIN = '148515';
const PASSWORD = 'Qwerty123';
const URL = 'https://my.selectel.ru/login';

let loginPage: LoginPage;
let completeRegPage: CompleteRegPage;

describe('Personal page test scenario', () => {

    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);

        loginPage = new LoginPage(URL);
        await loginPage.open();
        await loginPage.login(LOGIN, PASSWORD);

        completeRegPage = new CompleteRegPage('');
        await completeRegPage.continueReg();
        await completeRegPage.chooseAccountType();
    });

    it('Check if one symbol input in surname field', async () => {
        await completeRegPage.testInputOneSymbolInSurnameField('1');

        let errorText = await completeRegPage.getErrorText('err_pattern_surname');
        expect(errorText).toEqual('Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов');
    });
        
    it('Check if one symbol input in name field', async () => {
        await completeRegPage.testInputOneSymbolInNameField('1');

        let errorText = await completeRegPage.getErrorText('err_pattern_name');
        expect(errorText).toEqual('Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов');
    });

    it('Check if click submit button with empty fields', async () => {
        await completeRegPage.testCheckAllRequiredFields();

        let errorText = await completeRegPage.getErrorText('err_required_surname');
        expect(errorText).toEqual('Необходимо заполнить это поле');
        
        errorText = await completeRegPage.getErrorText('err_required_name');
        expect(errorText).toEqual('Необходимо заполнить это поле');

        errorText = await completeRegPage.getErrorText('err_required_mobile');
        expect(errorText).toEqual('Введите номер телефона');

        errorText = await completeRegPage.commonFormError.getText();
        expect(errorText).toEqual('Проверьте отмеченные поля');
    });
});