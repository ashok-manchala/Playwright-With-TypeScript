import { Page } from '@playwright/test';
import { HomePage } from './HomePage.js';
import { LoginPage } from './LoginPage.js';

export class PageManager {

    page: Page;
    homePage: HomePage;
    loginPage: LoginPage;

    constructor(page: any) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
    }

    getHomePage() {
        return this.homePage;
    }

    getLoginPage() {
        return this.loginPage;
    }

}

