// Generated from: features/Register.feature
import { test } from "playwright-bdd";

test.describe('User Registration functionality', () => {

  test('', async ({ Given, When, Then, page }) => { 
    await Given('the user is on the Home page', null, { page }); 
    await When('the user clicks the Register link on the Home page', null, { page }); 
    await Then('the user navigates to the Register form', null, { page }); 
    await When('the user clicks the Register button with all fields empty'); 
    await Then('the error Please fill out this field. shows under the Username box'); 
    await When('the user clicks the Register button after entering password and password confirmation with the username field empty'); 
    await Then('the error Please fill out this field. shows under the Username box1'); 
    await When('the user clicks the Register button after entering username and password with the password confirmation field empty'); 
    await Then('the error Please fill out this field. shows under the password confirmation box'); 
    await When('the user clicks the Register button after entering a username containing space characters and invalid symbols other than digits and @/./+/-/_'); 
    await Then('the error warning message shows under the Password box'); 
    await When('the user clicks the Register button after entering username and mismatched passwords in the password and password confirmation fields'); 
    await Then('the user sees the warning password_mismatch: The two password fields didn’t match.'); 
    await When('the user clicks the Register button after entering valid username, password, and password confirmation in their respective fields'); 
    await Then('the user goes to the DS Algo Home Page with the message New Account Created. You are logged in as <ID>', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Register.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user is on the Home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user clicks the Register link on the Home page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the user navigates to the Register form","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks the Register button with all fields empty","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the error Please fill out this field. shows under the Username box","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks the Register button after entering password and password confirmation with the username field empty","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the error Please fill out this field. shows under the Username box1","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user clicks the Register button after entering username and password with the password confirmation field empty","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the error Please fill out this field. shows under the password confirmation box","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user clicks the Register button after entering a username containing space characters and invalid symbols other than digits and @/./+/-/_","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the error warning message shows under the Password box","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user clicks the Register button after entering username and mismatched passwords in the password and password confirmation fields","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the user sees the warning password_mismatch: The two password fields didn’t match.","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When the user clicks the Register button after entering valid username, password, and password confirmation in their respective fields","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the user goes to the DS Algo Home Page with the message New Account Created. You are logged in as <ID>","stepMatchArguments":[]}]},
]; // bdd-data-end