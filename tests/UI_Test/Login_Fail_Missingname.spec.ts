import { test, expect } from '@playwright/test';

test('login fail - missing username', async ({ request }) => {
  const res = await request.post('/auth/login', {
    data: {
      username: '',
      password: 'emilyspass'
    }
  });

  // verify status code
  expect(res.status()).toBe(400);

  // verify response body
  const data = await res.json();
  expect(data).toHaveProperty('message');
});