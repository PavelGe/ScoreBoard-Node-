const ScoreboardSchema = require("../models/scoreboardModel");

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardSchema({
    name: req.body.name,
    dateCreated: new Date(),
    scoreDirection: req.body.scoreDirection,
  });

  scoreboard.save().then((result) => {
    return res.status(200).json({
      statusMessage: "scoreboard was created successfully",
      result: result,
    });
  });
};

module.exports.EDIT_SCOREBOARD_NAME = function (req, res) {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedName }
  ).then((results) => {
    return res.status(200).json({ statusMessage: "Name was changed" });
  });
};

module.exports.EDIT_SCOREBOARD_DIRECTION = async (req, res) => {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { scoreDirection: req.body.scoreDirection }
  ).then((results) => {
    return res.status(200).json({ statusMessage: "Direction changed" });
  });
};

module.exports.GET_ALL_SCOREBOARDS = function (req, res) {
  ScoreboardSchema.find().then((results) => {
    return res.status(200).json({ scoreboards: results });
  });
};

module.exports.GET_SCOREBOARD_BY_ID = function (req, res) {
  ScoreboardSchema.find({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ scoreboard: results });
  });
};
