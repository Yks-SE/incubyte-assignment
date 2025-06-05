import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../e2e/pageObjects/LoginPage";
import { RegistrationPage } from "../../e2e/pageObjects/RegistrationPage";

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();

Then('I should see the "Create an Account" link', () => {
  loginPage.verifyCreateAccountLink();
});

When('I click on the "Create an Account" link', () => {
  loginPage.clickCreateAccountLink();
});

Then("I should see the registration form", () => {
  registrationPage.verifyRegistrationForm();
}); 