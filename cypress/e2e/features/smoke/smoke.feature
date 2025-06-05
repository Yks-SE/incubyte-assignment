Feature: Smoke Test
  As a user
  I want to verify basic website functionality
  So that I can ensure the core features are working

  @smoke
  Scenario: Verify basic website functionality
    Given I am on the homepage
    When I click on the "Sign In" link
    Then I should see the login page
    And I should see the "Create an Account" link
    When I click on the "Create an Account" link
    Then I should see the registration form 