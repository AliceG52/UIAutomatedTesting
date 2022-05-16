Feature: Google

Scenario: Simple Google Test
    Given I navigate to Google
    When I search for 'dogs'
    Then I expect to see the top 3 of results contain the word 'dog'
