# Setup

Clone the repository and run the below mentioned command -

## To run the server

node server.js

## To install the dependency libraries 

npm install

## To run the web-app

npm run serve

## To run the lint

npm run lint

## To run the unit Test

npm run ut 

## To run the unit test of specific file in watch mode

npm run ut -- --watchAll --findRelatedTests tests/unit/store.spec.js


# Front End Assignment

## Description

We like coffee.

So, we built an app to fetch coffee for people from our favorite barista.
The app keeps track of coffee ordered; what the balance is for each user; what users have paid for already; and what is still owed.

## Data

We've got the following data

- `data/prices.json` - provided by our barista. Has details of what beverages are available, and what their prices are.
- `data/orders.json` - list of beverages ordered by users of the app.
- `data/payments.json` - list of payments made by users paying for items they have purchased.

## Requirements

- Load the list of prices - Load the orders
- Calculate the total cost of each user's orders - Load the payments
- Calculate the total payment for each user
- Calculate what each user now owes
- Return a JSON string containing the results of this work.

## Tech stack

- JS framework `Vue`.
- State management library `Vuex`.
- Promise based HTTP client for the browser and node.js `Axios`.  
- CSS framework `Bulma` responsive web design.
- Load the JSONs asynchronously by hosting on a local `Express.js or Express` back end web application framework of Node.js server.

## Testing

- Unit test
