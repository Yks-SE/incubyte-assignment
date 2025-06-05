export class SignupPage {
  elements = {
    firstNameInput: () => cy.get('#firstname'),
    lastNameInput: () => cy.get('#lastname'),
    emailInput: () => cy.get('#email_address'),
    passwordInput: () => cy.get('#password'),
    confirmPasswordInput: () => cy.get('#password-confirmation'),
    createAccountButton: () => cy.get('button[title="Create an Account"]'),
    firstNameError: () => cy.get('#firstname-error'),
    lastNameError: () => cy.get('#lastname-error'),
    emailError: () => cy.get('#email_address-error'),
    passwordError: () => cy.get('#password-error'),
    confirmPasswordError: () => cy.get('#password-confirmation-error'),
    successMessage: () => cy.get('.message-success'),
    signInLink: () => cy.get('a[href*="customer/account/login"]'),
    requiredFieldError: () => cy.get('.mage-error'),
    emailFormatError: () => cy.contains('Please enter a valid email address'),
    passwordStrengthError: () => cy.contains('Minimum length of this field must be equal or greater than 8 symbols.'),
    duplicateEmailError: () => cy.contains('There is already an account with this email address'),
    existingEmailError: () => cy.contains('There is already an account with this email address'),
  };

  visit() {
    cy.visit('/customer/account/create/');
  }

  fillRegistrationForm(firstName, lastName, email, password) {
    this.elements.firstNameInput().clear().type(firstName);
    this.elements.lastNameInput().clear().type(lastName);
    this.elements.emailInput().clear().type(email);
    this.elements.passwordInput().clear().type(password);
    this.elements.confirmPasswordInput().clear().type(password);
  }

  submitForm() {
    this.elements.createAccountButton().click();
  }

  validateRequiredFields() {
    this.elements.firstNameError().should('be.visible');
    this.elements.lastNameError().should('be.visible');
    this.elements.emailError().should('be.visible');
    this.elements.passwordError().should('be.visible');
    this.elements.confirmPasswordError().should('be.visible');
  }

  validateSuccessMessage() {
    this.elements.successMessage().should('be.visible');
  }

  validateExistingEmailError() {
    cy.contains('There is already an account with this email address').should('be.visible');
  }

  validatePasswordStrength() {
    this.elements.passwordError().should('be.visible');
  }

  validateSignup() {
    cy.url().should('include', '/customer/account/');
    cy.get('.message-success.success.message').should('be.visible');
  }

  validateWelcomeMessage() {
    this.elements.successMessage().should('be.visible');
  }

  validateRequiredFieldsError() {
    this.elements.requiredFieldError().should('be.visible');
  }

  validateEmailFormat() {
    this.elements.emailFormatError().should('be.visible');
  }

  validateWeakPassword() {
    this.elements.passwordStrengthError().should('be.visible');
  }
}

export default SignupPage; 