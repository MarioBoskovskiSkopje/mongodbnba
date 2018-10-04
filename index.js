const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const getData = require("./getData");

mongoose
  .connect("mongodb://localhost:27017/nbalister")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(bodyParser.json());

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));

// getTeams();

getData.getPlayers();
