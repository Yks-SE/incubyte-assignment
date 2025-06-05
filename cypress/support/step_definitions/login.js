import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../e2e/pageObjects/LoginPage";

const loginPage = new LoginPage();

Given("I am on the login page", () => {
  cy.visit('/customer/account/login');
  cy.url().should('include', '/customer/account/login');
});

When("I fill in the login form with valid credentials", () => {
  // Using environment variables for credentials
  const email = Cypress.env('TEST_USER_EMAIL');
  const password = Cypress.env('TEST_USER_PASSWORD');
  
  // Clear any existing values and type credentials
  loginPage.elements.emailInput().clear().type(email);
  loginPage.elements.passwordInput().clear().type(password);
  
  // Click the sign-in button
  loginPage.elements.signInButton().click();
});

Then("I should be successfully logged in", () => {
  // Wait for navigation and verify we're on the account page
  cy.url().should('include', '/customer/account');
  loginPage.validateLogin();
});

When("I enter invalid credentials", () => {
  loginPage.login('invalid@example.com', 'wrongpassword');
});

Then("I should see an error message", () => {
  loginPage.validateLoginError();
}); 