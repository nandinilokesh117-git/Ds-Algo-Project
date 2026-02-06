Feature: User Registration functionality
  As a new user
  I want to register in the DS Algo portal
  So that I can create an account and access the application

  Scenario:
    Given the user is on the Home page

    When the user clicks the Register link on the Home page
    Then the user navigates to the Register form

    When the user clicks the Register button with all fields empty
    Then the error Please fill out this field. shows under the Username box

    When the user clicks the Register button after entering password and password confirmation with the username field empty
    Then the error Please fill out this field. shows under the Username box1

    When the user clicks the Register button after entering username and password with the password confirmation field empty
    Then the error Please fill out this field. shows under the password confirmation box

    When the user clicks the Register button after entering a username containing space characters and invalid symbols other than digits and @/./+/-/_
    Then the error Please fill out this field. shows under the Password box

    When the user clicks the Register button after entering username and mismatched passwords in the password and password confirmation fields
    Then the user sees the warning password_mismatch: The two password fields didn’t match.

    When the user clicks the Register button after entering valid username, password, and password confirmation in their respective fields
    Then the user goes to the DS Algo Home Page with the message New Account Created. You are logged in as <ID>

