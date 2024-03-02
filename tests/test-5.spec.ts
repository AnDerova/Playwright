import { test, expect } from '@playwright/test';
//12 The modal window "Login via Apple ID" is not opened in block [Trade smart] of the menu item [TredingView] after clicking button [Apple]


test('test', async ({ page }) => {
  await page.goto('https://capital.com/');
  await page.goto('https://capital.com/ru');
  await page.locator('.cc-icons').first().click();
  await page.getByRole('textbox').first().click();
  await page.getByPlaceholder('Поиск').first().click();
  await page.getByPlaceholder('Поиск').first().fill('aus');
  await page.getByRole('link', { name: 'Australia' }).click();
  await page.locator('small').filter({ hasText: 'Русский' }).click();
  await page.getByRole('link', { name: 'English' }).click();
  await page.getByRole('link', { name: ' Products and services '}).hover();
await page.getByRole('navigation').getByRole('link', { name: 'TradingView', exact: true }).click();
await page.getByRole('button').nth(3).click();
});