var express = require('express');
var app = express();
let path = __dirname + '/views/index.html';
let publicPath = __dirname + '/public';

app.use(express.static(publicPath));

// Assets at the /public route
app.use("/public", express.static(publicPath));

app.get("/json", (req, res) => {
  const mySecret = process.env['MESSAGE_STYLE']

    if(mySecret === "uppercase"){
        res.json({"message": "Hello json".toUpperCase()});
    }else{
        res.json({"message": "Hello json"});
    }
})

module.exports = app;