var express = require('express');
var app = express();
let path = __dirname + '/views/index.html';
let publicPath = __dirname + '/public';

app.use(express.static(publicPath));

// Assets at the /public route
app.use("/public", express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path);
})

module.exports = app;