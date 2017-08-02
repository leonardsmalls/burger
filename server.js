// DEPENDENCIES
// ==================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Specify the port
var PORT = process.env.PORT || 3306;

// Create an instance of the express app
var app = express();


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));

var burgers_controller = require('./controllers/burgers_controller.js');

app.use("/", burgers_controller);
app.use("/update", burgers_controller);
app.use("/create", burgers_controller);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});