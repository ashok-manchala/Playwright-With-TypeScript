import { test, expect, Page } from '@playwright/test';
import testData from '../test-data/testData';
import { PageManager } from '../pageobjects/PageManager';
import { assertVisibleText } from '../utils/utils';
import dotenv from 'dotenv';
dotenv.config();


test.describe("Insurance Application UI Test cases", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(testData.appUrl!);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Id-001: has title', async ({ page }) => {
    await expect.soft(page).toHaveTitle(/Playwright/);
  });

  test('Id-002: Get started link', async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect.soft(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Id-003: launch insuance application, log in and assert the text on homepage', async ({ page }) => {
    await page.goto(testData.applicationURL!);
    const pageManager = new PageManager(page);
    const loginPage = pageManager.getLoginPage();
    await loginPage.clickOnOIDCLink();
    await loginPage.fillUserName(testData.userName!);
    await loginPage.clickOnNextButton();
    await loginPage.fillPassword(testData.password!);
    await loginPage.clickOnLoginButton();
    await assertVisibleText(page,testData.Id_003.text);
  });

});
