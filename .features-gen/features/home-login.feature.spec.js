// Generated from: features\home-login.feature
import { test } from "playwright-bdd";

test.describe('testing ds-algo portal home page functionalities without sign in', () => {

  test('User opens the DS Algo portal', async ({ Given, When, Then, And }) => { 
    await Given('the user has opened the browser'); 
    await When('the user navigates to the DS Algo portal URL'); 
    await Then('the user should land on the DS Algo portal with the "Get Started" button visible'); 
    await When('the user clicks on the Get Started button'); 
    await Then('the Data Structure Introduction page should be displayed'); 
    await And('the "register" and "login" links should be visible'); 
    await When('the user clicks the data structures dropdown'); 
    await Then('the user should able to see 6 options "Arrays,Linked,List,Stack,Queue,Tree,Graph" in dropdown menu'); 
    await When('the user clicks on the "Get started" button of "<options>" on the homepage without Sign in'); 
    await Then('the user should be able to see an warning message "You are not logged in "'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\home-login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user has opened the browser","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user navigates to the DS Algo portal URL","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then the user should land on the DS Algo portal with the \"Get Started\" button visible","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user clicks on the Get Started button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the Data Structure Introduction page should be displayed","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And the \"register\" and \"login\" links should be visible","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks the data structures dropdown","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should able to see 6 options \"Arrays,Linked,List,Stack,Queue,Tree,Graph\" in dropdown menu","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Get started\" button of \"<options>\" on the homepage without Sign in","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user should be able to see an warning message \"You are not logged in \"","stepMatchArguments":[]}]},
]; // bdd-data-end