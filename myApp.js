var express = require('express');
var app = express();
//let path = __dirname + '/views/index.html';
let path = __dirname + '/public';

// app.get("/", (req, res) => {
//     res.sendFile(path);
// })

app.use('/', express.static(path))

 module.exports = app;