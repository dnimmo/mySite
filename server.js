var fs = require('fs');
console.log("Starting");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var express = require("express");

//Set up as express app - no longer inherits from http.Server
var app = express();
app.use(app.router)
//Set up location for static files
app.use(express.static(__dirname + "/public"));
app.get("/#/angular", function(request, response){
        response.send("Hello");
});

//listen on port, host in config.json file
app.listen(port, host);