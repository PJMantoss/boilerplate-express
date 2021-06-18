var express = require('express');
var app = express();
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

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    setTimeout(() => {}, 2000)
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