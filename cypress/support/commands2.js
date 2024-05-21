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

Cypress.Commands.add('visit_Homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

Cypress.Commands.add('visit_SD', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'saucedemo.com/')
})

Cypress.Commands.add('login_valid', (username_demo, password_demo) => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username_demo)
    cy.get('#password').clear()
    cy.get('#password').type(password_demo)

    cy.get('#login-button').click()
})

// navbar punya zero demo

Cypress.Commands.add('navigate_OnlineBanking', () => {
    cy.get('#onlineBankingMenu').click()
    cy.url().should('include', 'online-banking.html')
    cy.get('h1').should('contain.text', 'Online Banking')
})

Cypress.Commands.add('navigate_Feedback', () => {
    cy.get('#feedback').click()
    cy.url().should('include', 'feedback.html')
    cy.get('#feedback-title').should('contain.text', 'Feedback')
})

Cypress.Commands.add('navigate_Homepage', () => {
    cy.get('.brand').should('contain.text', 'Zero Bank').click()
    cy.url().should('include', 'index.html')
    cy.get('h4').should('contain.text', 'Online Banking')
})

// login/logout test case dari saucedemo

Cypress.Commands.add('invalid_UP', () => {
    cy.get('#user-name').type('admin')
    cy.get('#password').type('admin')

    cy.get('#login-button').click()
})

Cypress.Commands.add('invalid_P', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('admin')

    cy.get('#login-button').click()
})

Cypress.Commands.add('invalid_U', () => {
    cy.get('#user-name').type('admin')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()
})

Cypress.Commands.add('without_UP', () => {
    cy.get('#user-name').should('be.empty')
    cy.get('#password').should('be.empty')

    cy.get('#login-button').click()
})

/// Add to shopping cart testcase dari saucedemo

Cypress.Commands.add('add1_item', () => {
    cy.get('.inventory_item_img').should('be.visible') // foto item
    cy.get('.inventory_item_name').should('be.visible') //nama item
    cy.get('.inventory_item_desc').should('be.visible') // deskripsi item
    cy.get('.inventory_item_price').should('be.visible') // harga item

    cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart').click()
    cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove');
    
    cy.get('.shopping_cart_link').should('contain', '1').click()

    cy.get('.cart_quantity').should('be.visible')
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_desc').should('be.visible')
    cy.get('.inventory_item_price').should('be.visible')
})

Cypress.Commands.add('add_multiple', () => {
    cy.get('.inventory_item_img').should('be.visible') // foto item
    cy.get('.inventory_item_name').should('be.visible') //nama item
    cy.get('.inventory_item_desc').should('be.visible') // deskripsi item
    cy.get('.inventory_item_price').should('be.visible') // harga item

    cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').should('have.text', 'Add to cart').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').should('have.text', 'Add to cart').click()

    cy.get('.shopping_cart_link').should('contain', '3').click()

    cy.get('.cart_quantity').should('be.visible')
    cy.get('.inventory_item_name').should('be.visible')
    cy.get('.inventory_item_desc').should('be.visible')
    cy.get('.inventory_item_price').should('be.visible')
})

///// Remove item testcase dari saucedemo

Cypress.Commands.add('remove_item_HP', () => {
    cy.get('.inventory_item_img').should('be.visible') // foto item // add item
    cy.get('.inventory_item_name').should('be.visible') //nama item
    cy.get('.inventory_item_desc').should('be.visible') // deskripsi item
    cy.get('.inventory_item_price').should('be.visible') // harga item
    
    cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart').click()
    
    cy.get('.shopping_cart_link').should('contain', '1')
    
    cy.get('#remove-sauce-labs-backpack').should('contain.text', 'Remove').click()
    cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart')
})

Cypress.Commands.add('remove_item_SC', () => {
    cy.get('.inventory_item_img').should('be.visible') // foto item // add item
    cy.get('.inventory_item_name').should('be.visible') //nama item
    cy.get('.inventory_item_desc').should('be.visible') // deskripsi item
    cy.get('.inventory_item_price').should('be.visible') // harga item

    cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart').click()

    cy.get('.shopping_cart_link').should('contain', '1').click()
    cy.url().should('include', '/cart.html')

    cy.get('#remove-sauce-labs-backpack').should('contain.text', 'Remove').click()

    // Verifikasi elemen terkait dengan item yang dihapus tidak ada dalam DOM
    cy.get('.inventory_item_img').should('not.exist') // Foto item
    cy.get('.inventory_item_name').should('not.exist') // Nama item
    cy.get('.inventory_item_desc').should('not.exist') // Deskripsi item
    cy.get('.inventory_item_price').should('not.exist') // Harga item
    
})


///// Filter testcase dari saucedemo

Cypress.Commands.add('filter_item', () => {
    // cy.get('.product_sort_container').click()
    cy.get('.product_sort_container').select('Price (low to high)')

    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Onesie')

    cy.get('.inventory_item_img').should('be.visible') // foto item
    cy.get('.inventory_item_name').should('be.visible') //nama item
    cy.get('.inventory_item_desc').should('be.visible') // deskripsi item
    cy.get('.inventory_item_price').should('be.visible') // harga item
    cy.get('#add-to-cart-sauce-labs-onesie').should('have.text', 'Add to cart')
})


////// Checkout item testcase dari saucedemo

Cypress.Commands.add('checkout_item', () => {
    cy.get('.inventory_item_img').should('be.visible') // foto item
    cy.get('.inventory_item_name').should('be.visible') //nama item
    cy.get('.inventory_item_desc').should('be.visible') // deskripsi item
    cy.get('.inventory_item_price').should('be.visible') // harga item

    cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart').click()

    cy.get('.shopping_cart_link').should('contain', '1').click()
    cy.url().should('include', '/cart.html')

    cy.get('.cart_quantity').should('be.visible')
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_desc').should('be.visible')
    cy.get('.inventory_item_price').should('be.visible')

    cy.get('#checkout').should('contain.text', 'Checkout').click()
    cy.url().should('include', '/checkout-step-one.html')

    cy.get('.title').should('have.text', 'Checkout: Your Information')

    cy.get('#first-name').clear()
    cy.get('#first-name').type('Pilla')
    cy.get('#last-name').clear()
    cy.get('#last-name').type('Nopilla')
    cy.get('#postal-code').clear()
    cy.get('#postal-code').type('12345')

    cy.get('#continue').should('have.value', 'Continue').click()
    cy.url().should('include', '/checkout-step-two.html')

    cy.get('.cart_quantity').should('have.text', '1') // jumlah item
    cy.get('.inventory_item_name').should('be.visible') //nama item
    cy.get('.inventory_item_desc').should('be.visible') // deskripsi item
    cy.get('.inventory_item_price').should('be.visible') // harga item

    cy.get('.summary_info_label').should('contain.text', 'Payment Information:')
    cy.get('.summary_value_label').should('be.visible')

    cy.get('.summary_info_label').should('contain.text', 'Shipping Information:')
    cy.get('.summary_value_label').should('be.visible')

    cy.get('.summary_info_label').should('contain.text', 'Price Total')
    cy.get('.summary_subtotal_label').should('be.visible')
    cy.get('.summary_tax_label').should('be.visible')

    cy.get('.summary_total_label').should('be.visible')

    cy.get('#finish').should('contain.text', 'Finish').click()
    cy.url().should('include', '/checkout-complete.html')
})

