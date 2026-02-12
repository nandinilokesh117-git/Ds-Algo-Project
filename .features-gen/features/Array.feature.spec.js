// Generated from: features/Array.feature
import { test } from "playwright-bdd";

test.describe('DS Algo Home Page Navigation and  Array Module', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user signs in to dsAlgo Portal with valid credentials from Excel', null, { page }); 
  });
  
  test('Verify navigation to Array data structure page', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the Home page after successful sign in', null, { page }); 
    await When('the user clicks on the Getting Started button for "array" section', null, { page }); 
    await Then('the user should be redirected to "array" data structure page', null, { page }); 
    await And('the user navigates back to the Home page', null, { page }); 
  });

  test.describe('Verify navigation through Array section links', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Array data structure page', null, { page }); 
      await When('the user clicks on the "Arrays in Python" link', null, { page }); 
      await Then('the user should be redirected to the "Arrays in Python" page', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Array data structure page', null, { page }); 
      await When('the user clicks on the "Arrays Using List" link', null, { page }); 
      await Then('the user should be redirected to the "Arrays Using List" page', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Array data structure page', null, { page }); 
      await When('the user clicks on the "Basic Operations in Lists" link', null, { page }); 
      await Then('the user should be redirected to the "Basic Operations in Lists" page', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Array data structure page', null, { page }); 
      await When('the user clicks on the "Applications of Array" link', null, { page }); 
      await Then('the user should be redirected to the "Applications of Array" page', null, { page }); 
    });

  });

  test('Verify navigation to Try Editor from Arrays in Python page', async ({ Given, When, Then, page }) => { 
    await Given('the user is on the "Arrays in Python" section page', null, { page }); 
    await When('the user clicks on the Try here button', null, { page }); 
    await Then('the user should be redirected to the Try Editor page', null, { page }); 
  });

  test('Verify execution of valid Python code in Try Editor', async ({ Given, When, Then, page }) => { 
    await Given('the user is on the Try Editor page from "Arrays in Python" section', null, { page }); 
    await When('the user enters valid Python code from Excel and clicks Run button', null, { page }); 
    await Then('the user should see the expected output in console', null, { page }); 
  });

  test('Verify execution of invalid Python code in Try Editor', async ({ Given, When, Then, page }) => { 
    await Given('the user is on the Try Editor page from "Arrays in Python" section', null, { page }); 
    await When('the user enters invalid Python code from Excel and clicks Run button', null, { page }); 
    await Then('the user should see an error message in alert dialog', null, { page }); 
  });

  test('Verify navigation to Practice Questions page', async ({ Given, When, Then, page }) => { 
    await Given('the user is on the "Arrays in Python" section page', null, { page }); 
    await When('the user clicks on the Practice Questions link', null, { page }); 
    await Then('the user should be redirected to the Practice Questions page', null, { page }); 
  });

  test.describe('Verify navigation to practice question pages', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Practice Questions page for Arrays', null, { page }); 
      await When('the user clicks on the "Search the array" practice question link', null, { page }); 
      await Then('the user should be on the question page with editor Run and Submit buttons', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Practice Questions page for Arrays', null, { page }); 
      await When('the user clicks on the "Max Consecutive Ones" practice question link', null, { page }); 
      await Then('the user should be on the question page with editor Run and Submit buttons', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Practice Questions page for Arrays', null, { page }); 
      await When('the user clicks on the "Find Numbers with Even Number of Digits" practice question link', null, { page }); 
      await Then('the user should be on the question page with editor Run and Submit buttons', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the Practice Questions page for Arrays', null, { page }); 
      await When('the user clicks on the "Squares of a Sorted Array" practice question link', null, { page }); 
      await Then('the user should be on the question page with editor Run and Submit buttons', null, { page }); 
    });

  });

  test.describe('Verify execution of invalid code for practice questions with Run button', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Search the array" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see error message in alert window', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Max Consecutive Ones" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see error message in alert window', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Find Numbers with Even Number of Digits" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see error message in alert window', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Squares of a Sorted Array" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see error message in alert window', null, { page }); 
    });

  });

  test.describe('Verify execution of valid code for practice questions with Run button', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Search the array" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see output displayed in console', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Max Consecutive Ones" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see output displayed in console', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Find Numbers with Even Number of Digits" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see output displayed in console', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Squares of a Sorted Array" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Run button', null, { page }); 
      await Then('the user should see output displayed in console', null, { page }); 
    });

  });

  test.describe('Verify submission of invalid code for practice questions', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Search the array" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see error message "error occurred during submission"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Max Consecutive Ones" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see error message "error occurred during submission"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Find Numbers with Even Number of Digits" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see error message "error occurred during submission"', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Squares of a Sorted Array" practice question editor page', null, { page }); 
      await When('the user enters invalid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see error message "error occurred during submission"', null, { page }); 
    });

  });

  test.describe('Verify submission of valid code for practice questions', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Search the array" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see success message "Submission Successful"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Max Consecutive Ones" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see success message "Submission Successful"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Find Numbers with Even Number of Digits" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see success message "Submission Successful"', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('the user is on the "Squares of a Sorted Array" practice question editor page', null, { page }); 
      await When('the user enters valid Python code from Excel row and clicks Submit button', null, { page }); 
      await Then('the user should see success message "Submission Successful"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Array.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given the user is on the Home page after successful sign in","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When the user clicks on the Getting Started button for \"array\" section","stepMatchArguments":[{"group":{"start":50,"value":"\"array\"","children":[{"start":51,"value":"array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to \"array\" data structure page","stepMatchArguments":[{"group":{"start":33,"value":"\"array\"","children":[{"start":34,"value":"array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the user navigates back to the Home page","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on the Array data structure page","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Arrays in Python\" link","stepMatchArguments":[{"group":{"start":23,"value":"\"Arrays in Python\"","children":[{"start":24,"value":"Arrays in Python","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the \"Arrays in Python\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"Arrays in Python\"","children":[{"start":38,"value":"Arrays in Python","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on the Array data structure page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Arrays Using List\" link","stepMatchArguments":[{"group":{"start":23,"value":"\"Arrays Using List\"","children":[{"start":24,"value":"Arrays Using List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the \"Arrays Using List\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"Arrays Using List\"","children":[{"start":38,"value":"Arrays Using List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on the Array data structure page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Basic Operations in Lists\" link","stepMatchArguments":[{"group":{"start":23,"value":"\"Basic Operations in Lists\"","children":[{"start":24,"value":"Basic Operations in Lists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the \"Basic Operations in Lists\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"Basic Operations in Lists\"","children":[{"start":38,"value":"Basic Operations in Lists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on the Array data structure page","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Applications of Array\" link","stepMatchArguments":[{"group":{"start":23,"value":"\"Applications of Array\"","children":[{"start":24,"value":"Applications of Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the \"Applications of Array\" page","stepMatchArguments":[{"group":{"start":37,"value":"\"Applications of Array\"","children":[{"start":38,"value":"Applications of Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":45,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Arrays in Python\" section page","stepMatchArguments":[{"group":{"start":19,"value":"\"Arrays in Python\"","children":[{"start":20,"value":"Arrays in Python","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user clicks on the Try here button","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Try Editor page","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given the user is on the Try Editor page from \"Arrays in Python\" section","stepMatchArguments":[{"group":{"start":40,"value":"\"Arrays in Python\"","children":[{"start":41,"value":"Arrays in Python","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel and clicks Run button","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the user should see the expected output in console","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given the user is on the Try Editor page from \"Arrays in Python\" section","stepMatchArguments":[{"group":{"start":40,"value":"\"Arrays in Python\"","children":[{"start":41,"value":"Arrays in Python","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel and clicks Run button","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message in alert dialog","stepMatchArguments":[]}]},
  {"pwTestLine":63,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Arrays in Python\" section page","stepMatchArguments":[{"group":{"start":19,"value":"\"Arrays in Python\"","children":[{"start":20,"value":"Arrays in Python","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When the user clicks on the Practice Questions link","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Practice Questions page","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given the user is on the Practice Questions page for Arrays","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Search the array\" practice question link","stepMatchArguments":[{"group":{"start":23,"value":"\"Search the array\"","children":[{"start":24,"value":"Search the array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":74,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then the user should be on the question page with editor Run and Submit buttons","stepMatchArguments":[]}]},
  {"pwTestLine":77,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given the user is on the Practice Questions page for Arrays","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Max Consecutive Ones\" practice question link","stepMatchArguments":[{"group":{"start":23,"value":"\"Max Consecutive Ones\"","children":[{"start":24,"value":"Max Consecutive Ones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":80,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then the user should be on the question page with editor Run and Submit buttons","stepMatchArguments":[]}]},
  {"pwTestLine":83,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given the user is on the Practice Questions page for Arrays","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Find Numbers with Even Number of Digits\" practice question link","stepMatchArguments":[{"group":{"start":23,"value":"\"Find Numbers with Even Number of Digits\"","children":[{"start":24,"value":"Find Numbers with Even Number of Digits","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":86,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then the user should be on the question page with editor Run and Submit buttons","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":60,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given the user is on the Practice Questions page for Arrays","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Squares of a Sorted Array\" practice question link","stepMatchArguments":[{"group":{"start":23,"value":"\"Squares of a Sorted Array\"","children":[{"start":24,"value":"Squares of a Sorted Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":92,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then the user should be on the question page with editor Run and Submit buttons","stepMatchArguments":[]}]},
  {"pwTestLine":99,"pickleLine":69,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Search the array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Search the array\"","children":[{"start":20,"value":"Search the array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":101,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message in alert window","stepMatchArguments":[]}]},
  {"pwTestLine":105,"pickleLine":70,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Max Consecutive Ones\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Max Consecutive Ones\"","children":[{"start":20,"value":"Max Consecutive Ones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":107,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message in alert window","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":71,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Find Numbers with Even Number of Digits\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Find Numbers with Even Number of Digits\"","children":[{"start":20,"value":"Find Numbers with Even Number of Digits","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":113,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message in alert window","stepMatchArguments":[]}]},
  {"pwTestLine":117,"pickleLine":72,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Squares of a Sorted Array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Squares of a Sorted Array\"","children":[{"start":20,"value":"Squares of a Sorted Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":119,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message in alert window","stepMatchArguments":[]}]},
  {"pwTestLine":127,"pickleLine":81,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Search the array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Search the array\"","children":[{"start":20,"value":"Search the array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":129,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then the user should see output displayed in console","stepMatchArguments":[]}]},
  {"pwTestLine":133,"pickleLine":82,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Max Consecutive Ones\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Max Consecutive Ones\"","children":[{"start":20,"value":"Max Consecutive Ones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":135,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then the user should see output displayed in console","stepMatchArguments":[]}]},
  {"pwTestLine":139,"pickleLine":83,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Find Numbers with Even Number of Digits\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Find Numbers with Even Number of Digits\"","children":[{"start":20,"value":"Find Numbers with Even Number of Digits","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":141,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then the user should see output displayed in console","stepMatchArguments":[]}]},
  {"pwTestLine":145,"pickleLine":84,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Squares of a Sorted Array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Squares of a Sorted Array\"","children":[{"start":20,"value":"Squares of a Sorted Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":147,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Run button","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then the user should see output displayed in console","stepMatchArguments":[]}]},
  {"pwTestLine":155,"pickleLine":93,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Search the array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Search the array\"","children":[{"start":20,"value":"Search the array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":157,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message \"error occurred during submission\"","stepMatchArguments":[{"group":{"start":34,"value":"\"error occurred during submission\"","children":[{"start":35,"value":"error occurred during submission","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":161,"pickleLine":94,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Max Consecutive Ones\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Max Consecutive Ones\"","children":[{"start":20,"value":"Max Consecutive Ones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":163,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message \"error occurred during submission\"","stepMatchArguments":[{"group":{"start":34,"value":"\"error occurred during submission\"","children":[{"start":35,"value":"error occurred during submission","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":167,"pickleLine":95,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Find Numbers with Even Number of Digits\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Find Numbers with Even Number of Digits\"","children":[{"start":20,"value":"Find Numbers with Even Number of Digits","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":169,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message \"error occurred during submission\"","stepMatchArguments":[{"group":{"start":34,"value":"\"error occurred during submission\"","children":[{"start":35,"value":"error occurred during submission","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":173,"pickleLine":96,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Squares of a Sorted Array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Squares of a Sorted Array\"","children":[{"start":20,"value":"Squares of a Sorted Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":175,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When the user enters invalid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then the user should see error message \"error occurred during submission\"","stepMatchArguments":[{"group":{"start":34,"value":"\"error occurred during submission\"","children":[{"start":35,"value":"error occurred during submission","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":183,"pickleLine":105,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Search the array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Search the array\"","children":[{"start":20,"value":"Search the array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":185,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then the user should see success message \"Submission Successful\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Submission Successful\"","children":[{"start":37,"value":"Submission Successful","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":189,"pickleLine":106,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":190,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Max Consecutive Ones\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Max Consecutive Ones\"","children":[{"start":20,"value":"Max Consecutive Ones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":191,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then the user should see success message \"Submission Successful\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Submission Successful\"","children":[{"start":37,"value":"Submission Successful","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":195,"pickleLine":107,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":196,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Find Numbers with Even Number of Digits\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Find Numbers with Even Number of Digits\"","children":[{"start":20,"value":"Find Numbers with Even Number of Digits","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":197,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then the user should see success message \"Submission Successful\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Submission Successful\"","children":[{"start":37,"value":"Submission Successful","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":201,"pickleLine":108,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user signs in to dsAlgo Portal with valid credentials from Excel","isBg":true,"stepMatchArguments":[]},{"pwStepLine":202,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the user is on the \"Squares of a Sorted Array\" practice question editor page","stepMatchArguments":[{"group":{"start":19,"value":"\"Squares of a Sorted Array\"","children":[{"start":20,"value":"Squares of a Sorted Array","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":203,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When the user enters valid Python code from Excel row and clicks Submit button","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then the user should see success message \"Submission Successful\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Submission Successful\"","children":[{"start":37,"value":"Submission Successful","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end