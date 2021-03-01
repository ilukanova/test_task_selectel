import { browser } from 'protractor';
import { CompleteRegPage } from "../Pages/CompleteRegPage";
import { LoginPage } from "../Pages/LoginPage";

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
        await completeRegPage.testInputOneSymbolInSurnameField();

        let errorText = await completeRegPage.getErrorText('err_pattern_surname');
        expect(errorText).toEqual('Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов');
    });
        
    it('Check if one symbol input in name field', async () => {
        await completeRegPage.testInputOneSymbolInNameField();

        let errorText = await completeRegPage.getErrorText('err_pattern_name');
        expect(errorText).toEqual('Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов');
    });

    it('Check if one symbol input in middlename field', async () => {
        await completeRegPage.testInputOneSymbolInMiddleField();

        let errorText = await completeRegPage.getErrorText('err_pattern_middlename');
        expect(errorText).toEqual('Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов');
    });

    it('Check if incorrect value input in mobile field', async () => {
        await completeRegPage.testInputIncorrectValueInMobileField();

        let errorText = await completeRegPage.getErrorText('err_parse_mobile');
        expect(errorText).toEqual('Убедитесь, что номер введен верно');
    });

    it('Check if non cyrillic symbols input in surname field', async () => {
        await completeRegPage.testInputNonCyrillicSymbolsInSurnameField();

        let errorText = await completeRegPage.getErrorText('err_pattern_surname');
        expect(errorText).toEqual('Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов');
    });

    it('Check if non cyrillic symbols input in rname field', async () => {
        await completeRegPage.testInputNonCyrillicSymbolsInNameField();

        let errorText = await completeRegPage.getErrorText('err_pattern_name');
        expect(errorText).toEqual('Поле может содержать только кириллицу, пробел или тире, и должно быть не короче двух символов');
    });

    it('Check if non cyrillic symbols input in middlename field', async () => {
        await completeRegPage.testInputNonCyrillicSymbolsInMiddleField();

        let errorText = await completeRegPage.getErrorText('err_pattern_middlename');
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