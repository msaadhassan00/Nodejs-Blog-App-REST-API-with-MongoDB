const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to the Google Cloud Platform");
});

app.listen(5000, () => {
  console.log("Server is listening on port");
});
