require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("./connectMongo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/route"));

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));