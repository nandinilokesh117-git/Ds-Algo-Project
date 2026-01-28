Feature: DS Algo Home Page functionality for unauthenticated users
  As a new user
  I want to access the DS Algo portal and its home page
  So that I can view available options and receive proper warnings when not logged in

  Background:
    Given the user has browser open

  Scenario: User opens the DS Algo Portal
    When the user enters the correct DS Algo Portal URL
    Then the user should be able to land on DS Algo portal with Get Started button

  Scenario: User accesses the Home page
    Given the user is on the DS Algo Portal
    When the user clicks the "Get Started" button on the landing page
    Then the user should be navigated to the Data Structure Introduction page
    And the page should display "Register" and "Sign in" links

  Scenario: User views the "Data Structures" dropdown options
    Given the user is on the Home page
    When the user clicks the "Data Structures" dropdown on the Home page
    Then the user should be able to see the following options in the dropdown:
      | Arrays |
      | Linked List |
      | Stack |
      | Queue |
      | Tree |
      | Graph |

  Scenario: Error message is displayed when selecting "Data Structures" from the dropdown
    Given the user is on the Home page
    When the user selects "Data Structures" from the dropdown
    Then the user should be able to see a warning message "You are not logged in"

  Scenario: Error message is displayed when selecting "Arrays" from the dropdown
    Given the user is on the Home page
    When the user selects "Arrays" from the dropdown
    Then the user should be able to see a warning message "You are not logged in"

  Scenario: Error message is displayed when clicking "Get Started" for Data Structures - Introduction
    Given the user is on the Home page
    When the user clicks the "Get Started" button for "Data Structures - Introduction"
    Then the user should be able to see a warning message "You are not logged in"

  Scenario: Error message is displayed when clicking "Get Started" for Array
    Given the user is on the Home page
    When the user clicks the "Get Started" button for "Array"
    Then the user should be able to see a warning message "You are not logged in"
