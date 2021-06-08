let express = require("express");
let prices = require("./data/prices.json");
let orders = require("./data/orders.json");
let payments = require("./data/payments.json");
let app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/prices", function (req, res) {
  res.send(prices);
});

app.get("/orders", function (req, res) {
  res.send(orders);
});

app.get("/payments", function (req, res) {
  res.send(payments);
});

app.listen(5000, () => console.log("Server listening on port 5000!"));
