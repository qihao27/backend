// Import express library
// const { response } = require("express");
const express = require("express");

// Import data.js
const database = require("./data");

// Define router object
let router = express.Router();

// Define a GET API with path "/home"
// router.get("path", callback);
router.get("/home", (request, response) => {
    response.send("Welcome!");
});

// Define a GET API with path "/sum"
router.get("/sum", (request, response) => {
    let sum = parseInt(request.query.a) + parseInt(request.query.b);
    response.send("Sum is: " + sum);
});

module.exports = { router };
