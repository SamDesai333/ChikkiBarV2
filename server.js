var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("app/public"));

require("./app/routes/htmlRoutes")(app)

app.listen(PORT, function(){
    console.log("App Listening on PORT: " + PORT);
});