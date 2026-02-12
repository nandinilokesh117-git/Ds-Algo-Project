import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
import { Datastructure } from "../pom/Datastructure.js";
import { HomePage } from "../pom/HomePage.js";
import { LoginPage } from "../pom/LoginPage.js";
import { Timecomplexity } from "../pom/TimecomplexityPage.js";
import { TryEditorPage } from "../pom/TryEditorPage.js";
import { readExcel } from '../utils/excelReader.js';

const testData = readExcel('test-data/DSAlgo Data.xlsx', 'RegisterData');

let datastructurePage;
let signinPage;
let homePage;
let timecomplexityPage;
let tryEditorPage;
let username;
let password;


Given('The user is on the DS Algo portal homepage1', async ({ page }) => {

    await page.goto('https://dsportalapp.herokuapp.com/home');

    username = testData[1].username1;
    password = testData[1].password2;

});

When('The user clicks the Sign In button and login successfully by entering user credentials', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.clickSignInLink();

    signinPage = new LoginPage(page);
    await signinPage.fillUsername(username);
    await signinPage.fillPassword(password);
    await signinPage.clickLogin();


});


Then('The user should land on the Data Structure Home Page with message You are logged in', async ({ page }) => {

    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/home');
    await expect(page.getByText('You are logged in')).toBeVisible();

});

When('the user clicks the Getting Started button in Data Structures - Introduction', async ({ page }) => {

    homePage = new HomePage(page);
    await homePage.clickgetstarted();

});

Then('the user should land on the Data Structures - Introduction page', async ({ page }) => {

    await expect(page.getByRole('heading', { name: 'Data Structures-Introduction' })).toBeVisible();

});

When('the user clicks the Time Complexity button', async ({ page }) => {

    homePage = new HomePage(page);
    await homePage.clickgetstarted();

    datastructurePage = new Datastructure(page);
    await datastructurePage.clickTimeComplexityButton();

});

Then('the user should be redirected to the Time Complexity page', async ({ page }) => {

    await expect(page.getByRole('paragraph').filter({ hasText: /^Time Complexity$/ })).toBeVisible();

});

When('the user clicks the Try Here button', async ({ page }) => {

    homePage = new HomePage(page);
    await homePage.clickgetstarted();
    datastructurePage = new Datastructure(page);
    await datastructurePage.clickTimeComplexityButton();
    timecomplexityPage = new Timecomplexity(page);
    timecomplexityPage.clickTryhereButton();
    tryEditorPage = new TryEditorPage(page);
    await tryEditorPage.clickRun();
});

Then('the user should be redirected to a page having a Try Editor with a Run button to test', async ({ page }) => {

    await expect(page.locator('div').filter({ hasText: 'xxxxxxxxxx' }).nth(4)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Run' })).toBeVisible();

});

When('the user clicks the Run button without entering code in the editor', async ({ page }) => {

    homePage = new HomePage(page);
    await homePage.clickgetstarted();
    datastructurePage = new Datastructure(page);
    await datastructurePage.clickTimeComplexityButton();
    timecomplexityPage = new Timecomplexity(page);
    timecomplexityPage.clickTryhereButton();
     tryEditorPage = new TryEditorPage(page);
    await tryEditorPage.clickRun();

});

Then('the user should see no error message', async ({ page }) => {

    console.log("Nothing happend");

});

When('the user writes invalid Python code in the editor and clicks the Run button', async ({ page }) => {

    const invalidCode = `
    a = 5
    b = 10
    print(a + b)'
    `;
    homePage = new HomePage(page);
    await homePage.clickgetstarted();
    datastructurePage = new Datastructure(page);
    await datastructurePage.clickTimeComplexityButton();
    timecomplexityPage = new Timecomplexity(page);
    timecomplexityPage.clickTryhereButton();

    tryEditorPage = new TryEditorPage(page);
    await tryEditorPage.clickRun();

    // Invalid Python code (syntax error)
    await page.locator('.CodeMirror textarea').fill(invalidCode);
    await page.getByRole('button', { name: 'Run' }).click();

});

Then('the user should see an error message in the alert window', async ({ page }) => {
    page.once('dialog', async dialog => {

        const message = dialog.message();
        console.log('Error message:', message);

        // Check alert has some error text
        expect(message.trim().length).toBeGreaterThan(0);

        await dialog.accept();   // Close alert
    });
});

When('the user writes valid Python code in the editor and clicks the Run button', async ({ page }) => {

    homePage = new HomePage(page);
    await homePage.clickgetstarted();
    datastructurePage = new Datastructure(page);
    await datastructurePage.clickTimeComplexityButton();
    timecomplexityPage = new Timecomplexity(page);
    timecomplexityPage.clickTryhereButton();

    tryEditorPage = new TryEditorPage(page);
    await tryEditorPage.clickRun();

    // Clear the editor first
    await page.evaluate(() => {
        const editor = document.querySelector('.CodeMirror').CodeMirror;
        editor.setValue('');
    });

    // Type valid Python code
    const validCode = `
num1 = 10
num2 = 15

# Add two numbers
sum = num1 + num2

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
`.trim();

    await page.locator('.CodeMirror textarea').fill(validCode);
    await page.getByRole('button', { name: 'Run' }).click();
});

Then('the user should see output in the console', async ({ page }) => {

    const output = page.locator('#output');

    // Wait until Skulpt writes something into #output
    await page.waitForFunction(() => {
        const el = document.getElementById('output');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 15000 });

    const text = (await output.textContent())?.trim();

    expect(text?.trim()).not.toBe('');
});
