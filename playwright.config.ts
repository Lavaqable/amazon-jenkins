import { defineConfig } from '@playwright/test';

const TEST_ENV = process.env.TEST_ENV || 'production';

const baseURLs = {
  test: 'https://www.amazon.in/',
  production: 'https://www.amazon.in/',
};

const baseURL = baseURLs[TEST_ENV as keyof typeof baseURLs] || baseURLs.production;

export default defineConfig({
  testDir: '.',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  timeout: 160_000,
  expect: {
    timeout: 20_000,
  },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL,
    headless: process.env.CI ? true : false,
    browserName: 'chromium',
    actionTimeout: 40_000,
    navigationTimeout: 90_000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      args: process.env.CI
        ? [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
          ]
        : [],
    },
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});

