const express = require("express");
const bodyParser = require("body-parser");
var lib = require('./lib');

const app = express();

app.use(bodyParser);

app.post("/inscription", (req, res) => {
   lib.Register(req, res)
});

app.listen(4242);