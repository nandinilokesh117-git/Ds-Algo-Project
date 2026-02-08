import { test, expect } from '@playwright/test';
import { readExcel } from '../utils/excelReader.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const excelPath = path.join(__dirname, '../test-data/DSAlgoTestData.xlsx');

// Read test data from Excel
const arrayTestData = readExcel(excelPath, 'ArrayData');

// Get credentials from ArrayData sheet
const credentialsRow = arrayTestData.find(row => row.TestType === 'Credentials');
if (!credentialsRow) {
  throw new Error('Credentials not found in Excel. Please add a row with TestType: Credentials');
}
const username = credentialsRow.Username;
const password = credentialsRow.Password;

test.beforeEach(async ({ page }) => {
  await page.goto('https://dsportalapp.herokuapp.com/');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill(username);
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
});

// Single Excel-driven test for array module
test('Excel-driven: Array module test', async ({ page }) => {
  if (!Array.isArray(arrayTestData) || arrayTestData.length === 0) {
    throw new Error('No test data loaded from Excel. Check the file path and sheet name.');
  }

  // First, handle all Section tests
  const sectionData = arrayTestData.filter(row => row.TestType === 'Section');
  for (const row of sectionData) {
    await page.getByRole('link', { name: row.ParentSection }).click();
    await page.getByRole('link', { name: /Try here/i }).click();

    const editor = page.getByRole('textbox');
    await editor.focus();
    await editor.press('Control+A');
    await editor.fill(row.PythonCode);

    if (row.IsError === 'Yes') {
      page.once('dialog', async dialog => {
        expect(dialog.message()).toContain(row.ExpectedOutput);
        await dialog.accept();
      });
      await page.getByRole('button', { name: 'Run' }).click();
    } else {
      await page.getByRole('button', { name: 'Run' }).click();
      if (row.ExpectedOutput && row.ExpectedOutput.trim() !== '') {
        await expect(page.locator('#output')).toContainText(row.ExpectedOutput);
      }
    }

    await page.goBack();
  }

  // Then, handle all Practice tests
  const practiceData = arrayTestData.filter(row => row.TestType === 'Practice');
  if (practiceData.length > 0) {
    // Navigate to practice questions page once
    await page.getByRole('link', { name: 'Arrays in Python' }).click();
    await page.getByRole('link', { name: 'Practice Questions' }).click();

    for (const row of practiceData) {
      await page.getByRole('link', { name: row.LinkName }).click();

      const editor = page.getByRole('textbox');
      await editor.focus();
      await editor.press('Control+A');
      await editor.fill(row.PythonCode);

      if (row.IsError === 'Yes') {
        page.once('dialog', async dialog => {
          expect(dialog.message()).toContain(row.ExpectedOutput);
          await dialog.accept();
        });

        await page.getByRole('button', { name: 'Run' }).click();
        await page.getByRole('button', { name: 'Submit' }).click();
        
        if (row.SubmitExpected && row.SubmitExpected.trim() !== '') {
          await expect(page.getByText(row.SubmitExpected)).toBeVisible();
        }
      } else {
        await page.getByRole('button', { name: 'Run' }).click();
       // await page.waitForTimeout(3000);

        // Handle multiple expected outputs
        if (row.ExpectedOutput && row.ExpectedOutput.includes(',')) {
          const outputs = row.ExpectedOutput.split(',');
          for (const output of outputs) {
            await expect(page.locator('#output')).toContainText(output.trim());
          }
        } else if (row.ExpectedOutput && row.ExpectedOutput.trim() !== '') {
          await expect(page.locator('#output')).toContainText(row.ExpectedOutput);
        }

        await page.getByRole('button', { name: 'Submit' }).click();
        
        if (row.SubmitExpected && row.SubmitExpected.trim() !== '') {
          await expect(page.getByText(row.SubmitExpected)).toBeVisible();
        }
      }

      await page.goBack();
    }
  }
});
