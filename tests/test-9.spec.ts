import { test, expect } from '@playwright/test';
//25 The "Privacy policy" page is opened in English
test('test', async ({ page }) => {
  await page.goto('https://capital.com/ru');
  await page.locator('.cc-icons').first().click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('link', { name: 'Algeria' }).click();
  await page.locator('small').filter({ hasText: 'Русский' }).click();
  await page.getByRole('link', { name: 'Deutsch' }).click();
  await page.getByRole('link', { name: 'Registrieren' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Datenschutzrichtlinie' }).click();
  const page1 = await page1Promise;
});