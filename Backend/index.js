const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 8000;
const dbConnect = require("./db");
var cors = require('cors')
app.use(cors())

dbConnect()
  .then(() => {
    app.listen(
      (PORT || 8000,
      () => {
        console.log("Server is running on port ", PORT);
      })
    );
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });