const express = require('express')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 4000
const imageRouter = require("./image/router");

const bodyParser = require("body-parser");

const db = require("./db.js");
const Image = require("./image/model.js");

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);
app.use(imageRouter)

app.get('/', (req, res) => res.send('Buenas Dias! La pagina della casa'));

app.listen(port, () => console.log(`Greetings! Imageboard server listening on port ${port}!`))
