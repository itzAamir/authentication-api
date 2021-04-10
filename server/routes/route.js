const express = require("express")
const router = express.Router();
const registerRouter = require("./register");
const loginRouter = require("./login");

router.get("/", (req, res) => {
    // Just to check if api is working properly
    res.send("working");
})

router.use("/register", registerRouter);
router.use("/login", loginRouter);

module.exports = router;