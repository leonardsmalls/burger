// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    // All burgers from table 
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.insertOne("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;