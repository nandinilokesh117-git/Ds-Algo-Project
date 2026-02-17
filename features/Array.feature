Feature:Verify all the features of the Array module are working as expected

Scenario: Verify that user is able to navigate to "Array" data structure page
Given The user is in the Home page 
When The user signs in
When  The user clicks the Getting Started button in Array Panel 
Then The user should be redirected to "Array" data structure page
When The user clicks "Arrays in Python" link
Then The user should be redirected to "Arrays in Python" page


When The user clicks Arrays using List link
Then The user should be redirected to "Arrays using List" page


When The user clicks Basic operations in List link
Then The user should be redirected to "Basic operations in List" page

When The user clicks Applications of Array link
Then  The user should be redirected to "Applications of Array" page



# Scenario:Verify that user is able to navigate to "try Editor" page from "Arrays in Python page"
 Given The user is on the Arrays in Python page
When The user clicks "Try here" button in "Arrays in Python" page
Then The user should be connected to "try Editor" page with a text editor and a "Run" button

Given The user is on the "Arrays using List"page
When The user clicks "Try here" button in "Arrays using List" page
Then The user should be navigated to "try Editor" page with a text editor and a Run button


Given The user is on the Basic operations in List page
When The user clicks Try here button in Basic operations in List page
Then The user should be directed to "try Editor" page with a text editor and a Run button

Given The user is on the Applications of Array page
When The user clicks Try here button in Applications of Array page
Then The user should be redirected to try Editor page with a text editor and a Run button


# Scenario: Try editor page
# Given The user is in the tryEditor page
# When The user clicks the Run Button without entering the code in the Editor
# Then The user should able to see an error message in alert window

When the user enters invalid code in the Editor and clicks the Run button
Then the user should be able to see an error message in the alert window



When The user enters valid code in the Editor and clicks the Run button
Then the user should able to see the output of the code in the output section
