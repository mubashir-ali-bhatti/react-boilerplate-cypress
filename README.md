# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Steps`

yarn install.
yarn start.
yarn run cypress open.

In this example, the useEffect hook is used to perform a network request to fetch a list of users from a remote API when the App component mounts. The fetched data is stored in the component's state using the useState hook, and rendered as a list of user names.

To write test cases for this component using Cypress, we can:

1. Write a test to check if the component renders properly
2. Write a test to check if the network request is made and data is loaded:

In this test, we use the cy.server() and cy.route() commands to mock the network request to the API and return some fixture data instead. We then wait for the network request to complete using cy.wait(), and check if the user list is rendered with the correct number of users.
Note that we need to create a fixture file named users.json in the cypress/fixtures directory to contain the mock response data.The content of the file should be similar to the following:

[ { "id": 1, "name": "Leanne Graham" }, { "id": 2, "name": "Ervin Howell" }, // ...more users ] 

cypress/fixtures ----> users.json
