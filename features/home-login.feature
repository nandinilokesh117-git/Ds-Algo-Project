Feature: testing ds-algo portal home page functionalities without sign in

      Scenario: User opens the DS Algo portal
        Given the user has opened the browser
        When the user navigates to the DS Algo portal URL
        Then the user should land on the DS Algo portal with the "Get Started" button visible

        When the user clicks on the Get Started button
        Then the Data Structure Introduction page should be displayed
        And the "register" and "login" links should be visible       

        When the user clicks the data structures dropdown
        Then the user should able to see 6 options "Arrays,Linked,List,Stack,Queue,Tree,Graph" in dropdown menu

        When the user clicks on the "Get started" button of "<options>" on the homepage without Sign in
        Then the user should be able to see an warning message "You are not logged in "





