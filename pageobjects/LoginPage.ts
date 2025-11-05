import { Locator, Page } from '@playwright/test';
export class LoginPage {
    page: Page;
    userName: Locator;
    password: Locator;
    oidcLink: Locator;
    nextButton: Locator;
    loginButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.oidcLink = page.getByRole('link', { name: 'oidc' });
        this.userName = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.nextButton = page.getByRole('button', { name: 'Next'});        
        this.loginButton = page.getByRole('button', { name: 'Sign In'});
    }

    async clickOnOIDCLink(){
        await this.oidcLink.click();
    }

    async fillUserName(userName: string){
        await this.userName.fill(userName);
    }

    async fillPassword(password: string){
        await this.userName.fill(password);
    }

    async clickOnNextButton(){
        await this.nextButton.click();
    }

    async clickOnLoginButton(){
        await this.loginButton.click();
    }

}