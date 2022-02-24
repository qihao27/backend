// Import express library
const express = require("express");
// Import router from routers.js
const { router } = require("./routers");

// Define server instance
let app = express();
app.use(express.json());

app.use(router);

app.listen(3000, (errors) => {
    if (errors) console.log(errors);
    else console.log("Server started on port 3000.");
})
