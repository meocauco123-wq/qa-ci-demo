import { test, expect } from '@playwright/test';

test('add cart', async ({ request }) => {
  const res = await request.post('/carts/add', {
    data: {
      userId: 1,
      products: [{ id: 1, quantity: 1 }]
    }
  });

  expect([200, 201]).toContain(res.status());
});