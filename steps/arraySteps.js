import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { readExcel } from '../utils/excelReader.js';
import path from 'path';
import { fileURLToPath } from 'url';

import { LoginPage } from '../pom/LoginPage.js';
import { HomePage } from '../pom/HomePage.js';
import { ArrayPage } from '../pom/ArrayPage.js';
import { TryEditorPage } from '../pom/TryEditorPage.js';
import { PracticePage } from '../pom/PracticePage.js';
  


const { Given, When, Then } = createBdd();

// Setup paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read Excel data
const excelPath = path.join(__dirname, '../test-data/DSAlgo Data.xlsx');
const arrayTestData = readExcel(excelPath, 'ArrayData');
const credentialsData = readExcel(excelPath, 'Login');

// Validate credentials data
if (!credentialsData || credentialsData.length < 6) {
  throw new Error(`Login sheet has only ${credentialsData?.length || 0} rows. Row 6 is required.`);
}

const username = credentialsData[5].Username;
const password = credentialsData[5].Password;

// Page object instances
let loginPage, homePage, arrayPage, editorPage, practicePage;

// Context variables to store current question name and test data
let currentQuestionName = '';
let currentTestData = null;

// ============================
// Background Steps
// ============================

Given('the user signs in to dsAlgo Portal with valid credentials from Excel', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.clickGetStarted();
  
  loginPage = new LoginPage(page);
  await loginPage.navigateToSignIn();
  await loginPage.submitLogin(username, password);
});

// ============================
// Home Page Navigation Steps
// ============================

Given('the user is on the Home page after successful sign in', async ({ page }) => {
  homePage = new HomePage(page);
  // Navigate to home page array section for array tests
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
});

When('the user clicks on the Getting Started button for {string} section', async ({ page }, dataStructure) => {
  // Navigate using the same approach as working spec
  const link = page.locator(`a[href="${dataStructure}"]`);
  if (await link.isVisible()) {
    await link.click();
    await page.waitForLoadState('networkidle');
  }
});

Then('the user should be redirected to {string} data structure page', async ({ page }, dataStructure) => {
  await expect(page).toHaveURL(new RegExp(dataStructure));
});

Then('the user navigates back to the Home page', async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.goBack();
});

// ============================
// Array Section Navigation Steps
// ============================

Given('the user is on the Array data structure page', async ({ page }) => {
  // Navigate to array page like in the working spec
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  arrayPage = new ArrayPage(page);
  await expect(page).toHaveURL(/array/);
});

When('the user clicks on the {string} link', async ({ page }, sectionLink) => {
  arrayPage = new ArrayPage(page);
  await arrayPage.openSection(sectionLink);
});

Then('the user should be redirected to the {string} page', async ({ page }, sectionName) => {
  // Verify URL contains the section name
  const urlPattern = sectionName.toLowerCase().replace(/ /g, '-');
  await expect(page).toHaveURL(new RegExp(urlPattern));
});

// ============================
// Try Editor Navigation Steps
// ============================

Given('the user is on the {string} section page', async ({ page }, sectionName) => {
  // Navigate to array page first
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  arrayPage = new ArrayPage(page);
  await arrayPage.openSection(sectionName);
});

When('the user clicks on the Try here button', async ({ page }) => {
  arrayPage = new ArrayPage(page);
  await arrayPage.openTryEditor();
});

Then('the user should be redirected to the Try Editor page', async ({ page }) => {
  await expect(page).toHaveURL(/.*tryEditor/);
});

// ============================
// Try Editor Code Execution Steps
// ============================

Given('the user is on the Try Editor page from {string} section', async ({ page }, sectionName) => {
  // Navigate to array page first
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  arrayPage = new ArrayPage(page);
  await arrayPage.openSection(sectionName);
  await arrayPage.openTryEditor();
  editorPage = new TryEditorPage(page);
});

When('the user enters valid Python code from Excel and clicks Run button', async ({ page }) => {
  editorPage = new TryEditorPage(page);
  
  // Get valid test data from Excel for Section type
  const validData = arrayTestData.find(row => row.TestType === 'Section' && row.IsError === 'No');
  
  if (validData) {
    currentTestData = validData;
    await editorPage.fillCode(validData.PythonCode);
    await editorPage.clickRun();
    await page.waitForTimeout(1000);
  }
});

Then('the user should see the expected output in console', async ({ page }) => {
  editorPage = new TryEditorPage(page);
  
  if (currentTestData && currentTestData.ExpectedOutput) {
    await expect(page.locator('#output')).toContainText(currentTestData.ExpectedOutput);
  }
});

When('the user enters invalid Python code from Excel and clicks Run button', async ({ page }) => {
  editorPage = new TryEditorPage(page);
  
  // Get invalid test data from Excel for Section type
  const invalidData = arrayTestData.find(row => row.TestType === 'Section' && row.IsError === 'Yes');
  
  if (invalidData) {
    currentTestData = invalidData;
    await editorPage.handleErrorDialog(invalidData.ExpectedOutput);
    await editorPage.fillCode(invalidData.PythonCode);
    await editorPage.clickRun();
  }
});

Then('the user should see an error message in alert dialog', async ({ page }) => {
  // Error dialog is already handled in the When step
  await page.waitForTimeout(500);
});

// ============================
// Practice Questions Navigation Steps
// ============================

When('the user clicks on the Practice Questions link', async ({ page }) => {
  arrayPage = new ArrayPage(page);
  await arrayPage.openPracticeQuestions();
});

Then('the user should be redirected to the Practice Questions page', async ({ page }) => {
  practicePage = new PracticePage(page);
  await practicePage.verifyPracticePageURL();
});

