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
    if(process.env.MESSAGE_STYLE === uppercase){
        res.json(hiJSON);
    }else{
        res.json(hiJSON2);
    }
})

module.exports = app;