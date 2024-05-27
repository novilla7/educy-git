Feature: Login to Zero Bank

  As a user
  I want to be able to log in to Zero Bank with valid credentials
  So I can access my account

  Background: I open the Zero Bank login page
    Given I open the Zero Bank login page

  Scenario: Login with valid credentials
    When I submit login with valid credentials
    Then I should see the account summary page
