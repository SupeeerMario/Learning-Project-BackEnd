const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Getroute = require("./routes/get");
const submitroute = require("./routes/post");

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(err);
  });

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware to parse JSON in the request body
app.use(express.json());

app.use("/api", Getroute);
app.use("/api", submitroute);

app.listen(5000, () => {
  console.log("Backend is running on port 5000");
});
