/// <reference types="cypress" />

describe('Navbar Test', () =>{
    before(() => {
    cy.visit_Homepage()

})

it('Should display online banking content', () => {
    cy.navigate_OnlineBanking()
})

it('Should display feedback content', () => {
    cy.navigate_Feedback()
})

it('Should display homepage content', () => {
    cy.navigate_Homepage()
})

})