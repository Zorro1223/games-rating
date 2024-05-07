
const cors = require('./middlewares/cors');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3005;
const app = express();
app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  cors,
  mainRoute,
  gamesRouter
); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})


