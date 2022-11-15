const express = require("express");
const router = express.Router();
const scoreboardResultsController = require("../controllers/scoreboardResults");

router.get(
  "/getAllResultsByScoreboardId/:id",
  scoreboardResultsController.GET_ALL_RESULTS_BY_ID
);

router.get("/getAllResults", scoreboardResultsController.GET_ALL_RESULTS);

router.post("/createScore", scoreboardResultsController.CREATE_SCORE);

router.put("/editTitle/:id", scoreboardResultsController.EDIT_TITLE);

module.exports = router;
