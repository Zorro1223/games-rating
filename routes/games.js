const gamesRouter = require("express").Router();

const {
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  findGameById,
  deleteGame
} = require("../middlewares/games");
const { sendAllGames, sendUpadetedGames } = require("../controllers/games");

gamesRouter.get("/games", getAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  sendUpadetedGames
);

gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpadetedGames
);

module.exports = gamesRouter;