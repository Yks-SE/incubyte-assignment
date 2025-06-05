import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../../e2e/pageObjects/SignupPage";

const signupPage = new SignupPage();

Given("I am on the registration page", () => {
    signupPage.visit();
});

When("I fill in the registration form with valid details", () => {
    const timestamp = new Date().getTime();
    const email = `test${timestamp}@example.com`;
    signupPage.fillRegistrationForm(
        'John',
        'Doe',
        email,
        'Test@123456'
    );
});

When("I fill in the registration form with an existing email", () => {
    signupPage.fillRegistrationForm(
        'John',
        'Doe',
        'test@example.com',
        'Test@123456'
    );
});

When("I fill in the registration form with invalid password", () => {
    signupPage.fillRegistrationForm(
        'John',
        'Doe',
        'test@example.com',
        'weak'
    );
});

When("I submit the registration form without filling required fields", () => {
    signupPage.submitForm();
});

When("I submit the registration form", () => {
    signupPage.submitForm();
});

Then("I should be successfully registered", () => {
    signupPage.validateSuccessMessage();
});

Then("I should be logged in automatically", () => {
    cy.url().should('include', '/customer/account');
});

Then("I should see an error message about existing email", () => {
    signupPage.validateExistingEmailError();
});

Then("I should see password validation error messages", () => {
    signupPage.validatePasswordStrength();
});

Then("I should see validation error messages for required fields", () => {
    signupPage.validateRequiredFields();
}); 