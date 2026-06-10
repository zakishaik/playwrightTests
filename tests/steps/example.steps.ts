import { After, Before, Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page, expect } from '@playwright/test';

setDefaultTimeout(60_000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await browser.close();
});

Given('I open the Playwright website', async () => {
  await page.goto('https://playwright.dev/');
});

When('I click the Get started link', async () => {
  await page.getByRole('link', { name: 'Get started' }).click();
});

Then('the Installation heading is displayed', async () => {
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
