Feature: API tests

    Scenario: GET request to /users/3
        Given existing server application
        When GET request to 'api/users/3' endpoint
        Then it should return '200' status code

    Scenario: GET request to /users/4
        Given existing server application
        When GET request to 'api/users/4' endpoint
        Then it should return '200' status code

        Given existing server application
        When GET request to 'api/users?page=1' endpoint
        Then it should return '200' status code
        And it should return list containing 'Emma'