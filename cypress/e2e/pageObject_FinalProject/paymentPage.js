const base_url = 'https://demo.midtrans.com/';

// background
class visit_homepage{
    static visit_homepage(){
        cy.visit(base_url)
        cy.url().should('include', 'demo.midtrans.com/')
    }
}

// virtual account bca
class payment{
    static click_buynow(){
        cy.contains('a', 'BUY NOW').click()
    }

    static verify_paymentdetail(){
        cy.contains('span','Shopping Cart').should('be.visible')
    }

    static fill_midtransPillow(qty){
        cy.get('[value="20000"]').type(qty)
    }

    static fill_name(name){
        if(name){
            cy.get('[value="Budi"]').click()
            cy.get('[value="Budi"]').clear().type(name)
        }
    }

    static fill_email(email){
        if(email){
            cy.get('[value="budi@utomo.com"]').click().clear().type(email)
        }
    }

    static fill_phone(phone){
        if(phone){
            cy.get('[value="081808466410"]').click().clear().type(phone)
        }
    }

    static fill_city(city){
        if(city){
            cy.get('[value="Jakarta"]').click().clear().type(city)          
        }
    }

    static fill_address(address){
        if(address){
            cy.get('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]').click().clear().type(address)
        }
    }

    static fill_postalcode(postalcode){
        if(postalcode){
            cy.get('[value="10220"]').click().clear().type(postalcode)
        }
    }

    static click_checkout(){
        cy.get('.cart-checkout').click()

    }

    static error_message(error_message){
        cy.contains('span', 'Sorry, something went wrong.').should('have.text', error_message)
        cy.screenshot('error_message')
    }

    // valid
    // va bca
    static select_method_va_bca(){
        cy.wait(2000);
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').contains('Virtual account').should('be.visible')
        cy.iframe('#snap-midtrans').find('span').contains('Virtual account').scrollIntoView().should('be.visible').click();
        cy.iframe('#snap-midtrans').find('[href="#/bank-transfer/bca-va"]').should('be.visible').click();
    }

    static copy_va_bca(){
        cy.iframe('#snap-midtrans').find('[class="float-right clickable copy"]').should('be.visible').click();
        cy.screenshot('copy_va_bca')
    }


   // credit debit cart valid
   static select_method_creditcard(){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').contains('Credit/debit card').should('be.visible')
        cy.iframe('#snap-midtrans').find('div').contains('Credit/debit card').should('be.visible').click();
    }

    static fill_card_name(card_number){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('#snap-midtrans').find('input[placeholder="1234 1234 1234 1234"]').click().clear().type(card_number);

    }

    static fill_exp_date(exp_date){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('#snap-midtrans').find('#card-expiry').click().clear().type(exp_date);

    }

    static fill_cvv(cvv){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('#snap-midtrans').find('#card-cvv').scrollIntoView().click().clear().type(cvv);

    }

    static select_promo(){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').contains('Proceed without promo').click()

    }

    static click_pay_button(){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').contains('Pay now').click()

    }


    // invalid credit card
    static verify_invalid_payment_creditcard(invalid_payment_creditcard){
        cy.iframe('[id="snap-midtrans"]').contains('Payment declined by bank').should('have.text', invalid_payment_creditcard)
        cy.screenshot('verify_invalid_payment_creditcard')

    }

    // valid credit card
    static view_issuing() {
        cy.wait(5000); 
        cy.frameLoaded('#snap-midtrans').should('be.visible');
        cy.iframe('#snap-midtrans').find('h1', {timeout: 10000}).should('contain.text', 'Issuing Bank');  
    }


    static fill_password(password){
        cy.frameLoaded('#snap-midtrans'); 
        cy.iframe('#snap-midtrans').find('[id="unified-runner"]').click().type(password);
    }

    static click_ok_button(){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').find('[value="ok"]').click()

    }

    static verify_success_payment_creditcard(success_payment_creditcard){
        cy.iframe('[id="snap-midtrans"]').contains('Payment successful').should('have.text', success_payment_creditcard)

    }

    // alfamart group
    static select_method_alfamart(){
        cy.wait(2000);
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').contains('Alfa Group').scrollIntoView().should('be.visible')
        // cy.iframe('#snap-midtrans').contains('Alfa Group').should('be.visible').click();
        cy.iframe('#snap-midtrans').find('[href="#/alfamart"]').should('be.visible').click();
    }

    static copy_alfamart_code(){
        cy.iframe('#snap-midtrans').find('[class="float-right clickable copy"]').should('be.visible').click();
        cy.screenshot('copy_alfamart_code')
    }

    // indomaret
    static select_method_indomaret(){
        cy.wait(2000);
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').contains('Indomaret').scrollIntoView().should('be.visible')
        cy.iframe('#snap-midtrans').find('[href="#/indomaret"]').should('be.visible').click();
    }

    static copy_indomaret_code(){
        cy.iframe('#snap-midtrans').find('[class="float-right clickable copy"]').should('be.visible').click();
        cy.screenshot('copy_indomaret_code')
    }

    // akulaku pay leter
    static select_method_akulaku(){
        cy.wait(2000);
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('[id="snap-midtrans"]').contains('Akulaku PayLater').scrollIntoView().should('be.visible')
        cy.iframe('#snap-midtrans').contains('Akulaku PayLater').should('be.visible').click();
    }

    static click_paynow_akulaku(){
        cy.frameLoaded('#snap-midtrans');
        cy.iframe('#snap-midtrans').contains('Pay now').should('be.visible').click();
    }

    static redirected_simulator_akulaku(){
        cy.url().should('include', '/akulaku/ui/login')
    }

    static select_phonenumber_akulaku(){
        cy.get('#phoneNumber').select('08122222222 - Without DP Amount')
    }

    static click_next_button(){
        cy.get('[value="Next"]').click()
    }

    static redirected_reference_akulaku(){
        cy.contains('Reference Number').should('be.visible')
    }

    static click_pay_button_akulaku(){
        cy.get('[value="Pay"]').click()
    }

    // invalid akulaku Use DP Amount
    static select_phonenumber_invalid_akulaku_dpAmount(){
        cy.get('#phoneNumber').select('08133333333 - Use DP Amount')
    }

    static verify_invalid_payment_akulaku_dpAmount(invalid_payment_akulaku){
        cy.contains('pending').should('have.text', invalid_payment_akulaku)
        cy.screenshot('verify_invalid_payment_akulaku_dpAmount')
    }

    // invalid akulaku denied payment
    static select_phonenumber_invalid_akulaku_denied(){
        cy.get('#phoneNumber').select('08144444444 - Simulate a denied payment')
    }

    static verify_invalid_payment_akulaku_denied(verify_invalid_payment_akulaku_denied){
        cy.contains('denied').should('have.text', verify_invalid_payment_akulaku_denied)
        cy.screenshot('verify_invalid_payment_akulaku_denied')
    }   

    // valid akulaku  Without DP Amount
    static verify_valid_payment_akulaku(verify_invalid_payment_akulaku_dpAmount){
        cy.contains('successful').should('have.text', verify_invalid_payment_akulaku_dpAmount)
        cy.screenshot('verify_valid_payment_akulaku')
    }


}


export {visit_homepage, payment}