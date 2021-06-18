var express = require('express');
var app = express();
let bodyParser = require('body-parser');

let path = __dirname + '/views/index.html';
let publicPath = __dirname + '/public';

//Challenge 5 - root-level request logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip} `);
    next();
  })

app.use(express.static(publicPath));

// Assets at the /public route
app.use("/public", express.static(publicPath));

//Challenge 8 - Get Query Parameter Input from the Client
app.get("/name", (req, res) => {
    res.send({name: req.query.first + " " + req.query.last});
})

//Challenge 7 - Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
    res.send({echo: req.params.word});
})

//Challenge 6 - Chain Middleware to Create a Time Server
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    setTimeout(() => {
        res.send({time: req.time});
    }, 2000)
})

app.get("/json", (req, res) => {
  //const mySecret = process.env['MESSAGE_STYLE']

    if(mySecret === "uppercase"){
        res.json({"message": "Hello json".toUpperCase()});
    }else{
        res.json({"message": "Hello json"});
    }
})

module.exports = app;