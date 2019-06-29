require('dotenv').config()
const resp = require("./global/json_data");
const express = require('express');
//const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
//const session = require('express-session');
const cors = require("cors");

const app = express();

//const router = express.Router();

//app.use(bodyParser);
//app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // secure: true - only https
// }))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(pino);

app.get('/api/greeting', async (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post("/api/users/register", async (req, res) => {
  const reg = require("./global/users/register");

  const result = await reg.registerUser(req.body);

  resp.print(result, res);
});

app.post("/api/users/login", async (req, res) => {
  const reg = require("./global/users/register");

  const result = await reg.login(req.body.username, req.body.password);

  resp.print(result, res);
});

app.get('/api/users/check', async (req, res) => {
  const reg = require("./global/users/register");

  const result = await reg.check(req.query.token);

  resp.print(result, res);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
