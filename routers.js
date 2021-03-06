// Import express library
// const { response } = require("express");
const express = require("express");

// Import data.js
// const database = require("./data");
const { connection } = require("./database");

// Define router object
let router = express.Router();

//Define an API to return all the users
router.get("/users/all", (request, response) => {
    // let users = database.get_all_users();
    // response.send(users);
    connection.query("select * from user", (error, result) => {
        if (error) {
            console.log(error);
            response.status(500).send("Something went wrong...");
        } else {
            response.status(200).send(result);
        }
    });
});

// Define an API to get user based on user_id passed in the request
router.get("/users/by-uid", (request, response) => {
    // let users = database.get_user_by_user_id(request.query.uid);
    // response.send(users);
    connection.query(`select * from user where uid=${request.query.uid}`, (error, result) => {
        if (error) {
            console.log(error);
            response.status(500).send("Something went wrong...");
        } else {
            (result.length == 0) ? response.status(404).send("user not found") : response.status(200).send(result);
        }
    });
});

// Define a POST API to add a new user to database
router.post("/users/add", (request, response) => {
    // let user = database.add_user(request.body.user);
    // response.send("user added.");
    connection.query(`insert into user (first_name, last_name, email) 
    values ("${request.body.first_name}", "${request.body.last_name}", "${request.body.email}")`,
    (error, result) => {
        if (error) {
            console.log(error);
            response.status(500).send("Something went wrong...");
        } else {
            response.status(200).send("User added to the database!");
        }
    });
});

// Define a GET API with path "/home"
// router.get("path", callback);
router.get("", (request, response) => {
    response.send("Welcome!");
});

// Define a GET API with path "/sum"
router.get("/sum", (request, response) => {
    let sum = parseInt(request.query.a) + parseInt(request.query.b);
    response.send("Sum is: " + sum);
});

// Define a POST API with path "/sum"
router.post("/sum", (request, response) => {
    let sum = request.body.a + request.body.b;
    response.send("Sum is : " + sum);
});

module.exports = { router };
