const express = require("express")
const loginRouter = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

loginRouter.post("/", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("ok")
})

module.exports = loginRouter;