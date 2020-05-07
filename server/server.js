const express = require("express");

var lib = require('./lib');

const app = express();

app.post("/inscription", (req, res) => {
   lib.Register(req, res)
});

app.listen(4242);