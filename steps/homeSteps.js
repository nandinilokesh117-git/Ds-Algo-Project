import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('the user launches the DS Algo application', async ({}) => {
  console.log('the user launches the DS Algo application')
});

Given('the user navigates to the Home page', async ({}) => {
   console.log('the user navigates to the Home page')
});

When('the user selects all Data Structure options from the dropdown', async ({}) => {
  console.log('the user selects all Data Structure options from the dropdown')
});

Then('the error message {string} should be displayed', async ({}, arg) => {
   console.log('the error message {string} should be displayed')
});

When('the user clicks Get Started for all Data Structure sections', async ({}) => {
 console.log('the user clicks Get Started for all Data Structure sections')
});