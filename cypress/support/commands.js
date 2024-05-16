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

Cypress.Commands.add('website', (url_web) => {
    cy.visit(url_web)
})

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)

    cy.get('#user_remember_me').check()
    cy.get('#user_remember_me').should('be.checked')

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('Pay_Saved1', (selectPayee) => {
    cy.get('select#sp_payee').select(selectPayee)
})

Cypress.Commands.add('Pay_Saved2', (selectAccount) => {
    cy.get('select#sp_account').select(selectAccount)
})

Cypress.Commands.add('Pay_Saved3', (selectAmount) => {
    cy.get('input#sp_amount').type(selectAmount)
})

Cypress.Commands.add('Pay_Saved4', (selectDate) => {
    cy.get('#sp_date').click().type(`${selectDate}{enter}`) // tanda kutip
})

Cypress.Commands.add('Pay_Saved5', (selectDescription) => {
    cy.get('#sp_description').clear().type(selectDescription).should('have.value', 'pembayaran sekolah') // mengisi dan memastikan ada pembayaran sekolah
    cy.get('#pay_saved_payees').contains('Pay').click() // klik tombol pay
})

/////

Cypress.Commands.add('New_Payee1', (selectPayeeName) => {
    cy.get('input#np_new_payee_name').type(selectPayeeName)
})

Cypress.Commands.add('New_Payee2', (selectPayeeAddress) => {
    cy.get('#np_new_payee_address').type(selectPayeeAddress)
})

Cypress.Commands.add('New_Payee3', (fillAccount) => {
    cy.get('input#np_new_payee_account').type(fillAccount)
})

Cypress.Commands.add('New_Payee4', (fillPayeeDetail) => {
    cy.get('#np_new_payee_details').type(fillPayeeDetail).should('have.value', 'pembayaran sekolah') // megisi dan memastikan text nya pembayaran sekolah
    cy.get('#add_new_payee').should('have.value', 'Add').click()
})

/////

Cypress.Commands.add('Purchase1', (selectCurrency) => {
    cy.get('#pc_currency').select(selectCurrency); // memilih japan yen
})

Cypress.Commands.add('Purchase2', (fillAmount2) => {
    cy.get('#pc_amount').type(fillAmount2)
})

Cypress.Commands.add('Purchase3', (selectRadio) => {
    cy.get(selectRadio).click()
})