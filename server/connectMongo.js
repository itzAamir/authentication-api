const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err))