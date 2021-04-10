const express = require("express")
const loginRouter = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

loginRouter.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        const isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            res.json({ message: "ok", data: user })
        } else {
            res.json({ message: "error", data: "Invalid email or password" })
        }
    } catch (error) {
        res.json({ message: "error", data: error.message })
    }
})

module.exports = loginRouter;