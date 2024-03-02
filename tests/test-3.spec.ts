import { test, expect } from '@playwright/test';
// 13 Page with error 404 is opened when clicking hyperlink "PCI Data Security Standards"
test('test', async ({ page }) => {
  await page.goto('https://capital.com/');
  await page.goto('https://capital.com/ru');
  await page.locator('.cc-icons').first().click();
  await page.getByRole('textbox').first().click();
  await page.getByPlaceholder('Поиск').first().click();
  await page.getByPlaceholder('Поиск').first().fill('aus');
  await page.getByRole('link', { name: 'Australia' }).click();
  await page.locator('small').filter({ hasText: 'Русский' }).click();
    await page.getByRole('link', { name: 'Română' }).click();
    await page.getByRole('link', {name: 'Moduri de tranzacționare'}).hover();
  await page.getByRole('navigation').getByRole('link', { name: 'De ce Capital.com?' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Standardele PCI privind' }).click();
  const page1 = await page1Promise;
});