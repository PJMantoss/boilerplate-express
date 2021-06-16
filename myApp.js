var express = require('express');
var app = express();
let path = __dirname + '/views/index.html';
let publicPath = __dirname + '/public';

app.get("/", (req, res) => {
    res.sendFile(path);
})

app.use("/public", express.static(publicPath))

 module.exports = app;