Feature: DS Algo Sign In and Sign Out functionality

  Background:
    Given The user is on the DS Algo portal homepage
    When The user clicks the "Get Started" button
    And The user navigates to the Sign in page

  Scenario: Verify that user receives error message for all empty fields during Login
    When The user clicks the login button without entering username and password
    Then The error message "Please fill out this field." should appear

  Scenario: Verify that user receives error message for empty Password field during Login
    When The user clicks the login button after entering only the username
    Then The error message "Please fill out this field." should appear below the Password textbox

  Scenario: Verify that user receives error message for empty Username field during Login
    When The user clicks the login button after entering only the password
    Then The error message "Please fill out this field." should appear below the Username textbox

  Scenario: Verify that user receives error message for invalid Username field during Login
    When The user clicks the login button after entering an invalid username and valid password
    Then The user should see the error message "Invalid username and password"

  Scenario: Verify that user is able to land on Home page after entering valid Username and Password fields
    When The user clicks the login button after entering valid username and valid password
    Then The user should land on the Data Structure Home Page with message "You are logged in"

  Scenario: Verify that user is able to sign out successfully
    Given The user is on the Home page after Sign in
    When The user clicks the "Sign out" button
    Then The user should be redirected to the home page with message "Logged out successfully"
