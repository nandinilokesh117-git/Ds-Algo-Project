Feature:DS Algo Home Page Navigation and  Array Module

    As a registered user of DS Algo portal
    I want to navigate through all data structure sections from the home page
    So that I can verify each section page loads successfully and
    navigate through Array sections and practice questions
    So that I can verify correct behavior for code execution and error handling.

    Background:
        Given the user signs in to dsAlgo Portal with valid credentials from Excel

    Scenario: Verify navigation to Array data structure page
        Given the user is on the Home page after successful sign in
        When the user clicks on the Getting Started button for "array" section
        Then the user should be redirected to "array" data structure page
        And the user navigates back to the Home page

    Scenario Outline: Verify navigation through Array section links
        Given the user is on the Array data structure page
        When the user clicks on the "<SectionLink>" link
        Then the user should be redirected to the "<SectionLink>" page

        Examples:
            | SectionLink                 |
            | Arrays in Python            |
            | Arrays Using List           |
            | Basic Operations in Lists   |
            | Applications of Array       |

    Scenario: Verify navigation to Try Editor from Arrays in Python page
        Given the user is on the "Arrays in Python" section page
        When the user clicks on the Try here button
        Then the user should be redirected to the Try Editor page

    Scenario: Verify execution of valid Python code in Try Editor
        Given the user is on the Try Editor page from "Arrays in Python" section
        When the user enters valid Python code from Excel and clicks Run button
        Then the user should see the expected output in console

    Scenario: Verify execution of invalid Python code in Try Editor
        Given the user is on the Try Editor page from "Arrays in Python" section
        When the user enters invalid Python code from Excel and clicks Run button
        Then the user should see an error message in alert dialog

    Scenario: Verify navigation to Practice Questions page
        Given the user is on the "Arrays in Python" section page
        When the user clicks on the Practice Questions link
        Then the user should be redirected to the Practice Questions page

    Scenario Outline: Verify navigation to practice question pages
        Given the user is on the Practice Questions page for Arrays
        When the user clicks on the "<QuestionName>" practice question link
        Then the user should be on the question page with editor Run and Submit buttons

        Examples:
            | QuestionName                              |
            | Search the array                          |
            | Max Consecutive Ones                      |
            | Find Numbers with Even Number of Digits   |
            | Squares of a Sorted Array                 |

    Scenario Outline: Verify execution of invalid code for practice questions with Run button
        Given the user is on the "<QuestionName>" practice question editor page
        When the user enters invalid Python code from Excel row and clicks Run button
        Then the user should see error message in alert window

        Examples:
            | QuestionName                              |
            | Search the array                          |
            | Max Consecutive Ones                      |
            | Find Numbers with Even Number of Digits   |
            | Squares of a Sorted Array                 |

    Scenario Outline: Verify execution of valid code for practice questions with Run button
        Given the user is on the "<QuestionName>" practice question editor page
        When the user enters valid Python code from Excel row and clicks Run button
        Then the user should see output displayed in console

        Examples:
            | QuestionName                              |
            | Search the array                          |
            | Max Consecutive Ones                      |
            | Find Numbers with Even Number of Digits   |
            | Squares of a Sorted Array                 |

    Scenario Outline: Verify submission of invalid code for practice questions
        Given the user is on the "<QuestionName>" practice question editor page
        When the user enters invalid Python code from Excel row and clicks Submit button
        Then the user should see error message "error occurred during submission"

        Examples:
            | QuestionName                              |
            | Search the array                          |
            | Max Consecutive Ones                      |
            | Find Numbers with Even Number of Digits   |
            | Squares of a Sorted Array                 |

    Scenario Outline: Verify submission of valid code for practice questions
        Given the user is on the "<QuestionName>" practice question editor page
        When the user enters valid Python code from Excel row and clicks Submit button
        Then the user should see success message "Submission Successful"

        Examples:
            | QuestionName                              |
            | Search the array                          |
            | Max Consecutive Ones                      |
            | Find Numbers with Even Number of Digits   |
            | Squares of a Sorted Array                 |




