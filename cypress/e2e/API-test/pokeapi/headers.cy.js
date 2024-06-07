describe('Validate Headers', () => {

    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status')
            .should('equal', 200)
    })

    it('Successfully validate body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('have.property', 'name', 'ditto')
        cy.get('@pokemon').its('body').should('have.property', 'id', 132)
     })

})
















//ini juga bisa
// it('Successfully validate body', () => {
//     cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
//     cy.get('@pokemon').its('body').should((body) => {
//         expect(body).to.have.property('name', 'ditto')
//         expect(body).to.have.property('id', 132)
//     })
// })




