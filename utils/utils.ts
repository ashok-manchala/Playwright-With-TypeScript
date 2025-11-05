import { Locator, Page, expect } from '@playwright/test';

export async function assertVisibleText(page: Page, text: string): Promise<void> {
  await expect(page.getByText(text)).toBeVisible();
}

export async function assertElementVisibility(locator: Locator, isVisible: boolean = true): Promise<void> {
  if (isVisible) {
    await expect.soft(locator).toBeVisible();
  } else {
    await expect.soft(locator).not.toBeVisible();
  }
}