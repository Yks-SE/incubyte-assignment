describe('Signup Flow', () => {
  beforeEach(() => {
    cy.visit('/customer/account/create/');
  });

  it('should successfully register a new user', () => {
    const email = `test${Date.now()}@example.com`;
    cy.get('#firstname').type('Test');
    cy.get('#lastname').type('User');
    cy.get('#email_address').type(email);
    cy.get('#password').type('Test@123');
    cy.get('#password-confirmation').type('Test@123');
    cy.get('button[title="Create an Account"]').click();
    cy.url().should('include', '/customer/account/');
  });

  it('should show error for existing email', () => {
    cy.get('#firstname').type('Test');
    cy.get('#lastname').type('User');
    cy.get('#email_address').type('existing@example.com');
    cy.get('#password').type('Test@123');
    cy.get('#password-confirmation').type('Test@123');
    cy.get('button[title="Create an Account"]').click();
    cy.get('.message-error').should('be.visible');
  });

  it('should validate required fields', () => {
    cy.get('button[title="Create an Account"]').click();
    cy.get('#firstname-error').should('be.visible');
    cy.get('#lastname-error').should('be.visible');
    cy.get('#email_address-error').should('be.visible');
    cy.get('#password-error').should('be.visible');
  });
}); 