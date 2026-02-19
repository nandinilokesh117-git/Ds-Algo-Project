// Generated from: features\Login.feature
import { test } from "playwright-bdd";

test.describe('DS Algo Sign In and Sign Out functionality', () => {

  test.beforeEach('Background', async ({ Given, When, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('The user is on the DS Algo portal homepage', null, { page }); 
    await When('The user clicks the "Get Started" button', null, { page }); 
    await And('The user navigates to the Sign in page', null, { page }); 
  });
  
  test('Verify that user receives error message for all empty fields during Login', async ({ When, Then }) => { 
    await When('The user clicks the login button without entering username and password'); 
    await Then('The error message "Please fill out this field." should appear'); 
  });

  test('Verify that user receives error message for empty Password field during Login', async ({ When, Then }) => { 
    await When('The user clicks the login button after entering only the username'); 
    await Then('The error message "Please fill out this field." should appear below the Password textbox'); 
  });

  test('Verify that user receives error message for empty Username field during Login', async ({ When, Then }) => { 
    await When('The user clicks the login button after entering only the password'); 
    await Then('The error message "Please fill out this field." should appear below the Username textbox'); 
  });

  test('Verify that user receives error message for invalid Username field during Login', async ({ When, Then }) => { 
    await When('The user clicks the login button after entering an invalid username and valid password'); 
    await Then('The user should see the error message "Invalid username and password"'); 
  });

  test('Verify that user is able to land on Home page after entering valid Username and Password fields', async ({ When, Then }) => { 
    await When('The user clicks the login button after entering valid username and valid password'); 
    await Then('The user should land on the Data Structure Home Page with message "You are logged in"'); 
  });

  test('Verify that user is able to sign out successfully', async ({ Given, When, Then, page }) => { 
    await Given('The user is on the Home page after Sign in'); 
    await When('The user clicks the "Sign out" button', null, { page }); 
    await Then('The user should be redirected to the home page with message "Logged out successfully"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Get Started\" button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And The user navigates to the Sign in page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user clicks the login button without entering username and password","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The error message \"Please fill out this field.\" should appear","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Get Started\" button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And The user navigates to the Sign in page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user clicks the login button after entering only the username","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then The error message \"Please fill out this field.\" should appear below the Password textbox","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Get Started\" button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And The user navigates to the Sign in page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When The user clicks the login button after entering only the password","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The error message \"Please fill out this field.\" should appear below the Username textbox","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Get Started\" button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And The user navigates to the Sign in page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When The user clicks the login button after entering an invalid username and valid password","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then The user should see the error message \"Invalid username and password\"","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Get Started\" button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And The user navigates to the Sign in page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When The user clicks the login button after entering valid username and valid password","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then The user should land on the Data Structure Home Page with message \"You are logged in\"","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Get Started\" button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And The user navigates to the Sign in page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given The user is on the Home page after Sign in","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Sign out\" button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to the home page with message \"Logged out successfully\"","stepMatchArguments":[]}]},
]; // bdd-data-end