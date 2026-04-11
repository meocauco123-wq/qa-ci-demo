import { test, expect } from '@playwright/test';

test('get products', async ({ request }) => {
  const res = await request.get('/products');
  expect(res.status()).toBe(200);
});