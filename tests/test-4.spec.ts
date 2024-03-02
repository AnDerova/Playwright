import { test, expect } from '@playwright/test';
//Checkboxes marked as "checked" are displayed to the left of the box in the text by clicking on it in the menu item [الرزنامة الاقتصادية (Economic calendar)
test('test', async ({ page }) => {
  await page.goto('https://capital.com/ru');
  await page.locator('.cc-icons').first().click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('link', { name: 'Albania' }).click();
  await page.locator('small').filter({ hasText: 'Русский' }).click();
  await page.getByRole('link', { name: 'English' }).click();
  await page.getByRole('link', { name: ' News and Analysis ' }).hover();
  await page.getByRole('link', { name: 'Economic calendar' }).nth(1).click();
  await page.locator('small').filter({ hasText: 'English' }).click();
  await page.getByRole('link', { name: 'العَرَبِيَّة' }).click();
  await page.locator('#ecCalendarFilters').click();
  await page.locator('label').filter({ hasText: 'Australia' }).click();
  await page.locator('label').filter({ hasText: 'Barbados' }).click();
  await page.locator('label').filter({ hasText: 'Brunei' }).click();
  await page.locator('label').filter({ hasText: 'Bolivia' }).click();
  await page.locator('label').filter({ hasText: 'Belgium' }).click();
  await page.locator('label').filter({ hasText: 'Bhutan' }).click();
});