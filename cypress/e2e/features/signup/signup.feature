Feature: User Registration

  Scenario: New user successfully creates an account
    Given I am on the registration page
    When I fill in the registration form with valid details
    And I submit the registration form
    Then I should be successfully registered
    And I should be logged in automatically

  Scenario: User attempts to register with existing email
    Given I am on the registration page
    When I fill in the registration form with an existing email
    And I submit the registration form
    Then I should see an error message about existing email

  Scenario: User attempts to register with invalid password
    Given I am on the registration page
    When I fill in the registration form with invalid password
    And I submit the registration form
    Then I should see password validation error messages

  Scenario: User attempts to register with missing required fields
    Given I am on the registration page
    When I submit the registration form without filling required fields
    Then I should see validation error messages for required fields
