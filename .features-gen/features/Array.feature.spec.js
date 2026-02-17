// Generated from: features\Array.feature
import { test } from "playwright-bdd";

test.describe('Verify all the features of the Array module are working as expected', () => {

  test('Verify that user is able to navigate to "Array" data structure page', async ({ Given, When, Then, page }) => { 
    await Given('The user is in the Home page', null, { page }); 
    await When('The user signs in', null, { page }); 
    await When('The user clicks the Getting Started button in Array Panel', null, { page }); 
    await Then('The user should be redirected to "Array" data structure page', null, { page }); 
    await When('The user clicks "Arrays in Python" link', null, { page }); 
    await Then('The user should be redirected to "Arrays in Python" page', null, { page }); 
    await When('The user clicks Arrays using List link', null, { page }); 
    await Then('The user should be redirected to "Arrays using List" page', null, { page }); 
    await When('The user clicks Basic operations in List link', null, { page }); 
    await Then('The user should be redirected to "Basic operations in List" page', null, { page }); 
    await When('The user clicks Applications of Array link', null, { page }); 
    await Then('The user should be redirected to "Applications of Array" page', null, { page }); 
    await Given('The user is on the Arrays in Python page', null, { page }); 
    await When('The user clicks "Try here" button in "Arrays in Python" page', null, { page }); 
    await Then('The user should be connected to "try Editor" page with a text editor and a "Run" button', null, { page }); 
    await Given('The user is on the "Arrays using List"page', null, { page }); 
    await When('The user clicks "Try here" button in "Arrays using List" page', null, { page }); 
    await Then('The user should be navigated to "try Editor" page with a text editor and a Run button', null, { page }); 
    await Given('The user is on the Basic operations in List page', null, { page }); 
    await When('The user clicks Try here button in Basic operations in List page', null, { page }); 
    await Then('The user should be directed to "try Editor" page with a text editor and a Run button', null, { page }); 
    await Given('The user is on the Applications of Array page', null, { page }); 
    await When('The user clicks Try here button in Applications of Array page', null, { page }); 
    await Then('The user should be redirected to try Editor page with a text editor and a Run button', null, { page }); 
    await When('the user enters invalid code in the Editor and clicks the Run button', null, { page }); 
    await Then('the user should be able to see an error message in the alert window'); 
    await When('The user enters valid code in the Editor and clicks the Run button', null, { page }); 
    await Then('the user should able to see the output of the code in the output section', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Array.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is in the Home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user signs in","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When The user clicks the Getting Started button in Array Panel","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to \"Array\" data structure page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user clicks \"Arrays in Python\" link","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to \"Arrays in Python\" page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When The user clicks Arrays using List link","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to \"Arrays using List\" page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When The user clicks Basic operations in List link","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to \"Basic operations in List\" page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When The user clicks Applications of Array link","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to \"Applications of Array\" page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given The user is on the Arrays in Python page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When The user clicks \"Try here\" button in \"Arrays in Python\" page","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then The user should be connected to \"try Editor\" page with a text editor and a \"Run\" button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given The user is on the \"Arrays using List\"page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When The user clicks \"Try here\" button in \"Arrays using List\" page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The user should be navigated to \"try Editor\" page with a text editor and a Run button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given The user is on the Basic operations in List page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When The user clicks Try here button in Basic operations in List page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then The user should be directed to \"try Editor\" page with a text editor and a Run button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given The user is on the Applications of Array page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When The user clicks Try here button in Applications of Array page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then The user should be redirected to try Editor page with a text editor and a Run button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When the user enters invalid code in the Editor and clicks the Run button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then the user should be able to see an error message in the alert window","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When The user enters valid code in the Editor and clicks the Run button","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then the user should able to see the output of the code in the output section","stepMatchArguments":[]}]},
]; // bdd-data-end