const express = require("express");
const router = express.Router();
const scoreboardController = require("../controllers/scoreboard");

router.post("/createScoreboard", scoreboardController.CREATE_SCOREBOARD);

router.get("/getAllScoreboards", scoreboardController.GET_ALL_SCOREBOARDS);

router.get("/getScoreboardById/:id", scoreboardController.GET_SCOREBOARD_BY_ID);

router.put(
  "/editScoreboardName/:id",
  scoreboardController.EDIT_SCOREBOARD_NAME
);

router.put(
  "/editScoreboardDirection/:id",
  scoreboardController.EDIT_SCOREBOARD_DIRECTION
);

module.exports = router;
