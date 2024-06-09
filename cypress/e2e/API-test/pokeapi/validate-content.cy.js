/// <reference types="cypress" />

describe('Validate Content', () => {

    it('Succeessfully validate data', () => {
        var ability = {
            "name" : "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        }
    

    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/').then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.eq(ability.name)
        })
    })

    
})







// describe('Validate content contoh eduwork', () => {

//     it('Validate Content', () => {
//         cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
//         cy.get('@pokemon').its('body').should('include', {name: "ditto"})
//     })

// })