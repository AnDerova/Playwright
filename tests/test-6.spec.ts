import { test, expect } from '@playwright/test';
//10/326 Sign up form  isn't opened after clicking to the button [Sign Up] in menu item  [Partnership programme]
test('test', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://capital.com/');
  await page.goto('https://capital.com/ru');
  await page.locator('.cc-icons').first().click();
  await page.getByRole('textbox').first().click();
  await page.getByPlaceholder('Поиск').first().click();
  await page.getByPlaceholder('Поиск').first().fill('aus');
  await page.getByRole('link', { name: 'Australia' }).click();
  await page.locator('small').filter({ hasText: 'Русский' }).click();
  await page.getByRole('link', { name: 'English' }).click();
  await page.getByRole('link', { name: ' More '}).hover();
await page.getByRole('navigation').getByRole('link', { name: 'Partnership Programme' }).click();
await page.getByRole('link', { name: 'Sign up' }).click();
});
