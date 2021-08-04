Feature: Addition
  Scenario: 1 + 0
    Given I start with 1
    When I add 0
    Then I end up with 1

  Scenario: 1 + 1
    Given I start with 1
    When I add 1
    Then I end up with 2

Scenario: Add numbers
  Given I start with 0
  When I add the following numbers:
    | 1 |
    | 2 |
    | 3 |
    | 4 |
  Then I end up with 10