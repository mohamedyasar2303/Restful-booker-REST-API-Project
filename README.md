# RESTful Booker API Testing with Cypress

This project demonstrates how to perform automated testing of the RESTful Booker API using Cypress, JavaScript, and the Page Object Model (POM) design pattern. The tests cover various HTTP methods, including GET, POST, PUT, PATCH, and DELETE, to ensure the proper functionality of the API endpoints.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Test Cases](#test-cases)
- [Running the Tests](#running-the-tests)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/yourusername/restful-booker-cypress.git
    ```

2. Navigate to the project directory:
    ```sh
    cd restful-booker-cypress
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

## Test Cases

The following test cases are included in the `Rest_full_bookers_project.cy.js` file:

1. **Create Token**: Generates a token required for authorization.
2. **GET Method**: Retrieves all booking details.
3. **GET by ID**: Retrieves details of a specific booking by ID.
4. **Create Booking (POST Method)**: Creates a new booking.
5. **GET Created Booking**: Retrieves details of the newly created booking.
6. **Update Booking (PUT Method)**: Updates the entire booking details.
7. **Partial Update (PATCH Method)**: Updates specific fields in the booking.
8. **Delete Booking (DELETE Method)**: Deletes the created booking.
9. **Verify Deletion**: Confirms the booking has been deleted.

## Running the Tests

To run the tests, use the following command:

```sh
npx cypress open
```

This will open the Cypress Test Runner. Select the test file `Rest_full_bookers_project.cy.js` to run the tests.

## Conclusion

This project demonstrates a comprehensive approach to testing RESTful APIs using Cypress. By covering CRUD operations and verifying the correctness of each action, it ensures the robustness and reliability of the API.

Feel free to contribute to this project by submitting issues or pull requests. For any questions, please contact mohamedyasasr2303@gmail.com.

---

Replace placeholders like `yourusername` and `your-email@example.com` with your actual GitHub username and email address before using this README file.
