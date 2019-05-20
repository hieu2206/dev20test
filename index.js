var http = require('http');
var bodyParsser = require("body-parser");
const express = require('express');
const app = express();
const path = require('path');

app.use(bodyParsser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.listen(8888, function(){
    console.log(`TEST DEV20`);
});

app.get("/home", function(req, res){
    res.send("Welcome to Nodejs");
});

app.get("/welcome", function(req, res){
    res.send("Welcome to Nodejs " + req.query.name);
});

app.post("/welcome", function(req, res){
    res.send("Post " + req.body.name);
});

app.post("/loginform", function (req, res) {
    res.send("NAME: " + req.body.name + "<br>" + "USERNAME: " + req.body.username + "<br>" + "PASSWORD: " + req.body.password);

});

app.get("/demo", function(req, res){
    res.sendFile("");
});
