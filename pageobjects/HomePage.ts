import { Locator, Page } from '@playwright/test';

export class HomePage {
    page: Page;
    homeTab: Locator;
    ratesTab: Locator;
    productHubTab: Locator;
    campaignDesignerTab: Locator;
    releasesTab: Locator;
    rolesAndPermissionsTab: Locator;
    constructor(page: Page){
        this.page = page;
        this.homeTab = page.getByRole('link', { name: 'Home' });
        this.productHubTab = page.getByRole('link', { name: 'Product Hub' });
        this.campaignDesignerTab = page.getByRole('link', { name: 'Campaign Designer' });
        this.ratesTab = page.getByRole('link', { name: 'Rates' });
        this.releasesTab = page.getByRole('link', { name: 'Releases' });
        this.rolesAndPermissionsTab = page.getByRole('link', { name: 'Roles & Permissions' });    
    }

    async clickOnHomeTab(){
        await this.homeTab.click();
    }

    async clickOnProductHubTab(){
        await this.productHubTab.click();
    }

    async clickOnCampaignDesignerTab(){
        await this.campaignDesignerTab.click();
    }

    async clickOnReleasesTab(){
        await this.releasesTab.click();
    }

    async clickOnRolesAndPermissionsTab(){
        await this.rolesAndPermissionsTab.click();
    }

}


