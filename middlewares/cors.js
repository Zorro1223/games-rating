const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
  ];

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
