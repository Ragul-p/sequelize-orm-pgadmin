const express = require("express");
const route = express.Router();
const { createUser, readUser, updateUser, deleteUser
    , studentCreate, studentRead } = require("../controller/user.controller");

route.post("/create-user", createUser);
route.get("/read-user", readUser);
route.patch("/update-user", updateUser);
route.delete("/delete-user", deleteUser);



route.post("/create-student", studentCreate);
route.get("/read-student", studentRead);


module.exports = route;