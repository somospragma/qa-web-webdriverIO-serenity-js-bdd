@Login
Feature: Login functionality

  @SuccessfulLogin
  Scenario: Successful login with valid credentials
    Given Jhon I am on the login page
    When he I log in with valid username "tomsmith" and password "SuperSecretPassword!"
    Then he I should see the "You logged into a secure area!" page

  @FailedLogin
  Scenario: Failed login with invalid credentials
    Given Jhon I am on the login page
    When he I log in with invalid username "invaliduser" and password "wrongpassword"
    Then he I should see an error message "Your username is invalid! ×"
