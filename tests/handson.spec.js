/*const { test, expect } = require('@playwright/test');

test('my first Playwright test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

  await page.locator('#name').fill('Rohit Madan');
  await page.locator('#email').fill('rohitmadan1993@gmail.com');

  const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);

  await page.locator('#phone').fill(randomNumber.toString());

  console.log('Random number:', randomNumber);

  await page.locator('#male').check();

  await page.locator('input[type="checkbox"]').nth(6).check();

  await page.locator('#country').selectOption('Canada');

  await page.reload();

  await page.locator('#Wikipedia1_wikipedia-search-input').fill("Virat Kohli");

  await page.locator('[class="wikipedia-search-button"]').click();

  await page.locator('[class="dropbtn"]').hover();

  await page.locator('#field2').dblclick();

  await page.locator('#draggable').dragTo(page.locator('#droppable'));

  await page.goto("https://www.google.com/webhp?hl=en&sa=X&ved=2ahUKEwiai-DpqJSXAxVlRmwGHVxCAcUQPHoECAYQBA");

  await page.goto("https://www.yahoo.com/");

  await page.goBack();

  await page.goForward();

  await page.reload();

  await page.screenshot();
   
  await page.pause();



});*/



import { test, expect } from '@playwright/test';

test('my first Playwright test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(page.getByText('Automation Testing Practice')).toBeVisible();

  await page.locator('#name').fill("ROHIT MADAN");

   await page.locator('#email').pressSequentially("rohitmadan1993@gmail.com");

    await page.locator('#phone').pressSequentially("0000000000");

    await page.locator('#textarea').pressSequentially("1255 sector 7 karnal");

    await page.locator('#male').check();

    expect(await page.locator('#male').isChecked());

    await page.locator(".dropbtn").hover();

    await page.getByText("Copy Text").dblclick();

    await page.getByText("Copy Text").click({button : 'right'});


  await page.locator('#country').selectOption('Canada' , 'India');

 

  await page.locator('#draggable').dragTo(page.locator('#droppable'));

 await page.locator('#singleFileInput').setInputFiles('C:\\Users\\kanik\\Downloads\\Rohit_Madan_ATS_Resume.pdf');

 await page.locator('#multipleFilesInput').setInputFiles('C:\\Users\\kanik\\Downloads\\Rohit_Madan_ATS_Resume.pdf' , 'C:\\Users\\kanik\\Downloads\\Rohit_Madan_ATS_Resume.pdf' );


    


  



  
});
