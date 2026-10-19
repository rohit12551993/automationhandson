
import { test, expect } from '@playwright/test';

test('my first Playwright test', async ({ page }) => {
  // 1. Open the practice website
  await page.goto('https://testautomationpractice.blogspot.com/', {
    waitUntil: 'domcontentloaded',
  });

  // 2. Verify that the page URL is correct
  await expect(page).toHaveURL(
    /testautomationpractice\.blogspot\.com/
  );

  // 3. Fill Name and verify
  const nameInput = page.getByPlaceholder('Enter Name');
  await expect(nameInput).toBeVisible();
  await nameInput.fill('ROHIT MADAN');
  await expect(nameInput).toHaveValue('ROHIT MADAN');

  // 4. Fill Email and verify
  const emailInput = page.locator('#email');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('rohitmadan1993@gmail.com');
  await expect(emailInput).toHaveValue('rohitmadan1993@gmail.com');

  // 5. Fill Phone and verify
  const phoneInput = page.locator('#phone');
  await expect(phoneInput).toBeVisible();
  await phoneInput.fill('0000000000');
  await expect(phoneInput).toHaveValue('0000000000');

  // 6. Fill Address and verify
  const addressInput = page.locator('#textarea');
  await expect(addressInput).toBeVisible();
  await addressInput.fill('1255 sector 7 karnal');
  await expect(addressInput).toHaveValue('1255 sector 7 karnal');

  // 7. Select gender and verify
  const maleRadio = page.locator('#male');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();

  // 8. Hover over the dropdown
  const dropdown = page.locator('.dropbtn');
  await expect(dropdown).toBeVisible();
  await dropdown.hover();

  // 9. Double-click and right-click Copy Text
  const copyText = page.getByText('Copy Text', { exact: true });
  await expect(copyText).toBeVisible();

  await copyText.dblclick();
  await expect(copyText).toBeVisible();

  await copyText.click({ button: 'right' });
  await expect(copyText).toBeVisible();

  // 10. Select country and verify
  const countryDropdown = page.locator('#country');
  await countryDropdown.selectOption('canada');
  await expect(countryDropdown).toHaveValue('canada');

  // 11. Drag and drop
  const draggable = page.locator('#draggable');
  const droppable = page.locator('#droppable');

  await expect(draggable).toBeVisible();
  await expect(droppable).toBeVisible();

  await draggable.dragTo(droppable);
  await expect(droppable).toBeVisible();
});
