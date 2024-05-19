// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visit_Homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

Cypress.Commands.add('navigate_OnlineBanking', () => {
    cy.get('#onlineBankingMenu').click()
    cy.url().should('include', 'online-banking.html')
    cy.get('h1').should('contain.text', 'Online Banking')
})

Cypress.Commands.add('navigate_Feedback', () => {
    cy.get('#feedback').click()
    cy.url().should('include', 'feedback.html')
    cy.get('#feedback-title').should('contain.text', 'Feedback')
})

Cypress.Commands.add('navigate_Homepage', () => {
    cy.get('.brand').should('contain.text', 'Zero Bank').click()
    cy.url().should('include', 'index.html')
    cy.get('h4').should('contain.text', 'Online Banking')
})