import { test, expect } from '@playwright/test';
// 14 The sign up form does not load on the first try on the page  when the first button is clicked in the block "Still looking for a broker you can trust?"
// !!! Heisenbug 6/10!

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
  await page.locator('#headerSearch').click();
  await page.locator('#headerSearch').fill('NEO');
  await page.locator('#headerSearch').press('Enter');
  await page.locator('section').filter({ hasText: 'Still looking for a platform' }).getByRole('img').first().click();
await page.locator('.hdrIcon').first().click();
await page.getByRole('textbox').first().click();
await page.getByPlaceholder('Search').first().click();
await page.getByPlaceholder('Search').first().fill('ic');
await page.getByRole('link', { name: 'Iceland' }).click();
await page.getByRole('link', { name: 'capital.com', exact: true }).click();
await page.locator('#headerSearch').click();
await page.locator('#headerSearch').fill('NEO');
await page.locator('#headerSearch').press('Enter');
await page.locator('section').filter({ hasText: 'Still looking for a broker' }).getByRole('img').first().click();
});
//The sign up form does not load on the first try