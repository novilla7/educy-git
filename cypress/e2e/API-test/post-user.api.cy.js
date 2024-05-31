describe('Create New User', () => {

    it('Add a new user', () => {
        var user = {
            "name": "John",
            "job": "Leader"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201) // assertion
            expect(response.body.name).equal(user.name); // assertion
            expect(response.body.job).equal(user.job); // assertion
    });
    });
 });
