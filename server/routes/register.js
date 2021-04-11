const express = require("express")
const registerRouter = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

registerRouter.post("/", (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hashedPass) => {
            if (!err) {
                try {
                    const newUser = new User({ username, email, password: hashedPass });
                    const result = await newUser.save();
                    res.json({ message: "ok", data: result })
                } catch (error) {
                    res.json({ message: "error", data: error.message })
                }
            }
        })
    })
})

module.exports = registerRouter;
