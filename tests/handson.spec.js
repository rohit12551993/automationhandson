
import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('my first Playwright test', async ({ page }) => {

  // Open the practice website
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Verify page content
  await expect(
    page.getByText('Automation Testing Practice')
  ).toBeVisible();

  // Fill text fields
  await page.locator('#name').fill('ROHIT MADAN');

  await page.locator('#email').pressSequentially(
    'rohitmadan1993@gmail.com'
  );

  await page.locator('#phone').pressSequentially('0000000000');

  await page.locator('#textarea').pressSequentially(
    '1255 sector 7 karnal'
  );

  // Select gender and verify
  await page.locator('#male').check();
  await expect(page.locator('#male')).toBeChecked();

  // Hover over dropdown
  await page.locator('.dropbtn').hover();

  // Double-click and right-click
  await page.getByText('Copy Text').dblclick();

  await page.getByText('Copy Text').click({
    button: 'right'
  });

  // Select country
  await page.locator('#country').selectOption('Canada');

  // Drag and drop
  await page.locator('#draggable').dragTo(
    page.locator('#droppable')
  );

  // Prepare a cross-platform file path
  const filePath = path.join(
    __dirname,
    'test-data',
    'Rohit_Madan_ATS_Resume.pdf'
  );

  // Upload a single file
  await page.locator('#singleFileInput').setInputFiles(filePath);

  // Upload multiple files
  await page.locator('#multipleFilesInput').setInputFiles([
    filePath,
    filePath
  ]);

});
