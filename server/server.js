const express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let lib = require('./lib');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());

app.post("/inscription", (request, response) => {
   lib.Register(request, response);
});

app.post("/connexion", (request, response) => {
   lib.Connect(request, response);
});

app.listen(4242, () => {
   console.log('Connected to port 4242');
});