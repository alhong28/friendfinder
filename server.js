var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var apiroutes = require("./routing/apiRoutes.js");
var htmlroutes = require("./routing/htmlRoutes.js");

app.use("/", routes);




app.listen(PORT, function() {
	console.log("App listening on PORT" + PORT);
})