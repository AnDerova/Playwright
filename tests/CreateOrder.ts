import { test, expect } from '@playwright/test';

test('Create an order', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/URL_savemekhjhvgcfdtfgkubvuyulbbhgc');
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Gavin the Tiger' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo//products/tiger/');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByLabel('Full name').click();
  await page.getByLabel('Full name').fill('Anastasya');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('random@gmail.com');
  await page.locator('.snipcart-textbox').first().click();
  await page.getByLabel('Street address').fill('Derech');
  await page.getByLabel('Apt/Suite').click();
  await page.getByLabel('Apt/Suite').fill('210');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('Tel Aviv');
  await page.getByLabel('Country').click();
  await page.getByText('United States').click();
  await page.getByLabel('Province/State').click();
  await page.getByText('Texas').click();
  await page.getByLabel('Postal/ZIP code').click();
  await page.getByLabel('Postal/ZIP code').fill('56754');
  await page.getByRole('button', { name: 'Continue to payment' }).click();
  await page.frameLocator('iframe').getByPlaceholder('Card number').click();
  await page.frameLocator('iframe').getByPlaceholder('Card number').fill('4242 4242 4242 4242');
  await page.frameLocator('iframe').getByPlaceholder('MM/YY').click();
  await page.frameLocator('iframe').getByPlaceholder('MM/YY').click();
  await page.frameLocator('iframe').getByPlaceholder('MM/YY').fill('12/26');
  await page.frameLocator('iframe').getByPlaceholder('CVV').click();
  await page.frameLocator('iframe').getByPlaceholder('CVV').fill('456');
  await page.getByRole('button', { name: 'Place order' }).click();
  await page.getByRole('heading', { name: 'Thank you for your order' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();


  // await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  // await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  // await page.getByRole('link', { name: 'shopping_cart' }).click();
  // await page.getByRole('button', { name: 'Back to store' }).click();
  // await page.getByRole('link', { name: 'shopping_cart' }).click();
  // await page.getByRole('button', { name: 'Remove item' }).click();
  // await page.getByRole('link', { name: 'shopping_cart' }).click();
  // await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  // await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  // await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  // await page.getByPlaceholder('Enter your name...').click();
  // await page.getByPlaceholder('Enter your name...').fill('Anastas');
  // await page.getByPlaceholder('Enter your email...').click();
  // await page.getByPlaceholder('Enter your email...').fill('ddfgf@gmail.com');
  // await page.getByPlaceholder('Enter your message...').click();
  // await page.getByPlaceholder('Enter your message...').fill('Hello');
  // await page.getByRole('button', { name: 'Send Message' }).click();

});