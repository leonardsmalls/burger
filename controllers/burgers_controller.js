// Import Express and burger.js
// ==================================================
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js')

// Routes
// ==================================================
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    //console.log(res);
    burger.all(function(burgerData) {
        res.render("index", {burger_data: burgerData });
    });
});

/*
router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
*/

router.post("/burgers/create", function (req, res) {
    //console.log(req.body);
    burger.create(req.body.b_name, function(result) {
    //console.log(result);
    res.redirect("/");
  });
});

/*
router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(req.body.burger_id, function (result) {
        res.redirect("/");
    });
});
*/
router.put("/burgers/update", function (req, res) {
    console.log(req.body);
    console.log('^body');
    burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

console.log(router);
// Export routes for server.js to use.
module.exports = router;