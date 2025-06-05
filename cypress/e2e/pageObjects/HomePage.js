export class HomePage {
  elements = {
    signInLink: () => cy.get('a[href*="customer/account/login"]'),
    pageLoader: () => cy.get('.page-loader'),
  };

  verifyHomePageLoaded() {
    // Wait for page loader to disappear
    this.elements.pageLoader().should('not.exist');
    
    // Verify we're on the homepage
    cy.url().should('include', '/');
    
    // Wait for the sign-in link to be visible
    this.elements.signInLink().should('be.visible');
  }

  clickSignInLink() {
    // Wait for the link to be clickable
    this.elements.signInLink().first().should('be.visible').click();
  }
} 