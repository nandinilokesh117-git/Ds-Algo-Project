import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
//import { Login } from '../pom/Login';
import { HomePage } from '../pom/homepage';
import { expect } from '@playwright/test';
const { chromium } = require('playwright');

let browser;
let context;
let page;

Given('the user has opened the browser', async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
});

When('the user navigates to the DS Algo portal URL', async function () {
    const homePage = new HomePage(page);
    await homePage.goto();
})

Then('the user should land on the DS Algo portal with the "Get Started" button visible', async function () {
    const getStartedButton = page.locator('text=Get Started');
    await expect(getStartedButton).toBeVisible();
    //await browser.close();
})



When('the user clicks on the Get Started button', async function () {
    await page.locator('text=Get Started').click();
});

Then('the Data Structure Introduction page should be displayed', async function () {
    const dsIntro = page.locator('text=Data Structures-Introduction');
    await expect(dsIntro).toBeVisible();
    //await browser.close();
});

Then('the "register" and "login" links should be visible', async function () {
    const link1 = "Register"
    const link2 = "Sign in"

    const linkLocator1 = page.locator(`text=${link1}`);
    const linkLocator2 = page.locator(`text=${link2}`);

    await expect(linkLocator1).toBeVisible();
    await expect(linkLocator2).toBeVisible();
});




// Given('the user is on the homepage', async function () {
//   const homePage = new HomePage(page);
//   await homePage.goto();
// });

When('the user clicks the data structures dropdown', async function () {
    // Click Data Structures dropdown
    await page.getByRole('link', { name: 'Data Structures' }).click();
});

Then('the user should able to see 6 options "Arrays,Linked,List,Stack,Queue,Tree,Graph" in dropdown menu', async function () {
    const options = ["Arrays", "Linked List", "Stack", "Queue", "Tree", "Graph"];
    for (const ds of options) {
        //await expect(page.locator(`text=${ds}`)).toBeVisible();
        await expect(page.getByRole('link', { name: ds })).toBeVisible();
        console.log(ds);
    }
    //await browser.close();
});




When('the user clicks on the "Get started" button of "<options>" on the homepage without Sign in',
    async function () {
        const newOption = ["array", "linked-list", "stack", "queue", "tree", "graph"];
        // Locate the dropdown or section containing the option

        for (const opt of newOption) {
            console.log(`opt: ${opt}`);

            const link = await page.locator(`a[href="${opt}"]`);
            await link.click();

        }


    }
);

Then(
    'the user should be able to see an warning message "You are not logged in "',
    async function () {        
        await expect(page.getByText('You are not logged in')).toBeVisible();
    }
);
