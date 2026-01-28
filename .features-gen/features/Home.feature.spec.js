// Generated from: features\Home.feature
import { test } from "playwright-bdd";

test.describe('Home page access restrictions without login', () => {

  test.beforeEach('Background', async ({ Given, And }, testInfo) => { if (testInfo.error) return;
    await Given('the user launches the DS Algo application'); 
    await And('the user navigates to the Home page'); 
  });
  
  test('Verify error message for all Data Structure dropdown options without login', async ({ When, Then }) => { 
    await When('the user selects all Data Structure options from the dropdown'); 
    await Then('the error message "You are not logged in" should be displayed'); 
  });

  test('Verify error message for all Get Started sections without login', async ({ When, Then }) => { 
    await When('the user clicks Get Started for all Data Structure sections'); 
    await Then('the error message "You are not logged in" should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user launches the DS Algo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And the user navigates to the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user selects all Data Structure options from the dropdown","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the error message \"You are not logged in\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user launches the DS Algo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And the user navigates to the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started for all Data Structure sections","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the error message \"You are not logged in\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end