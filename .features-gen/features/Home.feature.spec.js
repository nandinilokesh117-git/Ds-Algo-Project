// Generated from: features\Home.feature
import { test } from "playwright-bdd";

test.describe('Home page access restrictions without login', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user launches the DS Algo application', null, { page }); 
    await When('the user navigates to the Home page', null, { page }); 
  });
  
  test('Verify error message for all Data Structure dropdown options without login', async ({ When, Then, page }) => { 
    await When('the user selects all Data Structure options from the dropdown and able to see the all options', null, { page }); 
    await Then('the error message "You are not logged in" should be displayed', null, { page }); 
  });

  test('Verify error message for all Get Started sections without login', async ({ When, Then, page }) => { 
    await When('the user clicks Get Started for all Data Structure sections', null, { page }); 
    await Then('the error message "You are not logged in" should be displayed', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user launches the DS Algo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user navigates to the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user selects all Data Structure options from the dropdown and able to see the all options","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the error message \"You are not logged in\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user launches the DS Algo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user navigates to the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user clicks Get Started for all Data Structure sections","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the error message \"You are not logged in\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"You are not logged in\"","children":[{"start":19,"value":"You are not logged in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end