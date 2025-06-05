Feature: User Login

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I fill in the login form with valid credentials
    Then I should be successfully logged in
