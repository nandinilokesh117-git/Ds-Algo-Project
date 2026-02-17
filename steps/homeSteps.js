import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pom/HomePage.js';
import * as allure from 'allure-playwright';   



const { Given, When, Then } = createBdd();
let homePage;

Given('the user launches the DS Algo application', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.navigate();
});

When('the user navigates to the Home page', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.getStartedBtn.click();
  await homePage.verifyRegisterAndSignInLinks();
  await homePage.verifyRegisterAndSignInLinks();
});

When('the user selects all Data Structure options from the dropdown and able to see the all options', async ({ page }) => {
  const options = [
    'Arrays',
    'Linked List',
    'Stack',
    'Queue',
    'Tree',
    'Graph'
  ];
  for (const option of options) {
    await homePage.selectDSOption(option);
  }
});

Then('the error message {string} should be displayed', async ({ page }, arg) => {
  await homePage.verifyNotLoggedInMessage();

  // Step: Then the error message "You are not logged in" should be displayed
  // From: features\home.feature:10:5
});

When('the user clicks Get Started for all Data Structure sections', async ({ page }) => {
  // Step: When the user clicks Get Started for all Data Structure sections
  const sections = [
    'data-structures-introduction',
    'array',
    'linked-list',
    'stack',
    'queue',
    'tree',
    'graph'
  ];
  for (const section of sections) {
    await homePage.navigateToSection(section);
   } // From: features\home.feature:13:5
});

