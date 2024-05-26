Feature: Search Feature

  Scenario: Search for the term bank
    Given I visit the Zero Bank homepage
    When I enter "bank" into the search box
    Then I should see search results related to bank
