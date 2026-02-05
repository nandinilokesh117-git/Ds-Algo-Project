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
  await page.getByRole('link', { name: 'Arrays in Python' }).click();
  await page.getByRole('link', { name: 'Practice Questions' }).click();
});

test('array search practice test', async ({ page }) => {

  await page.getByRole('link', { name: 'Search the array' }).click();
  //await page.locator('pre').filter({ hasText: 'def search(input_list, num):' }).click();
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
    const pythonCode1 = `def search(input_list, num):
    if num in input_list:
        return "Element Found"
    else:
        return "Not Found"
# Example usage 
print(search([12, 23, 45, 67, 6, 90], 12)  # Element Found  
print(search([12, 23, 45, 67, 6, 90], 25))   # Not Found`;
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


  
});

test('array max consecutive ones practice test', async ({ page }) => {  

await page.getByRole('link', { name: 'Max Consecutive Ones' }).click();

/*await page
  .locator('pre')
  .filter({ hasText: 'def findMaxConsecutiveOnes(nums)' })
  .click();*/

const editor = page.getByRole('textbox');
await editor.focus();
await editor.press('Control+A');

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

await editor.fill(pythonCode2);

await page.getByRole('button', { name: 'Run' }).click();

await page.waitForTimeout(3000);
await expect(page.locator('#output')).toContainText('3');
await expect(page.locator('#output')).toContainText('2');

await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Submission Successful')).toBeVisible();

const pythonCode3 = `def findMaxConsecutiveOnes(nums):
    max_count = 0
    current_count = 0 
    for num in nums:
        if num == 1:
            current_count += 1
            max_count = max(max_count, current_count)
        else:
            current_count = 0
    return max_count

print(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
print(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))`;
await editor.focus();
await editor.press('Control+A');
await editor.fill(pythonCode3);
page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});

await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("error occurred during submission")).toBeVisible(); 

}); 

test('find numbers with even number of digits practice test', async ({ page }) => {

await page.getByRole('link', { name: 'Find Numbers with Even Number' }).click(); 
//await page.locator('pre').filter({ hasText: 'def findNumbers(nums):' }).click();
const editor = page.getByRole('textbox');
await editor.focus();
await editor.press('Control+A');
const pythonCode4 = `def findNumbers(nums):
    count = 0
    for num in nums:
        if len(str(num)) % 2 == 0:
            count += 1
    return count
print(findNumbers([12, 345, 2, 6, 7896]))
print(findNumbers([555, 901, 482, 1771]))`;
await editor.fill(pythonCode4);
await page.getByRole('button', { name: 'Run' }).click();
await page.waitForTimeout(3000);
await expect(page.locator('#output')).toContainText('2');
await expect(page.locator('#output')).toContainText('1');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Submission Successful')).toBeVisible();
const pythonCode5 = `def findNumbers(nums):
    count = 0
    for num in nums:
        if len(str(num)) % 2 == 0:
            count += 1
    return count
print(findNumbers([12, 345, 2, 6, 7896])
print(findNumbers([555, 901, 482, 1771]))`;
await editor.focus();
await editor.press('Control+A');
await editor.fill(pythonCode5);
page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
}
);
await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("error occurred during submission")).toBeVisible();
});

test('squares of a sorted array practice test', async ({ page }) => {  

await page.getByRole('link', { name: 'Squares of a Sorted Array' }).click();

/*await page
  .locator('pre')
  .filter({ hasText: 'def sortedSquares(nums):' })
  .click();*/
const editor = page.getByRole('textbox');
await editor.focus();
await editor.press('Control+A');
const pythonCode6 = `def sortedSquares(nums):
    return sorted([x**2 for x in nums])
print(sortedSquares([-4, -1, 0, 3, 10]))
print(sortedSquares([-7, -3, 2, 3, 11]))`;
await editor.fill(pythonCode6);
await page.getByRole('button', { name: 'Run' }).click();

await page.waitForTimeout(3000);
await expect(page.locator('#output')).toContainText('[0, 1, 9, 16, 100]');
await expect(page.locator('#output')).toContainText('[4, 9, 9, 49, 121]');
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('No tests were collected')).toBeVisible();
const pythonCode7 = `def sortedSquares(nums):
    return sorted([x**2 for x in nums])
print(sortedSquares([-4, -1, 0, 3, 10])
print(sortedSquares([-7, -3, 2, 3, 11]))`;
await editor.focus();
await editor.press('Control+A');
await editor.fill(pythonCode7);
page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
}
);
await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("No tests were collected")).toBeVisible(); 
});

/*test('array search practice test', async ({ page }) => {

  await page.goto('https://dsportalapp.herokuapp.com/');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('nandini');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Password@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  await page.getByRole('link', { name: 'Arrays in Python' }).click();
  await page.getByRole('link', { name: 'Practice Questions' }).click();
  await page.getByRole('link', { name: 'Search the array' }).click();

  await page.locator('pre').filter({ hasText: 'def search(input_list, num):' }).click();
  await page.getByRole('textbox').clear();
  const pythonCode = `
    if num in input_list:
        return "Element Found"
    else:
        return "Not Found"

# Example usage
print(search([12, 23, 45, 67, 6, 90], 12))   # Element Found
print(search([12, 23, 45, 67, 6, 90], 25))   # Not Found
`;

  await page.getByRole('textbox').fill(pythonCode);
  await page.getByRole('button', { name: 'Run' }).click();
  await expect(page.getByText('Element Found Not Found')).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Submission Successful')).toBeVisible();

    const pythonCode1 = `
    if num in input_list:
        return "Element Found"
    else:
        return "Not Found"

# Example usage
print(search([12, 23, 45, 67, 6, 90], 12)  # Element Found
print(search([12, 23, 45, 67, 6, 90], 25))   # Not Found
`;
  await page.getByRole('textbox').focus();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.getByRole('textbox').fill(pythonCode1);

 page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('SyntaxError');
  await dialog.accept();
});

await page.getByRole('button', { name: 'Run' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText("error occurred during submission")).toBeVisible();

});*/