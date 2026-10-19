
import { test, expect } from '@playwright/test';





test('my first Playwright test', async ({ page }) => {

  // 1. Open the practice website
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 2. Verify page content
  await expect(
    page.getByText('Automation Testing Practice')
  ).toBeVisible();

  // 3. Fill text fields
  await page.locator('#name').fill('ROHIT MADAN');

  await page.locator('#email').pressSequentially(
    'rohitmadan1993@gmail.com'
  );

  await page.locator('#phone').pressSequentially('0000000000');

  await page.locator('#textarea').pressSequentially(
    '1255 sector 7 karnal'
  );

  // 4. Select gender and verify
  await page.locator('#male').check();
  await expect(page.locator('#male')).toBeChecked();

  // 5. Hover over dropdown
  await page.locator('.dropbtn').hover();

  // 6. Double-click and right-click
  await page.getByText('Copy Text').dblclick();

  await page.getByText('Copy Text').click({
    button: 'right'
  });

  // 7. Select country
  await page.locator('#country').selectOption('Canada');

  // 8. Drag and drop
  await page.locator('#draggable').dragTo(
    page.locator('#droppable')
  );

 

  // 10. Upload a single file
  await page.locator('#singleFileInput').setInputFiles("C:\Users\kanik\Downloads\Rohit_Madan_ATS_Resume.pdf");

  // 11. Upload multiple files
  await page.locator('#multipleFilesInput').setInputFiles([
    "C:\Users\kanik\Downloads\Rohit_Madan_ATS_Resume.pdf",
    "C:\Users\kanik\Downloads\Rohit_Madan_ATS_Resume.pdf"
  ]);

});
