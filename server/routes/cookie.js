const express = require("express")
const cookieRouter = express.Router();
const jwt = require("jsonwebtoken");

cookieRouter.post("/", (req, res) => {
    const { uid } = req.body;
    if (!uid) {
        res.json({ message: "error", data: "user not logged in" })
        return;
    }
    try {
        const result = jwt.verify(uid, "privateKey")
        res.json({ message: "ok", data: result })
    } catch (error) {
        res.json({ message: "error", error: error.message })
    }
})

module.exports = cookieRouter;