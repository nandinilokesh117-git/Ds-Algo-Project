import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { readExcel } from '../utils/excelreader.js';
import { LoginPage } from '../pom/LoginPage.js';

const { Given, When, Then } = createBdd();

// Read Excel once
const testData = readExcel('./testdata/DSAlgoTestData.xlsx', 'Login');

let loginPage;

// Background steps
Given('The user is on the DS Algo portal homepage', async function ({ page }) {
    await page.goto('https://dsportalapp.herokuapp.com/');
    loginPage = new LoginPage(page);
});

When('The user clicks the "Get Started" button', async function ({ page }) {
    await page.getByRole('button', { name: 'Get Started' }).click();
});

When('The user navigates to the Sign in page', async function ({ page }) {
    loginPage = new LoginPage(page);
    await loginPage.navigateToSignIn();
});

// Scenario steps mapped to Excel data
When('The user clicks the login button without entering username and password', async function () {
    const row = testData.find(r => r.ExpectedMessage.includes('fill out this field') && !r.Username && !r.Password);
    await loginPage.clearUsername();
    await loginPage.clearPassword();
    await loginPage.clickLogin();
    if (!row.Username) await loginPage.verifyUsernameValidation(row.ExpectedMessage);
    if (!row.Password) await loginPage.verifyPasswordValidation(row.ExpectedMessage);
});
Then('The error message "Please fill out this field." should appear', async function () {
    const row = testData.find(r => r.ExpectedMessage.includes('fill out this field') && !r.Username && !r.Password);
    if (!row.Username) await loginPage.verifyUsernameValidation(row.ExpectedMessage);
    if (!row.Password) await loginPage.verifyPasswordValidation(row.ExpectedMessage);
});

When('The user clicks the login button after entering only the username', async function () {
    const row = testData.find(r => r.Username && !r.Password);
    await loginPage.fillUsername(row.Username || '');
    await loginPage.clearPassword();
    await loginPage.clickLogin();
    if (!row.Password) await loginPage.verifyPasswordValidation(row.ExpectedMessage);
});
Then('The error message "Please fill out this field." should appear below the Password textbox', async function () {
    const row = testData.find(r => r.Username && !r.Password);
    if (!row.Password) await loginPage.verifyPasswordValidation(row.ExpectedMessage);
});

When('The user clicks the login button after entering only the password', async function () {
    const row = testData.find(r => !r.Username && r.Password);
    await loginPage.clearUsername();
    await loginPage.fillPassword(row.Password || '');
    await loginPage.clickLogin();
    if (!row.Username) await loginPage.verifyUsernameValidation(row.ExpectedMessage);
});
Then('The error message "Please fill out this field." should appear below the Username textbox', async function () {
    const row = testData.find(r => !r.Username && r.Password);
    if (!row.Username) await loginPage.verifyUsernameValidation(row.ExpectedMessage);
});


When('The user clicks the login button after entering an invalid username and valid password', async function () {
    const row = testData.find(r => r.ExpectedMessage === 'Invalid Username and Password');
    await loginPage.submitLogin(row.Username || '', row.Password || '');
    await loginPage.verifyErrorMessage(row.ExpectedMessage);
});
Then('The user should see the error message "Invalid username and password"', async function () {
    const row = testData.find(r => r.ExpectedMessage === 'Invalid Username and Password');
    await loginPage.verifyErrorMessage(row.ExpectedMessage);
});

When('The user clicks the login button after entering valid username and valid password', async function () {
    const row = testData.find(r => r.ExpectedMessage === 'You are logged in');
    await loginPage.submitLogin(row.Username || '', row.Password || '');
    await loginPage.verifySuccessMessage(row.ExpectedMessage);
});

Then('The user should land on the Data Structure Home Page with message "You are logged in"', async function () {
    const row = testData.find(r => r.ExpectedMessage === 'You are logged in');
    await loginPage.verifySuccessMessage(row.ExpectedMessage);
});


Given('The user is on the Home page after Sign in', async function () {
    const row = testData.find(r => r.ExpectedMessage === 'You are logged in');
    await loginPage.submitLogin(row.Username || '', row.Password || '');
    await loginPage.verifySuccessMessage(row.ExpectedMessage);
});

When('The user clicks the "Sign out" button', async function ({ page }) {
    await page.getByRole('link', { name: 'Sign out' }).click();
});

Then('The user should be redirected to the home page with message "Logged out successfully"', async function ({ page }) {
    await expect(page.getByText('Logged out successfully')).toBeVisible();
});
