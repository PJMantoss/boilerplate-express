var express = require('express');
var app = express();
let path = __dirname + '/views/index.html';
let publicPath = __dirname + '/public';

let hiJSON = {"message": "Hello json"};
let hiJSON2 = {"message": "HELLO JSON"};

app.use(express.static(publicPath));

// Assets at the /public route
app.use("/public", express.static(publicPath));

app.get("/json", (req, res) => {
    res.json(hiJSON);
})

module.exports = app;