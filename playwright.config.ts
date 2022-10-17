import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

// See https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000, // Limit a test to 30 seconds
  expect: {
    timeout: 5 * 1000 // Limit the wait for a locator to 5 seconds
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // See https://playwright.dev/docs/test-reporters
  reporter: 'list',
  // See https://playwright.dev/docs/api/class-testoptions
  use: {
    actionTimeout: 0,
    // baseURL: 'http://localhost:3000',
    // See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
};

export default config;
