// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false para impedir que o Cypress

  return false
})

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visitarUrl();
  cy.wait(5000);
});

// Import commands.js using ES2015 syntax:
import './commands'
import './calcularFrete'

// Alternatively you can use CommonJS syntax:
// require('./commands')