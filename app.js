const http = require('http');
const {
  mainRouteController,
  defaultRouteController,
  gameRouteController,
  voteRouteController
} = require ("./controllers")
const cors = require('./middlewares/cors');

const PORT = 3005;
const app = express();

app.use(cors);
