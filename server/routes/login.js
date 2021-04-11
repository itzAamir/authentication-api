const express = require("express")
const loginRouter = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginRouter.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (user) {
            const isValid = await bcrypt.compare(password, user.password)
            if (isValid) {
                const token = jwt.sign({ id: user._id, username: user.username }, "privateKey")
                res.cookie("uid", token, {
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
                    httpOnly: false,
                })
                res.json({ message: "ok", data: user })
            } else {
                res.json({ message: "error", data: "Invalid email or password" })
            }
        }
        else {
            res.json({ message: "error", data: "user does not exist" })
        }
    } catch (error) {
        res.json({ message: "error", data: error.message })
    }
})

module.exports = loginRouter;