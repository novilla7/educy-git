Feature: Payment demo midtrans

    As a user
    I want to complete a payment using the Virtual Account BCA payment method
    So that I can successfully make a payment through this method

    Background: visit background
        Given I visit the Midtrans demo website


    Scenario Outline: Unsuccessful Payment Due to Invalid Payment Details
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "<qty>"
        And I fill in the name field with "<name>"
        And I fill in the email field with "<email>"
        And I fill in the phone no "<phone>"
        And I fill in the city field with "<city>"
        And I fill in the address field with "<address>"
        And I fill in the postal code field with "<postalcode>"
        And I click checkout button
        Then I received error message "<error_message>"
    Examples:
    | qty       | name      | email             | phone             | city      | address      | postalcode      | error_message                             |
    | 0         | 12345     | anna@gmail.com    | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |
    | 0         | ,./<>     | anna@gmail.com    | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |
    | 0         |           | anna@gmail.com    | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |
    | 0         | anna      | 12345             | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |         
    | 0         | anna      | ,./<>             | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |
    | 0         | anna      | annagmail.com     | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |    
    | 0         | anna      | anna@gmailcom     | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |         
    | 0         | anna      | annagmailcom      | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |         
    | 0         | anna      |                   | 081234567891      | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |         
    | 0         | anna      | anna@gmail.com    | abcde             | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |         
    | 0         | anna      | anna@gmail.com    | ,./<>             | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |          
    | 0         | anna      | anna@gmail.com    |                   | Depok     | Jl. ABC      | 12345           | Sorry, something went wrong.              |
    | 0         | 12345     | anna@gmail.com    | 081234567891      | 12345     | Jl. ABC      | 12345           | Sorry, something went wrong.              |    
    | 0         | 12345     | anna@gmail.com    | 081234567891      | ,./<>     | Jl. ABC      | 12345           | Sorry, something went wrong.              |    
    | 0         | 12345     | anna@gmail.com    | 081234567891      |           | Jl. ABC      | 12345           | Sorry, something went wrong.              |    
    | 0         | 12345     | anna@gmail.com    | 081234567891      | Depok     | Jl. ABC      | abcde           | Sorry, something went wrong.              |
    | 0         | 12345     | anna@gmail.com    | 081234567891      | Depok     | Jl. ABC      | ,./<>           | Sorry, something went wrong.              |    
    | 0         | 12345     | anna@gmail.com    | 081234567891      | Depok     | Jl. ABC      |                 | Sorry, something went wrong.              |    
    

#virtual account : bca
    Scenario: Successful Payment with virtual account bca Payment Details
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "0"
        And I fill in the name field with "anna"
        And I fill in the email field with "anna@gmail.com"
        And I fill in the phone no "081234567890"
        And I fill in the city field with "Depok"
        And I fill in the address field with "Jl. ABC"
        And I fill in the postal code field with "12345"
        And I click checkout button
        Then I can view payment method
        When I select method payment by BCA Virtual Account
        And I copy code payment

# #credit/debit card
    Scenario: Successful Payment with credit/debit card invalid Payment Details
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "0"
        And I fill in the name field with "anna"
        And I fill in the email field with "anna@gmail.com"
        And I fill in the phone no "081234567890"
        And I fill in the city field with "Depok"
        And I fill in the address field with "Jl. ABC"
        And I fill in the postal code field with "12345"
        And I click checkout button
        Then I can view payment method
        When I select method payment by credit or debit cart

        And I fill in the card name field with "4485436455354151"
        And I fill in the expiration date field with "0831"
        And I fill in the cvv field with "123"
        And I select promo proceed without promo
        And I click pay now button
        Then I received error success message "Payment declined by bank"


#alfamart
    Scenario: Successful Payment with alfamart group
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "0"
        And I fill in the name field with "anna"
        And I fill in the email field with "anna@gmail.com"
        And I fill in the phone no "081234567890"
        And I fill in the city field with "Depok"
        And I fill in the address field with "Jl. ABC"
        And I fill in the postal code field with "12345"
        And I click checkout button
        Then I can view payment method
        When I select method payment by alfamart
        And I copy code payment alfamart

## indomaret
    Scenario: Successful Payment with indomaret
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "0"
        And I fill in the name field with "anna"
        And I fill in the email field with "anna@gmail.com"
        And I fill in the phone no "081234567890"
        And I fill in the city field with "Depok"
        And I fill in the address field with "Jl. ABC"
        And I fill in the postal code field with "12345"
        And I click checkout button
        Then I can view payment method
        When I select method payment by indomaret
        And I copy code payment indomaret

# #akulaku
    Scenario: Payment with invalid akulaku pay later Use DP Amount
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "0"
        And I fill in the name field with "anna"
        And I fill in the email field with "anna@gmail.com"
        And I fill in the phone no "081234567890"
        And I fill in the city field with "Depok"
        And I fill in the address field with "Jl. ABC"
        And I fill in the postal code field with "12345"
        And I click checkout button
        Then I can view payment method

        When I select method payment by akulaku pay later
        And I click pay now Button
        Then I redirected to simulator akulaku page
        When I select Use DP Amount

        And I click next Button
        Then I can view Reference Number
        When I click pay Button
        Then I can Received error Message "pending"

    Scenario: Payment with invalid akulaku pay later denied payment
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "0"
        And I fill in the name field with "anna"
        And I fill in the email field with "anna@gmail.com"
        And I fill in the phone no "081234567890"
        And I fill in the city field with "Depok"
        And I fill in the address field with "Jl. ABC"
        And I fill in the postal code field with "12345"
        And I click checkout button
        Then I can view payment method
        When I select method payment by akulaku pay later
        And I click pay now Button
        Then I redirected to simulator akulaku page
        When I select denied payment
        And I click next Button
        Then I can view Reference Number
        When I click pay Button
        Then I can Received Error Message "denied"


    Scenario: Successful Payment with valid akulaku pay later
        When I click buy now button
        Then I can view shopping cart form
        When I fill in the midtrans pillow field with "0"
        And I fill in the name field with "anna"
        And I fill in the email field with "anna@gmail.com"
        And I fill in the phone no "081234567890"
        And I fill in the city field with "Depok"
        And I fill in the address field with "Jl. ABC"
        And I fill in the postal code field with "12345"
        And I click checkout button
        Then I can view payment method
        When I select method payment by akulaku pay later
        And I click pay now Button
        Then I redirected to simulator akulaku page
        When I select without dp Amount
        And I click next Button
        Then I can view Reference Number
        When I click pay Button
        Then I can Received Success Message "successful"