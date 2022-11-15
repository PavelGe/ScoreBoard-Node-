const ScoreboardResultsSchema = require("../models/scoreboardResultsModel");
const ScoreboardSchema = require("../models/scoreboardModel");

module.exports.CREATE_SCORE = function (req, res) {
  const score = new ScoreboardResultsSchema({
    scoreboard_id: req.body.id,
    points: req.body.points,
    title: req.body.title,
  });

  score.save().then((result) => {
    ScoreboardResultsSchema.updateOne(
      { _id: result._id },
      { id: result._id }
    ).exec();
    ScoreboardSchema.updateOne(
      { _id: req.body.id },
      { $push: { results_ids: result._id } }
    ).exec();
  });
  return res.status(200).json({
    statusMessage: "Score was created",
  });
};

module.exports.EDIT_TITLE = function (req, res) {
  ScoreboardResultsSchema.updateOne(
    { _id: req.params.id },
    { title: req.body.editedTitle }
  ).then((results) => {
    return res.status(200).json({ statusMessage: "Title was changed" });
  });
};

module.exports.GET_ALL_RESULTS = function (req, res) {
  ScoreboardResultsSchema.find().then((results) => {
    return res.status(200).json({ allResults: results });
  });
};

module.exports.GET_ALL_RESULTS_BY_ID = function (req, res) {
  ScoreboardResultsSchema.find({ scoreboard_id: req.params.id })
    .sort({ points: -1 })
    .then((results) => {
      return res.status(200).json({ scoreboardresults: results });
    });
};
