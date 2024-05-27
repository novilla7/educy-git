/// <reference types="cypress" />

import LoginPage from "../pageObject/loginPage";
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor");

Given('I open the Zero Bank login page', () => {
    LoginPage.visit();
  });
  
  When('I submit login with valid credentials', () => {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIn();
  });
  
  Then('I should see the account summary page', () => {
    LoginPage.succesfull_Login();
  });