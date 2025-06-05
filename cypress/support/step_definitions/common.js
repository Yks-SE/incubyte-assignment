import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../e2e/pageObjects/HomePage";
import { LoginPage } from "../../e2e/pageObjects/LoginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

// Common steps
Given("I am on the homepage", () => {
  cy.visit("/");
  homePage.verifyHomePageLoaded();
});

When('I click on the "Sign In" link', () => {
  homePage.clickSignInLink();
});

Then("I should see the login page", () => {
  loginPage.verifyLoginPageLoaded();
}); 