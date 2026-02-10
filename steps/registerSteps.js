import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
import { RegisterPage } from "../pom/RegisterPage.js";

let registerPage;
const password = 'Test@1234';
const password_confirm = 'Test@1234';
let username;

Given('the user is on the Home page', async ({ page }) => {
  await page.goto('https://dsportalapp.herokuapp.com/home');
});

When('the user clicks the Register link on the Home page', async ({ page }) => {
  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/register');
});

Then('the user navigates to the Register form', async ({ page }) => {
  registerPage = new RegisterPage(page);
  username = await registerPage.generateValidUsername(12);   // dynamic username
  console.log('User name '+ username);
  await expect(registerPage.userNameTextBox).toBeVisible();
});

When('the user clicks the Register button with all fields empty', async ({ page }) => {
  await registerPage.clickRegisterButton();
});

Then('the error Please fill out this field. shows under the Username box', async ({ }) => {
  const message = await registerPage.getUsernameErrorMessage();
  await expect(message).toContain('Please fill out this field.');
});

When('the user clicks the Register button after entering password and password confirmation with the username field empty', async ({ page }) => {
  await registerPage.fillUsername('');
  await registerPage.fillPasswordFields(password, 'gdfhfjh');
  await registerPage.clickRegisterButton();
});

Then('the error Please fill out this field. shows under the Username box1', async ({ }) => {
  const message = await registerPage.getUsernameErrorMessage();
  await expect(message).toContain('Please fill out this field.');
});

When('the user clicks the Register button after entering username and password with the password confirmation field empty', async ({ page }) => {
  await registerPage.fillUsername(username);
  await registerPage.fillPasswordFields(password, '');
  await registerPage.clickRegisterButton();
});


Then('the error Please fill out this field. shows under the password confirmation box', async ({}) => {
  const message = await registerPage.getPasswordConfirmErrorMessage();
  await expect(message).toContain('Please fill out this field.');
});

When('the user clicks the Register button after entering a username containing space characters and invalid symbols other than digits and @\\/.\\/+\\/-\\/_', async ({page}) => {
  await registerPage.fillUsername('viji #12');
  await registerPage.fillPasswordFields(password,password_confirm);
  await registerPage.clickRegisterButton();
});

Then('the error Please fill out this field. shows under the Password box', async ({}) => {
  await expect(registerPage.pwdMismatchError).toBeVisible();
});

When('the user clicks the Register button after entering username and mismatched passwords in the password and password confirmation fields', async ({ page }) => {
  await registerPage.fillUsername(username);
  await registerPage.fillPasswordFields(password, 'jkkuuji');
});

Then('the user sees the warning password_mismatch: The two password fields didn’t match.', async ({}) => {
  await expect(registerPage.pwdMismatchError).toBeVisible();
});

When('the user clicks the Register button after entering valid username, password, and password confirmation in their respective fields', async ({page}) => {
  await registerPage.fillUsername(username);
  await registerPage.fillPasswordFields(password, password_confirm);
  await registerPage.clickRegisterButton();
});

Then('the user goes to the DS Algo Home Page with the message New Account Created. You are logged in as <ID>', async ({ page }) => {
await expect(
  page.locator('.alert').getByText(/You are logged in as/i)
).toBeVisible();

});

