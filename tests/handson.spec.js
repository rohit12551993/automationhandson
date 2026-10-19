
import { test, expect } from '@playwright/test';

test('my first Playwright test', async ({ page }) => {

  // 1. Open the practice website
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 2. Verify that the page has loaded
  await expect(page).toHaveURL(
    /testautomationpractice\.blogspot\.com/
  );

  // 3. Fill text fields and verify their values
  const nameInput = page.locator('#name');
  await nameInput.fill('ROHIT MADAN');
  await expect(nameInput).toHaveValue('ROHIT MADAN');

  const emailInput = page.locator('#email');
  await emailInput.fill('rohitmadan1993@gmail.com');
  await expect(emailInput).toHaveValue('rohitmadan1993@gmail.com');

  const phoneInput = page.locator('#phone');
  await phoneInput.fill('0000000000');
  await expect(phoneInput).toHaveValue('0000000000');

  const addressInput = page.locator('#textarea');
  await addressInput.fill('1255 sector 7 karnal');
  await expect(addressInput).toHaveValue('1255 sector 7 karnal');

  // 4. Select gender and verify
  const maleRadio = page.locator('#male');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();

  // 5. Hover over the dropdown
  const dropdown = page.locator('.dropbtn');
  await expect(dropdown).toBeVisible();
  await dropdown.hover();

  // 6. Double-click and right-click
  const copyText = page.getByText('Copy Text', { exact: true });
  await expect(copyText).toBeVisible();

  await copyText.dblclick();
  await expect(copyText).toBeVisible();

  await copyText.click({ button: 'right' });
  await expect(copyText).toBeVisible();


  // 7. Select country and verify
  const countryDropdown = page.locator('#country');

  await countryDropdown.selectOption('canada');

  await expect(countryDropdown).toHaveValue('canada');


  // 8. Drag and drop
  const draggable = page.locator('#draggable');
  const droppable = page.locator('#droppable');

  await expect(draggable).toBeVisible();
  await expect(droppable).toBeVisible();

  await draggable.dragTo(droppable);

  // Verify the drop target remains visible
  await expect(droppable).toBeVisible();

});
