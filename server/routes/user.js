const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");

userRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json({ message: "ok", data: user });
    } catch (error) {
        res.json({ message: "error", data: error.message });
    }
})

module.exports = userRouter;