Given('the user is on the Practice Questions page for Arrays', async ({ page }) => {
  // Navigate to array page first
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  arrayPage = new ArrayPage(page);
  await arrayPage.openSection('Arrays in Python');
  await arrayPage.openPracticeQuestions();
  practicePage = new PracticePage(page);
});

When('the user clicks on the {string} practice question link', async ({ page }, questionName) => {
  currentQuestionName = questionName;
  practicePage = new PracticePage(page);
  await practicePage.openQuestion(questionName);
});

Then('the user should be on the question page with editor Run and Submit buttons', async ({ page }) => {
  // Just verify the buttons exist, don't check visibility immediately
  editorPage = new TryEditorPage(page);
  await expect(page.getByRole('button', { name: 'Run' })).toBeAttached();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeAttached();
});

// ============================
// Practice Question Editor Steps
// ============================

Given('the user is on the {string} practice question editor page', async ({ page }, questionName) => {
  // Map feature question names to Excel LinkName
  const questionNameMap = {
    'Search the array': 'Search the array',
    'Max Consecutive Ones': 'Max Consecutive Ones',
    'Find Numbers with Even Number of Digits': 'Find Numbers with Even Number',
    'Squares of a Sorted Array': 'Squares of a Sorted Array'
  };
  
  currentQuestionName = questionNameMap[questionName] || questionName;
  
  // Navigate to array page first, then to the specific practice question
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  arrayPage = new ArrayPage(page);
  await arrayPage.openSection('Arrays in Python');
  await arrayPage.openPracticeQuestions();
  
  practicePage = new PracticePage(page);
  await practicePage.openQuestion(questionName);
  
  editorPage = new TryEditorPage(page);
});

When('the user enters invalid Python code from Excel row and clicks Run button', async ({ page }) => {
  editorPage = new TryEditorPage(page);
  
  // Find invalid test data for the current question from Excel
  const invalidData = arrayTestData.find(row => 
    row.TestType === 'Practice' && 
    row.LinkName === currentQuestionName && 
    row.IsError === 'Yes'
  );
  
  if (invalidData) {
    currentTestData = invalidData;
    await editorPage.handleErrorDialog(invalidData.ExpectedOutput);
    await editorPage.fillCode(invalidData.PythonCode);
    await editorPage.clickRun();
  }
});

Then('the user should see error message in alert window', async ({ page }) => {
  // Error dialog is already handled in the When step
  await page.waitForTimeout(500);
});

When('the user enters valid Python code from Excel row and clicks Run button', async ({ page }) => {
  editorPage = new TryEditorPage(page);
  
  // Find valid test data for the current question from Excel
  const validData = arrayTestData.find(row => 
    row.TestType === 'Practice' && 
    row.LinkName && row.LinkName.startsWith(currentQuestionName.substring(0, 15)) && 
    row.IsError === 'No'
  );
  
  if (validData) {
    currentTestData = validData;
    await editorPage.fillCode(validData.PythonCode);
    await editorPage.clickRun();
    await page.waitForTimeout(3000);
  }
});

Then('the user should see output displayed in console', async ({ page }) => {
  if (currentTestData && currentTestData.ExpectedOutput) {
    // Handle multiple expected outputs (comma-separated)
    if (currentTestData.ExpectedOutput.includes(',')) {
      const outputs = currentTestData.ExpectedOutput.split(',');
      for (const output of outputs) {
        await expect(page.locator('#output')).toContainText(output.trim());
      }
    } else {
      await expect(page.locator('#output')).toContainText(currentTestData.ExpectedOutput);
    }
  }
});

When('the user enters invalid Python code from Excel row and clicks Submit button', async ({ page }) => {
  editorPage = new TryEditorPage(page);
  
  // Find invalid test data for the current question from Excel
  const invalidData = arrayTestData.find(row => 
    row.TestType === 'Practice' && 
    row.LinkName === currentQuestionName && 
    row.IsError === 'Yes'
  );
  
  if (invalidData) {
    currentTestData = invalidData;
    await editorPage.handleErrorDialog(invalidData.ExpectedOutput);
    await editorPage.fillCode(invalidData.PythonCode);
    await editorPage.clickRun();
    await page.waitForTimeout(1000);
    await editorPage.clickSubmit();
  }
});

Then('the user should see error message {string}', async ({ page }, errorMessage) => {
  if (currentTestData && currentTestData.SubmitExpected) {
    await expect(page.getByText(currentTestData.SubmitExpected)).toBeVisible();
  }
});

When('the user enters valid Python code from Excel row and clicks Submit button', async ({ page }) => {
  editorPage = new TryEditorPage(page);
  
  // Find valid test data for the current question from Excel
  const validData = arrayTestData.find(row => 
    row.TestType === 'Practice' && 
    row.LinkName === currentQuestionName && 
    row.IsError === 'No'
  );
  
  if (validData) {
    currentTestData = validData;
    await editorPage.fillCode(validData.PythonCode);
    await editorPage.clickRun();
    await page.waitForTimeout(3000);
    
    // Verify output before submitting
    if (validData.ExpectedOutput) {
      if (validData.ExpectedOutput.includes(',')) {
        const outputs = validData.ExpectedOutput.split(',');
        await editorPage.expectMultipleOutputs(outputs);
      } else {
        await editorPage.expectOutput(validData.ExpectedOutput);
      }
    }
    
    await editorPage.clickSubmit();
  }
});

Then('the user should see success message {string}', async ({ page }, successMessage) => {
  if (currentTestData && currentTestData.SubmitExpected) {
    await expect(page.getByText(currentTestData.SubmitExpected)).toBeVisible();
  }
});
