import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
//import { Login } from '../pom/Login';
//import { HomePage } from '../pom/homepage';
import { ArrayPage } from '../pom/ArrayPage';
import { expect } from '@playwright/test';
//const { chromium } = require('playwright');
import path from 'path';
//import { chromium } from 'playwright';
import { readExcel } from '../utils/helper';

const excelPath = path.join(__dirname, '../test-data/Data.xlsx');
const LoginData = readExcel(excelPath, 'Login');

if (!LoginData || LoginData.length < 1) {
  throw new Error(`Invalid data in data sheet!`);
}

let browser;
let context;
let page;


Given('The user is in the Home page', async ({ page }) => {
    await page.goto('https://dsportalapp.herokuapp.com/home');
});

When('The user signs in', async ({ page }) => {

    await page.locator('text=Sign in').click();

    console.log("Login Data:", LoginData  );

    //await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username:' }).click();
    await page.getByRole('textbox', { name: 'Username:' }).fill(LoginData[1].Username);
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill(LoginData[1].Password);

    await page.getByRole('button', { name: 'Login' }).click();
});


When('The user clicks the Getting Started button in Array Panel', async ({ page }) => {
    await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
});
Then('The user should be redirected to "Array" data structure page', async ({ page }) => {
    await page.goto('https://dsportalapp.herokuapp.com/array/');
});



When('The user clicks "Arrays in Python" link', async ({ page }) => {
    await page.getByRole('link', { name: 'Arrays in Python' }).click();
});

Then('The user should be redirected to "Arrays in Python" page', async ({ page }) => {
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/array/arrays-in-python/');
});



When('The user clicks Arrays using List link', async ({ page }) => {

    await page.getByRole('link', { name: 'Arrays Using List' }).click();
});

Then('The user should be redirected to "Arrays using List" page', async ({ page }) => {
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/array/arrays-using-list/');
});




When('The user clicks Basic operations in List link', async ({ page }) => {

    await page.getByRole('link', { name: 'Basic Operations in Lists' }).click();
});


Then('The user should be redirected to "Basic operations in List" page', async ({ page }) => {
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/array/basic-operations-in-lists/');
});




When('The user clicks Applications of Array link', async ({ page }) => {
    await page.getByRole('link', { name: 'Applications of Array' }).click();
});


Then('The user should be redirected to "Applications of Array" page', async ({ page }) => {

    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/array/applications-of-array/');
});



Given('The user is on the Arrays in Python page', async ({ page }) => {
    await page.goto('https://dsportalapp.herokuapp.com/array/arrays-in-python/');
})
When('The user clicks "Try here" button in "Arrays in Python" page', async ({ page }) => {
    await page.locator("a:has-text('Try here')").click();
});
Then('The user should be connected to "try Editor" page with a text editor and a "Run" button', async ({ page }) => {
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/tryEditor');
    await expect(page.locator("button:has-text('Run')")).toBeVisible();
});

Given('The user is on the "Arrays using List"page', async ({ page }) => {
    await page.goto('https://dsportalapp.herokuapp.com/array/arrays-using-list/');
});
When('The user clicks "Try here" button in "Arrays using List" page', async ({ page }) => {
    await page.locator("a:has-text('Try here')").click();
});

Then('The user should be navigated to "try Editor" page with a text editor and a Run button', async ({ page }) => {
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/tryEditor');

    await expect(page.locator("button:has-text('Run')")).toBeVisible();
});


Given('The user is on the Basic operations in List page', async ({ page }) => {
    await page.goto('https://dsportalapp.herokuapp.com/array/basic-operations-in-lists/');
});
When('The user clicks Try here button in Basic operations in List page', async ({ page }) => {
    await page.locator("a:has-text('Try here')").click();
});
Then('The user should be directed to "try Editor" page with a text editor and a Run button', async ({ page }) => {
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/tryEditor');
    await expect(page.locator("button:has-text('Run')")).toBeVisible();
});




Given('The user is on the Applications of Array page', async ({ page }) => {
    await page.goto('https://dsportalapp.herokuapp.com/array/applications-of-array/');
});


When('The user clicks Try here button in Applications of Array page', async ({ page }) => {
    await page.locator("a:has-text('Try here')").click();
});

Then('The user should be redirected to try Editor page with a text editor and a Run button', async ({ page }) => {
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/tryEditor');
    await expect(page.locator("button:has-text('Run')")).toBeVisible();
});

//-------


// Given ('The user is in the tryEditor page',async({page})=>
// {
//     await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/tryEditor');
// });



//  When ('the user enters invalid code in the Editor and clicks the Run button', async ({page})=>
// {
//  await page.getByRole('textbox', { name: 'Editor' }).fill('prin("Hello World")');
// await page.getByRole('button', { name: 'Run' }).click();
// });
// Then ('the user should able to see an error message in alert window', async ({page})=>
//  {
// const [dialog] = await Promise.all([
//   page.waitForEvent('dialog'),
//   page.locator("button:has-text('Run')").click()]);

// expect(dialog.message()).toBe("SyntaxError: bad input on line 1");
// await dialog.accept();
// });





// When ('The user enters valid code in the Editor and clicks the Run button', async page =>

//   {
//      await expect(page.locator('#answer_form')).toContainText( print("Hello World"));
//     await page.locator("button:has-text('Run')").click();
//  });

// Then('the user should able to see the output of the code in the output section', async page =>
// {

//  const output = await page.locator('div[align="left"]').textContent();
//   console.log("Program output:", output);

// });



When('the user enters invalid code in the Editor and clicks the Run button', async function ({ page }) {
    await page.locator('.CodeMirror-lines').click();
    await page.keyboard.type('prin("Hello World")');
    page.getByRole('button', { name: 'Run' }).click()

    const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
    ]);

    this.dialog = dialog;   // store in BDD world
});

Then('the user should be able to see an error message in the alert window', async function () {
    expect(this.dialog.message()).toBe("NameError: name 'prin' is not defined on line 1");

    await this.dialog.accept();
});


When('The user enters valid code in the Editor and clicks the Run button', async ({ page }) => {
    // Clear previous content and type valid code
    await page.locator('.CodeMirror-lines').click();
    await page.keyboard.press('Control+A'); // select all
    await page.keyboard.press('Backspace'); // delete
    await page.keyboard.type('print("Hello World")');

    // Click Run
    await page.getByRole('button', { name: 'Run' }).click();
});

Then('the user should able to see the output of the code in the output section', async ({ page }) => {
    await expect(page.locator('#output')).toContainText('Hello World');
});