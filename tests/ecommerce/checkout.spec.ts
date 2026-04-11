import { test, expect } from '@playwright/test';

test('checkout mock', async ({ request }) => {
  const res = await request.get('/carts/1');
  expect(res.status()).toBe(200);
});