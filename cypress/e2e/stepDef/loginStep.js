/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open the Zero Bank login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
  });
  
  When('I submit login with valid credentials', () => {
    cy.wait(500);
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.get('input[type="submit"]').click();
  });
  
  Then('I should see the account summary', () => {
    cy.get('#account_summary_tab').should('be.visible');
  });