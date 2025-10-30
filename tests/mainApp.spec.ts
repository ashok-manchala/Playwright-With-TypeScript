import { test, expect, Page } from '@playwright/test';
import testData from '../test-data/testData';

test.describe("Insurance Application UI Test cases", () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to app URL before each test
    await page.goto(testData.appUrl!);
  });

  test.afterEach(async ({ page }) => {
    // Close the page after each test
    await page.close();
  });

  test('Id-001: has title', async ({ page }) => {
    // Verify title
    await expect.soft(page).toHaveTitle(/Playwright/);
  });

  test('Id-002: Get started link', async ({ page }) => {
    // Click "Get started" link
    await page.getByRole('link', { name: 'Get started' }).click();

    // Verify that Installation heading appears
    await expect.soft(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

});
