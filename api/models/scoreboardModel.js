const mongoose = require("mongoose");

const scoreBoardModel = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: String, required: true },
  results_ids: { type: Array, required: false },
  scoreDirection: { type: String, required: true },
});

module.exports = mongoose.model("Scoreboard", scoreBoardModel);
