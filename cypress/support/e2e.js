// cypress/support/e2e.js
// This file is loaded before your test files to configure global behaviors or custom commands.
// You can leave it empty or add commands later if needed.

afterEach(() => {
  cy.screenshot({ capture: 'runner' });
});