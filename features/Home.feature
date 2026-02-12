
Feature: Home page access restrictions without login

  Background:
    Given the user launches the DS Algo application
    When the user navigates to the Home page

    # When the user clicks on the Get Started button
    # Then the Data Structure Introduction page should be displayed
    #  And the "register" and "login" links should be visible   

  Scenario: Verify error message for all Data Structure dropdown options without login
    When the user selects all Data Structure options from the dropdown and able to see the all options
    Then the error message "You are not logged in" should be displayed

  Scenario: Verify error message for all Get Started sections without login
    When the user clicks Get Started for all Data Structure sections
    Then the error message "You are not logged in" should be displayed

    