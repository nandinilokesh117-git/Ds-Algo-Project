Feature: Data Structures - Introduction
As a new user
  I want to Sign In to the DS Algo portal with registered user details
  So that I can access the application


    Background: 
    Given The user is on the DS Algo portal homepage1
    When The user clicks the Sign In button and login successfully by entering user credentials
    Then The user should land on the Data Structure Home Page with message You are logged in

    # Scenario: Verify that user is able to land on Home page after entering valid Username and Password fields
    # When The user clicks the Sign In button after entering valid username and valid password
    # Then The user should land on the Data Structure Home Page with message You are logged in

    Scenario: Navigate to Data Structures Introduction page
    When the user clicks the Getting Started button in Data Structures - Introduction
    Then the user should land on the Data Structures - Introduction page

     # Scenario: Navigate to Practice Questions page
    # When the user clicks the "Practice Questions" button
    # Then the user should be redirected to the "Practice Questions" page

    Scenario: Navigate to Time Complexity page
    When the user clicks the Time Complexity button
    Then the user should be redirected to the Time Complexity page

   
    Scenario: Navigate to Try Editor page
    When the user clicks the Try Here button
    Then the user should be redirected to a page having a Try Editor with a Run button to test

    Scenario: Run button without entering code
    When the user clicks the Run button without entering code in the editor
    Then the user should see no error message

    Scenario: Run button with invalid Python code
    When the user writes invalid Python code in the editor and clicks the Run button
    Then the user should see an error message in the alert window

    Scenario: Run button with valid Python code
    When the user writes valid Python code in the editor and clicks the Run button
    Then the user should see output in the console
