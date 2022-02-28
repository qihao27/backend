// Import express library
const express = require("express");

// Import CORS to allow running backend on the same machine as frontend
const cors = require("cors");

// Import router from routers.js
const { router } = require("./routers");

// Define server instance
let app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3000, (errors) => {
    if (errors) console.log(errors);
    else console.log("Server started on port 3000.");
})
