import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: 'html',

  use: {
    baseURL: 'https://dummyjson.com',
    trace: 'on-first-retry',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  },

  timeout: 30000,
});