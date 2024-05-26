/// <reference types="cypress" />

import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the Zero Bank homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I enter {string} into the search box', (searching) => {
    cy.get('#searchTerm').click().type(searching)
    cy.get('#searchTerm').type('{enter}')
})

Then('I should see search results related to bank', () => {
// cy.url().should('include', '/search.html?searchTerm=Bank');
    cy.get('h2').should('exist') // Pastikan elemen <h2> ada di halaman
    cy.get('h2').should('contain', 'Search Results:')
  
})