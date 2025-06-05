describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/');
  });

  it('should successfully login with valid credentials', () => {
    cy.get('#email').type('test@example.com');
    cy.get('#pass').type('Test@123');
    cy.get('#send2').click();
    cy.url().should('include', '/customer/account/');
  });

  it('should show error for invalid credentials', () => {
    cy.get('#email').type('invalid@example.com');
    cy.get('#pass').type('wrongpassword');
    cy.get('#send2').click();
    cy.get('.message-error').should('be.visible');
  });

  it('should validate required fields', () => {
    cy.get('#send2').click();
    cy.get('#email-error').should('be.visible');
    cy.get('#pass-error').should('be.visible');
  });
}); 