import { test, expect } from '@playwright/test';
test('ai-agent - login success', async ({page}) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('#username','testuser');
    await page.fill('#password','password123');
    await page.click('#login-button');

    await expect(page).toHaveURL(/dashboard/);


 });

 //login fail
 test('ai-agent - Login fail', async ({page}) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('#username','testuser');
    await page.fill('#password','');
    await page.click('#login-button');

    await expect(page.locator('.error-message')).toHaveText('Login failed');
 })