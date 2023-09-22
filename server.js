const express = require("express");
const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");
const app = express();
const port = process.env.PORT || 5000;


const db = require("./config/db");
db.authenticate().then(function () { console.log("DB Connection Successful (:"); })
    .catch(function () { console.log("DB Connection Error !!!"); });


app.use("/api/user", require("./router/user.route"));


app.listen(port, function () {
    console.log(`server is listening on port ${port}`);
});