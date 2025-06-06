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

// Import commands.js using ES2015 syntax:
import './commands'

// Ignora erros de JavaScript do site que estamos testando
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros relacionados ao 'await' e outros erros do site
  if (err.message.includes('await is only valid') || 
      err.message.includes('SyntaxError') ||
      err.message.includes('Cannot read properties')) {
    return false;
  }
  // Para outros erros, deixa o Cypress decidir
  return true;
});

// Comando melhorado para aceitar cookies
Cypress.Commands.add('acceptCookies', () => {
  // Não faz nada se não encontrar elementos visíveis
  cy.get('body').then(($body) => {
    const visibleCookies = $body.find('[class*="cookie"]:visible, [id*="cookie"]:visible, button:contains("Aceitar"):visible');
    if (visibleCookies.length > 0) {
      cy.wrap(visibleCookies.first()).click({ force: true });
    }
  });
});

// Comando para fechar modais
Cypress.Commands.add('closeModals', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.modal:visible, #modal-tutorial:visible').length > 0) {
      cy.get('.modal .close, .modal button:contains("×"), button:contains("Fechar")')
        .first()
        .click({ force: true });
    }
  });
});