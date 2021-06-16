var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.end(console.log("Hello World"))
})

 module.exports = app;