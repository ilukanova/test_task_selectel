import { by } from "protractor";

export const locators = {
    'LoginPage': {
        'loginInput': by.css('form[name="login_form"] input[name="login"]'),
        'passwordInput': by.css('form[name="login_form"] input[name="password"]'),
        'submitButton': by.css('form[name="login_form"] button'),
    },
    'CompleteRegPage': {
        'continueRegButton': by.css('.mega-banner a.md-button'),
        'argeementCheckbox': by.css('md-checkbox .md-container'),
        'fillUserProfileButton': by.css('choose-user-type button[type="submit"]'),
        'surnameInput': by.name('surname'),
        'nameInput': by.name('name'),
        'middleNameInput': by.name('middlename'),
        'mobileInput': by.name('mobile'),
        'submitMobileButton': by.css('button[type="submit"]'),
        'commonFormError': by.exactBinding("'common-form-error' | translate"),

    }
};