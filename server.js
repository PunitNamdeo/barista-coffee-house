const express = require("express");
const prices = require("./data/prices.json");
const orders = require("./data/orders.json");
const payments = require("./data/payments.json");
const app = express();

/**
 * creating the node.js based express web application backend server
 */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**
 * build the prices api
 */
app.get("/prices", function (req, res) {
  res.send(prices);
});

/**
 * build the orders api
 */
app.get("/orders", function (req, res) {
  res.send(orders);
});

/**
 * build the payments api
 */
app.get("/payments", function (req, res) {
  res.send(payments);
});

app.listen(5000, () => console.log("Server listening on port 5000!"));
