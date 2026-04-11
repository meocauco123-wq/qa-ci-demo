import { test, expect } from '@playwright/test';

test('login fail missing password', async ({ request }) => {
  const res = await request.post('/auth/login', {
    data: {
      username: 'emilys',
      password: ''
    }
  });

  expect(res.status()).toBe(400);

  const data = await res.json();
  expect(data).toHaveProperty('message');
});