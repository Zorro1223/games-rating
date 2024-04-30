const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 
const {
  mainRouteController,
  defaultRouteController,
  gameRouteController,
  voteRouteController
} = require ("./controllers")
const allowedCors = [
  'https://practicum.yandex.ru',
  'https://students-projects.ru',
  'localhost:3000'
];

const PORT = 3005;
const app = express();

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
          mainRouteController(res, "index.html", ".html")
          break;
        case "/vote":
        voteRouteController(req, res);
        break;

        case "/game":
        gameRouteController(res);
        break;
        
        default:
            defaultRouteController(res, url);
    }
  });

  function cors(req, res, next) {
      const { origin } = req.headers;
      if (allowedCors.includes(origin)) {
          res.header('Access-Control-Allow-Origin', origin);
      }
      
      next(); 
  }

module.exports = cors;
  app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
  ); 

  app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
  })

server.listen(PORT);
