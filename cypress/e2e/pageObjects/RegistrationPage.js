export class RegistrationPage {
  elements = {
    registrationForm: () => cy.get('#form-validate'),
  };

  verifyRegistrationForm() {
    cy.url().should('include', '/customer/account/create');
    this.elements.registrationForm().should('be.visible');
  }
} 