import { test, expect } from '@playwright/test';
//22 The current page is refreshing when in search field in the header writing search request and press enter on the page  "ESG"
test('test', async ({ page }) => {
  await page.goto('https://capital.com/ru');
  await page.locator('.cc-icons').first().click();
  await page.getByRole('textbox').first().click();
  await page.getByPlaceholder('Поиск').first().click();
  await page.getByPlaceholder('Поиск').first().fill('aus');
  await page.getByRole('link', { name: 'Australia' }).click();
  await page.locator('small').filter({ hasText: 'Русский' }).click();
  await page.getByRole('link', { name: 'English' }).click();
  await page.getByRole('link', {  name: ' Markets ', exact: true }).hover();
  await page.getByRole('navigation').getByRole('link', { name: 'ESG', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('USD');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
});