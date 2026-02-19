import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
import { RegisterPage } from "../pom/RegisterPage.js";
import { HomePage } from '../pom/HomePage.js';
import { readExcel } from '../utils/excelReader.js';
  

const testData = readExcel('test-data/DSAlgo Data.xlsx', 'RegisterData');

let homePage;
let registerPage;
let password1;
let password2;
let username;
let invalidUsername;


Given('the user is on the Home page', async ({ page }) => {
  
  homePage = new HomePage(page);
  await page.goto('https://dsportalapp.herokuapp.com/home');
  
  // Read passwords from Excel (Row 1)
  password1 = testData[0].password1;
  password2 = testData[0].password2;
  invalidUsername = testData[0].username1;

});

When('the user clicks the Register link on the Home page', async ({ page }) => {
  await homePage.clickRegister();
  await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/register');
});

Then('the user navigates to the Register form', async ({ page }) => {
  registerPage = new RegisterPage(page);
  username = await registerPage.generateValidUsername(12);   // dynamic username
  console.log('User name '+ username);
  await expect(registerPage.userNameTextBox).toBeVisible();
});

When('the user clicks the Register button with all fields empty', async ({ }) => {
  await registerPage.clickRegisterButton();
});

Then('the error Please fill out this field. shows under the Username box', async ({ }) => {
  const message = await registerPage.getUsernameErrorMessage();
  expect((message || '').toLowerCase()).toContain('fill out this field');
});

When('the user clicks the Register button after entering password and password confirmation with the username field empty', async ({ }) => {
 
  await registerPage.fillUsername('');
  await registerPage.fillPasswordFields(password1, password2);
  await registerPage.clickRegisterButton();
});

Then('the error Please fill out this field. shows under the Username box1', async ({ }) => {
  const message = await registerPage.getUsernameErrorMessage();
  expect((message || '').toLowerCase()).toContain('fill out this field');
});

When('the user clicks the Register button after entering username and password with the password confirmation field empty', async ({ }) => {
  
  await registerPage.fillUsername(username);
  await registerPage.fillPasswordFields(password1, '');
  await registerPage.clickRegisterButton();
});


Then('the error Please fill out this field. shows under the password confirmation box', async ({}) => {
  const message = await registerPage.getPasswordConfirmErrorMessage();
  expect((message || '').toLowerCase()).toContain('fill out this field');
});

When('the user clicks the Register button after entering a username containing space characters and invalid symbols other than digits and @\\/.\\/+\\/-\\/_', async ({ }) => {
  await registerPage.fillUsername(invalidUsername);
  await registerPage.fillPasswordFields(password1,password2);
  await registerPage.clickRegisterButton();
});

Then('the error warning message shows under the Password box', async ({}) => {
  await expect(registerPage.pwdMismatchError).toBeVisible();
});

When('the user clicks the Register button after entering username and mismatched passwords in the password and password confirmation fields', async ({ }) => {
  
  await registerPage.fillUsername(username);
  await registerPage.fillPasswordFields(password1, password2);
  await registerPage.clickRegisterButton();
});

Then('the user sees the warning password_mismatch: The two password fields didn’t match.', async ({}) => {
  await expect(registerPage.pwdMismatchError).toBeVisible();
});

When('the user clicks the Register button after entering valid username, password, and password confirmation in their respective fields', async ({ }) => {
  
  await registerPage.fillUsername(username);
  await registerPage.fillPasswordFields(password1, password1);
  await registerPage.clickRegisterButton();
});

Then('the user goes to the DS Algo Home Page with the message New Account Created. You are logged in as <ID>', async ({ page }) => {
await expect(
  page.locator('.alert').getByText(/You are logged in as/i)
).toBeVisible();

});

