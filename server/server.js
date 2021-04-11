require("dotenv").config();
require("./connectMongo");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api", require("./routes/route"));

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));