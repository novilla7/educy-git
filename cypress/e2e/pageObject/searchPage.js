const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH = '#searchTerm';
const ENTER = '#searchTerm';
const ASSERT_SEARCH = 'h2';


class SearchPage{
    static visit(){
        cy.visit(URL);
    }

    static search(fill){
        cy.get(SEARCH).type(fill);
    }

    static enter(){
        cy.get(ENTER).type('{enter}')
    }  
    
    static succesfull_Search(){
        cy.get(ASSERT_SEARCH).should('contain', 'Search Results:')
    }
}

export default SearchPage;