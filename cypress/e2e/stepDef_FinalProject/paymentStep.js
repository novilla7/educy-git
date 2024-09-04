import { visit_homepage, payment } from "../pageObject_FinalProject/paymentPage";
const {Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor')
import 'cypress-iframe';



// background
Given('I visit the Midtrans demo website', () => {
    visit_homepage.visit_homepage()
})

// test case va bca
When('I click buy now button', () => {
    payment.click_buynow()
})

Then('I can view shopping cart form', () => {
    payment.verify_paymentdetail()
})

//
When('I fill in the midtrans pillow field with {string}', (midtransPillow) => {
    payment.fill_midtransPillow(midtransPillow)
})

When('I fill in the name field with {string}', (fill_name) => {
    payment.fill_name(fill_name)
})

When('I fill in the email field with {string}', (fill_email) => {
    payment.fill_email(fill_email)
})

When('I fill in the phone no {string}', (fill_phone) => {
    payment.fill_phone(fill_phone)
})

When('I fill in the city field with {string}', (fill_city) => {
    payment.fill_city(fill_city)
})

When('I fill in the address field with {string}', (fill_address) => {
    payment.fill_address(fill_address)
})

When('I fill in the postal code field with {string}', (fill_postalcode) => {
    payment.fill_postalcode(fill_postalcode)
})

When('I click checkout button', () => {
    payment.click_checkout()
})

Then('I received error message {string}', (error_message) => {
    payment.error_message(error_message)
})

// valid va bca
Then('I can view payment method', () => {
    payment.verify_paymentdetail()
})

When('I select method payment by BCA Virtual Account', () => {
    payment.select_method_va_bca()
})

When('I copy code payment', () => {
    payment.copy_va_bca()
})


// credit card
When('I select method payment by credit or debit cart', () => {
    payment.select_method_creditcard()
})

When('I fill in the card name field with {string}', (card_number) => {
    payment.fill_card_name(card_number)
})

When('I fill in the expiration date field with {string}', (exp_date) => {
    payment.fill_exp_date(exp_date)
})

When('I fill in the cvv field with {string}', (cvv) => {
    payment.fill_cvv(cvv)
})

When('I select promo proceed without promo', () => {
    payment.select_promo()
})

When('I click pay now button', () => {
    payment.click_pay_button()
})

// invalid credit card
Then('I received error success message {string}', (invalid_payment_creditcard) => {
    payment.verify_invalid_payment_creditcard(invalid_payment_creditcard)
})

// valid credit card
Then('I can view issuing bank page', () => {
    payment.view_issuing()
})

When('I fill in the password with {string}', (password) => {
    payment.fill_password(password)
})

When('I click ok button', () => {
    payment.click_ok_button()
})

Then('I received received success message {string}', (success_payment_creditcard) => {
    payment.verify_success_payment_creditcard(success_payment_creditcard)
})

// valid alfamart
When('I select method payment by alfamart', () => {
    payment.select_method_alfamart()
})

When('I copy code payment alfamart', () => {
    payment.copy_alfamart_code()
})

// valid indomaret
When('I select method payment by indomaret', () => {
    payment.select_method_indomaret()
})

When('I copy code payment indomaret', () => {
    payment.copy_indomaret_code()
})


// akulaku
When('I select method payment by akulaku pay later', () => {
    payment.select_method_akulaku()
})

When('I click pay now Button', () => {
    payment.click_paynow_akulaku()
})

Then('I redirected to simulator akulaku page', () => {
    payment.redirected_simulator_akulaku()
})

When('I select without dp Amount', () => {
    payment.select_phonenumber_akulaku()
})

When('I click next Button', () => {
    payment.click_next_button()
})

Then('I can view Reference Number', () => {
    payment.redirected_reference_akulaku()
})

When('I click pay Button', () => {
    payment.click_pay_button_akulaku()
})

// valid akulaku
Then('I can Received Success Message {string}', (valid_payment_akulaku) => {
    payment.verify_valid_payment_akulaku(valid_payment_akulaku)
})


// invalid akulaku Use DP Amount
When('I select Use DP Amount', () => {
    payment.select_phonenumber_invalid_akulaku_dpAmount()
})


Then('I can Received error Message {string}', (verify_invalid_payment_akulaku_dpAmount) => {
    payment.verify_invalid_payment_akulaku_dpAmount(verify_invalid_payment_akulaku_dpAmount)
})

// invalid akulaku denied payment
When('I select denied payment', () => {
    payment.select_phonenumber_invalid_akulaku_denied()
})


Then('I can Received Error Message {string}', (verify_invalid_payment_akulaku_denied) => {
    payment.verify_invalid_payment_akulaku_denied(verify_invalid_payment_akulaku_denied)
})












// // When('I visit BCA simulator website', () => {
// //     payment.visit_simulator_va_bca()
// // })

// // When('I success paste code payment in the Virtual Account Number field with {string}', (paste_va_bca) => {
// //     payment.paste_va_bca(paste_va_bca)
// // })

// // When('I click inquire button', () => {
// //     payment.click_inquire()
// // })

// // Then('I redirect to payment detail page', () => {
// //     payment.verify_paymentdetail_va_bca()
// // })

// // When('I click pay Button', () => {
// //     payment.click_pay_button()
// // })

// // Then('I received success message {string}', (success_va_bca) => {
// //     payment.verify_success_va_bca(success_va_bca)
// // })