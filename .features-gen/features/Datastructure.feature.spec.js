// Generated from: features/Datastructure.feature
import { test } from "playwright-bdd";

test.describe('Data Structures - Introduction', () => {

  test.beforeEach('Background', async ({ Given, When, Then, page }, testInfo) => { if (testInfo.error) return;
    await Given('The user is on the DS Algo portal homepage1', null, { page }); 
    await When('The user clicks the Sign In button and login successfully by entering user credentials', null, { page }); 
    await Then('The user should land on the Data Structure Home Page with message You are logged in', null, { page }); 
  });
  
  test('Navigate to Data Structures Introduction page', async ({ When, Then, page }) => { 
    await When('the user clicks the Getting Started button in Data Structures - Introduction', null, { page }); 
    await Then('the user should land on the Data Structures - Introduction page', null, { page }); 
  });

  test('Navigate to Time Complexity page', async ({ When, Then, page }) => { 
    await When('the user clicks the Time Complexity button', null, { page }); 
    await Then('the user should be redirected to the Time Complexity page', null, { page }); 
  });

  test('Navigate to Try Editor page', async ({ When, Then, page }) => { 
    await When('the user clicks the Try Here button', null, { page }); 
    await Then('the user should be redirected to a page having a Try Editor with a Run button to test', null, { page }); 
  });

  test('Run button without entering code', async ({ When, Then, page }) => { 
    await When('the user clicks the Run button without entering code in the editor', null, { page }); 
    await Then('the user should see no error message', null, { page }); 
  });

  test('Run button with invalid Python code', async ({ When, Then, page }) => { 
    await When('the user writes invalid Python code in the editor and clicks the Run button', null, { page }); 
    await Then('the user should see an error message in the alert window', null, { page }); 
  });

  test('Run button with valid Python code', async ({ When, Then, page }) => { 
    await When('the user writes valid Python code in the editor and clicks the Run button', null, { page }); 
    await Then('the user should see output in the console', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Datastructure.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage1","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user clicks the Sign In button and login successfully by entering user credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user should land on the Data Structure Home Page with message You are logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user clicks the Getting Started button in Data Structures - Introduction","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the user should land on the Data Structures - Introduction page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage1","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user clicks the Sign In button and login successfully by entering user credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user should land on the Data Structure Home Page with message You are logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user clicks the Time Complexity button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Time Complexity page","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage1","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user clicks the Sign In button and login successfully by entering user credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user should land on the Data Structure Home Page with message You are logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user clicks the Try Here button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to a page having a Try Editor with a Run button to test","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage1","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user clicks the Sign In button and login successfully by entering user credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user should land on the Data Structure Home Page with message You are logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When the user clicks the Run button without entering code in the editor","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then the user should see no error message","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage1","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user clicks the Sign In button and login successfully by entering user credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user should land on the Data Structure Home Page with message You are logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When the user writes invalid Python code in the editor and clicks the Run button","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message in the alert window","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given The user is on the DS Algo portal homepage1","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When The user clicks the Sign In button and login successfully by entering user credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user should land on the Data Structure Home Page with message You are logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user writes valid Python code in the editor and clicks the Run button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the user should see output in the console","stepMatchArguments":[]}]},
]; // bdd-data-end