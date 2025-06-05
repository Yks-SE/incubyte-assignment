export class LoginPage {
  elements = {
    createAccountLink: () => cy.get('a[href*="customer/account/create"]'),
    loginForm: () => cy.get('#login-form'),
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#pass'),
    signInButton: () => cy.get('#send2'),
    pageTitle: () => cy.get('.page-title'),
    errorMessage: () => cy.get('.message-error'),
    welcomeMessage: () => cy.get('.greet.welcome'),
    accountDropdown: () => cy.get('.customer-welcome'),
    accountMenu: () => cy.get('.customer-menu'),
  };

  goToLogin() {
    cy.visit('/customer/account/login/');
    this.elements.loginForm().should('be.visible');
  }

  verifyLoginPageLoaded() {
    cy.url().should('include', '/customer/account/login');
    this.elements.loginForm().should('be.visible');
  }

  verifyCreateAccountLink() {
    this.elements.createAccountLink().should('be.visible');
  }

  clickCreateAccountLink() {
    this.elements.createAccountLink().first().should('be.visible').click();
  }

  login(email, password) {
    this.elements.emailInput().clear().type(email);
    this.elements.passwordInput().clear().type(password);
    this.elements.signInButton().click();
  }

  validateLogin() {
    // Wait for navigation to complete
    cy.url().should('not.include', '/customer/account/login');
    
    // Check for either welcome message or account dropdown
    cy.get('body').then(($body) => {
      if ($body.find('.greet.welcome').length > 0) {
        cy.get('.greet.welcome').should('be.visible');
      } else if ($body.find('.page-title').length > 0) {
        cy.get('.page-title').should('contain', 'My Account');
      } else if ($body.find('.customer-welcome').length > 0) {
        cy.get('.customer-welcome').should('be.visible');
        // Click the dropdown to show the menu
        cy.get('.customer-welcome').click();
        cy.get('.customer-menu').should('be.visible');
        cy.get('.customer-menu').contains('Sign Out').should('be.visible');
      } else {
        throw new Error('Could not find login success indicators');
      }
    });
  }

  validateLoginError() {
    this.elements.errorMessage().should('be.visible');
  }
} 