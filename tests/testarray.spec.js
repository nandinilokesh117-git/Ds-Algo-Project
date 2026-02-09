import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dsportalapp.herokuapp.com/');

  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('nandini');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Password@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  //await page.getByRole('link', { name: 'Arrays in Python' }).click();
  //await page.getByRole('link', { name: 'Practice Questions' }).click();
});


//navigate through homepage sections

test('navigate through homepage sections', async ({ page }) => {  
const sections = [
  'data-structures-introduction',
  'array',
  'linked-list',
  'stack',
  'queue',
  'tree',
  'graph'
];

for (const href of sections) {
  const link = page.locator(`a[href="${href}"]`);
  if (await link.isVisible()) {
    await link.click();
    await page.waitForLoadState('networkidle'); 
  }
   await page.goBack();
}
});
//array in python section link
test('navigate through array section links', async ({ page }) => {
  await page.getByRole('link', { name: 'Arrays in Python' }).click();
  await page.getByRole('link', { name: 'Try here>>>' }).click();

  const editor = page.getByRole('textbox');
  await editor.focus();
  await editor.press('Control+A');
  const pythonCode8 = `my_list = []

my_list.append("milk")
my_list.append("bread")
my_list.append("eggs")

print(my_list)`;
  await editor.fill(pythonCode8);
  
  await page.getByRole('button', { name: 'Run' }).click();
  await expect(page.locator('#output')).toContainText("['milk', 'bread', 'eggs']");
   const pythonCodeError = `print("Hello World"))`;
  await editor.focus();
  await editor.press('Control+A');
  await editor.fill(pythonCodeError); 
  page.once('dialog', async dialog => { 
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});
await page.getByRole('button', { name: 'Run' }).click();
  await page.goBack();
//array using list link
  await page.getByRole('link', { name: 'Arrays Using List' }).click();
  await page.getByRole('link', { name: 'Try here>>>' }).click();
  await page.getByRole('button', { name: 'Run' }).click();
  await editor.focus();
  await editor.press('Control+A');
  const pythonCode9 = `fruits = ['apple', 'banana', 'cherry']
fruits.remove('banana')
print(fruits)`;
  await editor.fill(pythonCode9);
  await page.getByRole('button', { name: 'Run' }).click();
  await expect(page.locator('#output')).toContainText("['apple', 'cherry']");
   const pythonCodeError1 = `print("Hello World"))`;
  await editor.focus();
  await editor.press('Control+A');
  await editor.fill(pythonCodeError1); 
  page.once('dialog', async dialog => { 
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});
await page.getByRole('button', { name: 'Run' }).click();
  await page.goBack();
//basic operations in list link 
  await page.getByRole('link', { name: 'Basic Operations in Lists' }).click();
  await page.getByRole('link', { name: 'Try here>>>' }).click();
 
  await editor.focus();
  await editor.press('Control+A');
  const pythonCode10 = `numbers = [1, 2, 3, 4, 5]
numbers.insert(2, 10)
print(numbers)`;
  await editor.fill(pythonCode10);
  await page.getByRole('button', { name: 'Run' }).click();
  await expect(page.locator('#output')).toContainText("[1, 2, 10, 3, 4, 5]");
   const pythonCodeError2 = `print("Hello World"))`;
  await editor.focus();
  await editor.press('Control+A');
  await editor.fill(pythonCodeError2); 
  page.once('dialog', async dialog => { 
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});
await page.getByRole('button', { name: 'Run' }).click();
  await page.goBack();
//applications of array link
  await page.getByRole('link', { name: 'Applications of Array' }).click();
  await page.getByRole('link', { name: 'Try here>>>' }).click();

  await editor.focus();
  await editor.press('Control+A');
  const pythonCode11 = `def reverse_array(arr):
    return arr[::-1]
print(reverse_array([1, 2, 3, 4, 5]))`;
  await editor.fill(pythonCode11);
  await page.getByRole('button', { name: 'Run' }).click();
  await expect(page.locator('#output')).toContainText("[5, 4, 3, 2, 1]");
   const pythonCodeError3 = `print("Hello World"))`;
  await editor.focus();
  await editor.press('Control+A');
  await editor.fill(pythonCodeError3); 
  page.once('dialog', async dialog => { 
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});
await page.getByRole('button', { name: 'Run' }).click();
  
});
//array search practice test
test('array search practice test', async ({ page }) => {
   await page.getByRole('link', { name: 'Arrays in Python' }).click();
  await page.getByRole('link', { name: 'Practice Questions' }).click();

  await page.getByRole('link', { name: 'Search the array' }).click();
  const editor = page.getByRole('textbox');
  await editor.focus();
  await editor.press('Control+A');
  const pythonCode = `def search(input_list, num):
    if num in input_list:
        return "Element Found"
    else:
        return "Not Found"
# Example usage
print(search([12, 23, 45, 67, 6, 90], 12))   # Element Found
print(search([12, 23, 45, 67, 6, 90], 25))   # Not Found`;
  await editor.fill(pythonCode);
  await page.getByRole('button', { name: 'Run' }).click();
  await expect(page.locator('#output')).toContainText('Element Found');
  await expect(page.locator('#output')).toContainText('Not Found');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Submission Successful')).toBeVisible();
    const pythonCode1 = `print("Hello World"))`;
  await editor.focus();
  await editor.press('Control+A');
  await editor.fill(pythonCode1); 
  page.once('dialog', async dialog => { 
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});
await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("error occurred during submission")).toBeVisible();
 await  page.goBack();

//array max consecutive ones practice test
 

await page.getByRole('link', { name: 'Max Consecutive Ones' }).click();

const editor1 = page.getByRole('textbox');
await editor1.focus();
await editor1.press('Control+A');

const pythonCode2 = `def findMaxConsecutiveOnes(nums):
    max_count = 0
    current_count = 0

    for num in nums:
        if num == 1:
            current_count += 1
            max_count = max(max_count, current_count)
        else:
            current_count = 0

    return max_count

print(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
print(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))`;

await editor1.fill(pythonCode2);

await page.getByRole('button', { name: 'Run' }).click();

await page.waitForTimeout(3000);
await expect(page.locator('#output')).toContainText('3');
await expect(page.locator('#output')).toContainText('2');

await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Submission Successful')).toBeVisible();

const pythonCode3 = `print("Hello World"))`;
await editor1.focus();
await editor1.press('Control+A');
await editor1.fill(pythonCode3);
page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});

