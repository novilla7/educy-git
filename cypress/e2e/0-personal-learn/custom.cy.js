/// <reference types="cypress" />

//contoh eduwork
// describe('My First Test', () => {
//     it('Visits the Kitchen Sink', () => {
//         cy.visit('https://example.cypress.io')
//         cy.get('h1').contains('Kitchen Sink')
//         cy.contains('get').click()
//         cy.url().should('include', '/commands/querying')
//


describe('Pay Bills', () => {

    it('Visit in the website', () => { // ini udh di fixture dan command
        cy.fixture("user1").then(user1 => {
        const url_web = user1.website.url_web

        cy.website(url_web)

        cy.get('a').contains('Zero Bank')
        cy.url().should('include', 'login.html')

        })
});


    it('login with valid data', () => { // ini udh fixture dan command
        cy.fixture("user1").then(user1 => {
        const username = user1.user_valid.valid_username
        const password = user1.user_valid.valid_password

        cy.login(username,password)

        cy.get('a').contains('Account Summary').should('contain.text', 'Account Summary');

         });
});

    it('Pay Saved Payee', () => {
        cy.get('a').contains('Pay Bills').click()
        cy.url().should('include', 'bank/pay-bills.html') // mastiin di url itu

        cy.get('a').contains('Pay Saved Payee') // mastiin ada di pay saved payee
        cy.get('h2').should('contain.text', 'Make payments to your saved payees') // mastiin ada test di webnya

        // payee // udah di fixture dan command
        cy.fixture("user1").then(user1 => {
        const selectPayee = user1.Payee.value3 // isinya apple

        cy.get('.control-label').contains('Payee') // ada text Sprint
        cy.contains('Sprint').should('contain.text', 'Sprint')//mastiin ada text sprint

        cy.Pay_Saved1(selectPayee)

        cy.get('select#sp_payee').contains('Apple') //saat mengklik yang dipilih apple
        cy.get('select#sp_payee').should('have.value', 'apple') // memastikan value nya sama dengan di element apple, di elemen valuenya berupa huruf

        })

        // payee // fixture & command
        cy.fixture("user1").then(user1 => {
            const selectAccount = user1.Account.value5

        // Account // udah di fixture dan command
        cy.get('.control-label').contains('Account') // ada text Account
        cy.contains('Savings').should('contain.text', 'Savings') // mastiin ada text account

        cy.Pay_Saved2(selectAccount)

        cy.get('#sp_get_payee_details').click()

        cy.get('select#sp_account').should('have.value', '5') // saat mengklik yang dipilih credit card , element di web valuenya berupa anga 5 dimana credit card no 5
        
        })
    
        // Amount // udah fixture dan command
        cy.fixture("user1").then(user1 => {
        const selectAmount = user1.Amount.value1

         cy.get('.control-label').contains('Amount') // ada text Amount
         cy.get('#sp_amount').clear() // memastikan amount kosong

        
         cy.Pay_Saved3(selectAmount)

         cy.get('#sp_amount').should('have.value', '100') // lalu diisi 100

          })
    
        // Date // udah di fixture dan di command
        cy.fixture("user1").then(user1 => {
        const selectDate = user1.Date.value1

        cy.get('.control-label').contains('Date') // ada text 
        
        cy.get('#sp_date').clear() // memastikan date kosong

        cy.Pay_Saved4(selectDate) // memilih tanggal 7

        cy.get('#sp_date').should('have.value', selectDate) // memastikan tgl yg dipilih ada 

        //pake cara ini juga bisa buat Date
        // cy.get('#sp_date').click() // klik tombol date
        // cy.contains('.ui-datepicker-calendar a', '7').click(); // memilih tanggal 7

        })

        // Description // udah di fixture dan command
        cy.fixture("user1").then(user1 => {
        const selectDescription = user1.Description.value1

        cy.get('.control-label').contains('Description') // ada text Description
        
        cy.Pay_Saved5(selectDescription) // ngambil ke command

        cy.url().should('include', 'bank/pay-bills-saved-payee.html') // memastikan ada di url yg benar
        cy.get('#alert_content span').should('contain', 'The payment was successfully submitted.') // memastikan saat berhasil muncul pesan ini di web
    
        })
})


    it('Add New Pay', () => {
        cy.contains('Add New Payee').should('contain.text', 'Add New Payee') //  memastikan ada text Add new page
        cy.get('a').contains('Add New Payee').click()

        cy.get('h2', { timeout: 20000}).should('contain.text', 'Who are you paying?') // memastikan ada text diwebnya

        // Payee Name // udah di fixture dan command
        cy.fixture("user1").then(user1 => {
        const selectPayeeName = user1.Payee_Name.value1 // isinya Pilla

        cy.get('.control-label').contains('Payee Name') // ada text Payee name
        cy.get('#np_new_payee_name').clear() // memastikan paye name kosong

        cy.New_Payee1(selectPayeeName) // ngambil ke command

        cy.get('#np_new_payee_name').should('have.value', 'Pilla')  // megisi dan memastikan text nya pilla

        })

        // Payee Address // udah di fixture dan command
        cy.fixture("user1").then(user1 => {
        const selectPayeeAddress= user1.Payee_Address.value1 // isinya JL. Kesenian

        cy.get('.control-label').contains('Payee Address') // ada text Payee adress
        cy.get('#np_new_payee_address').clear() // memastikan paye adress kosong

        cy.New_Payee2(selectPayeeAddress)

        cy.get('#np_new_payee_address').should('have.value', 'JL. Kesenian')  // megisi dan memastikan text nya jl.kesenian

        })

       // Account // udah di fixture dan command
        cy.fixture("user1").then(user1 => {
        const fillAccount= user1.Payee_Account.value1 // isinya Credit Card


        cy.get('.control-label').contains('Account') // ada text account
        cy.get('#np_new_payee_account').clear() // memastikan address kosong
        
        cy.New_Payee3(fillAccount)

        cy.get('#np_new_payee_account').should('have.value', 'Credit Cart')  // megisi dan memastikan text nya Credit Cart

        })

        // Payee Details // udah di fixture dan command
        cy.fixture("user1").then(user1 => {
        const fillPayeeDetail= user1.Payee_Detail.value1 // isinya Pilla

        cy.get('.control-label').contains('Payee Details') // ada text paye details
        cy.get('#np_new_payee_details').clear() // memastikan  paye detail kosong

        cy.New_Payee4(fillPayeeDetail)

        // cy.get('#np_new_payee_details').should('have.value', 'pembayaran sekolah') // megisi dan memastikan text nya pembayaran sekolah
        
        cy.get('#alert_content', { timeout: 10000 })
        cy.get('#alert_content').should('contain', 'The new payee Pilla was successfully created.')

    })


});


    it('Purchase Foreign Currency Cash', () => {
        cy.contains('Purchase Foreign Currency').should('contain.text', 'Purchase Foreign Currency') // memastikan ada text di web
        cy.get('a').contains('Purchase Foreign Currency').click()

        cy.get('h2', { timeout: 20000}).should('contain.text','Purchase foreign currency cash') // memastikan ada text nya di web

        // Currency // udah di fixture dan command
        cy.fixture("user1").then(user1 => {
        const selectCurrency= user1.Currency.value9 // isinya JPY

        cy.get('.control-label').contains('Currency') // ada text currency
        cy.contains('Select One').should('contain.text', 'Select One') // ada textselect one dan memastikannya
        
        cy.Purchase1(selectCurrency)

        cy.get('#sp_sell_rate').should('not.be.empty')

        cy.get('.help-block').should('contain.text', 'Today\'s Sell Rate:'); // memastikan ada text tersebut di web ( tambahan : kalo ada tanda ' maka ganti dengan \ )

    })

        // Amount // udah di fixure
        cy.fixture("user1").then(user1 => {
        const fillAmount2 = user1.Amount2.value1 // isinya 100


        cy.get('.control-label').contains('Amount') // ada text amount
        cy.get('#pc_amount').clear() // memastikan amount kosong


        cy.Purchase2(fillAmount2)  // dari command

        cy.get('#pc_amount').should('have.value', '100') // memastikan isi text-nya 100

    })


        // Select radio inline
        cy.fixture("user1").then(user1 => {
        const selectRadio = user1.Radio_Button.USD // isinya USD

        // Select radio button
        cy.get(selectRadio).click() // ada dua pilihan , yg dipilih USD
        
        cy.get(selectRadio).should('be.checked') // memastikan sudah di klik button

        // klik tombol calculate
        cy.get('#pc_calculate_costs').click() 

        // Conversion Amount
        cy.get('.control-label').contains('Conversion Amount') // ada text conversion amount
        cy.get('#pc_conversion_amount').should('not.be.empty') // memastikan elemennya ada

        // klik tombol purchase
        cy.get('#purchase_cash').contains('Purchase').click()
        cy.get('#alert_content').should('contain', 'Foreign currency cash was successfully purchased.') // memastikan saat berhasil muncul pesan ini di web

    })
})

});

