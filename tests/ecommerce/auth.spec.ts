import { test, expect } from '@playwright/test';

test('login success', async ({ request }) => {
  const res = await request.post('/auth/login', {
    data: {
      username: 'emilys',
      password: 'emilyspass'
    }
  });

  expect(res.status()).toBe(200);
});