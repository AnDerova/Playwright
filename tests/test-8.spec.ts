import { test, expect } from '@playwright/test';
//23 Buttons are not clickable
test('test', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://capital.com/ru');
  await page.locator('.cc-icons').first().click();
  await page.getByRole('textbox').first().click();
  await page.getByPlaceholder('Поиск').first().click();
  await page.getByPlaceholder('Поиск').first().fill('aus');
  await page.getByRole('link', { name: 'Australia' }).click();
  await page.locator('small').filter({ hasText: 'Русский' }).click();
  await page.getByRole('link', { name: 'English' }).click();
  await page.locator('#headerSearch').click();
  await page.locator('#headerSearch').fill('Best energy stocks: What are the top energy stocks to watch in 2023?');
  await page.getByRole('link', { name: 'Business candle stick graph' }).click();
  await page.getByRole('link', { name: '86.78' }).click();
  await page.getByRole('link', { name: '24.20' }).click();
  await page.getByRole('link', { name: '116.12' }).click();
  await page.getByRole('link', { name: '149.07' }).click();
});