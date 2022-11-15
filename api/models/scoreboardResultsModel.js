const mongoose = require("mongoose");

const scoreBoardResult = mongoose.Schema({
  scoreboard_id: { type: String, required: true },
  points: { type: Number, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model("ScoreboardResult", scoreBoardResult);
