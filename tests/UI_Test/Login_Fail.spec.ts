import { test, expect } from '@playwright/test';

test ('Login fail', async ({ request}) => {
    const res = await request.post('/auth/login', {
        data: {
            username: 'emilys',
            password: 'wrongpassword'
        }
    });
    expect(res.status()).toBe(400);
});