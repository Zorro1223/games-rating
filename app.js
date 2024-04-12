const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
          // ...другие маршруты
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