await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("error occurred during submission")).toBeVisible(); 
await  page.goBack();
//find numbers with even number of digits practice test


await page.getByRole('link', { name: 'Find Numbers with Even Number' }).click(); 
const editor2 = page.getByRole('textbox');
await editor2.focus();
await editor2.press('Control+A');
const pythonCode4 = `def findNumbers(nums):
    count = 0
    for num in nums:
        if len(str(num)) % 2 == 0:
            count += 1
    return count
print(findNumbers([12, 345, 2, 6, 7896]))
print(findNumbers([555, 901, 482, 1771]))`;
await editor2.fill(pythonCode4);
await page.getByRole('button', { name: 'Run' }).click();
await page.waitForTimeout(3000);
await expect(page.locator('#output')).toContainText('2');
await expect(page.locator('#output')).toContainText('1');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Submission Successful')).toBeVisible();
const pythonCode5 = `print("Hello World"))`;
await editor2.focus();
await editor2.press('Control+A');
await editor2.fill(pythonCode5);
page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});
await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("error occurred during submission")).toBeVisible();
await  page.goBack(); 
//squares of a sorted array practice test


await page.getByRole('link', { name: 'Squares of a Sorted Array' }).click();

const editor3 = page.getByRole('textbox');
await editor3.focus();
await editor3.press('Control+A');
const pythonCode6 = `def sortedSquares(nums):
    return sorted([x**2 for x in nums])
print(sortedSquares([-4, -1, 0, 3, 10]))
print(sortedSquares([-7, -3, 2, 3, 11]))`;
await editor3.fill(pythonCode6);
await page.getByRole('button', { name: 'Run' }).click();

await page.waitForTimeout(3000);
await expect(page.locator('#output')).toContainText('[0, 1, 9, 16, 100]');
await expect(page.locator('#output')).toContainText('[4, 9, 9, 49, 121]');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('No tests were collected')).toBeVisible();
const pythonCode7 = `print("Hello World"))`;
await editor3.focus();
await editor3.press('Control+A');
await editor3.fill(pythonCode7);
page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});
await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("No tests were collected")).toBeVisible(); 
}); 

/*import { test, expect } from '@playwright/test';
import { readExcel } from '../utils/excelReader.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const excelPath = path.join(__dirname, '../test-data/DSAlgoTestData.xlsx');


// Read test data from Excel
const arrayTestData = readExcel(excelPath, 'ArrayData');
const arrayTestData1= readExcel(excelPath, 'Login');

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

test('navigate through homepage sections', async ({ page }) => {  
const sections = [
  'data-structures-introduction',
  'array',
  'linked-list',
  'stack',
  'queue',
  'tree',
  'graph'
];

for (const href of sections) {
  const link = page.locator(`a[href="${href}"]`);
  if (await link.isVisible()) {
    await link.click();
    await page.waitForLoadState('networkidle'); 
  }
   await page.goBack();
}
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
});*/