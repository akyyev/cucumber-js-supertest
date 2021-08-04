
Feature: Multiplication

  Scenario Outline: <a> * <b>
    Given I start with <a>
    When I multiply by <b>
    Then I end up with <answer>

  Examples:
    | a | b | answer |
    | 1 | 0 | 0      |
    | 1 | 1 | 1      |
    | 2 | 2 | 4      |