Feature: DataTables

    Scenario: Create a new user
        When I create a new user with details:
            | Username | graham               |
            | Email    | my.email@example.com |
            | Password | mySecretPassword     |
            # | Username | Email         | Password |
            # | Mike     | asd@gmail.com | 12345    |
        Then the user is created successfully



    # Scenario: Create a new user
    #     When I create a new user with details: