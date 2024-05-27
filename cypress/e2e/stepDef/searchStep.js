/// <reference types="cypress" />

import SearchPage from "../pageObject/searchPage";
const { Given, When, Then, } = require ("@badeball/cypress-cucumber-preprocessor");

Given('I visit the Zero Bank homepage', () => {
    SearchPage.visit();
})

When('I enter {string} into the search box', () => {
    SearchPage.search('Bank')
    SearchPage.enter();
})

Then('I should see search results related to bank', () => {
// cy.url().should('include', '/search.html?searchTerm=Bank');
// cy.get('h2').should('exist') // Pastikan elemen <h2> ada di halaman
    SearchPage.succesfull_Search();
})