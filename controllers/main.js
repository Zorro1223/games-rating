const statusFile = require("../appModules/http-utilis/static-file");
const { getData, endpoints } = require("../appModules/api");
const { config, makeRatingFile } = require("../appModules/rating")

async function mainRouteCantroller(res, publicUrl, extname){
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  statusFile(res, publicUrl, extname);
}

module.exports = mainRouteCantroller;