const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
const scoreboardRoutes = require("./api/routes/scoreboardRoutes");
const scoreboardResultsRoutes = require("./api/routes/scoreboardResultsRoutes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(scoreboardRoutes);
app.use(scoreboardResultsRoutes);

mongoose

  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })

  .then(console.log("CONNECTED"))

  .catch((err) => {
    console.log("ERORRR something is wrong");

    console.log(err);
  });

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
