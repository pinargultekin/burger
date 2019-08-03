var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//Get router
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Post router
router.post("/api/burgers", function (req, res) {
  
    burger.create(
        req.body.burger_name
        , function (result) {
            res.redirect("/");
            console.log(result);
        });
});

//Put Router
router.post("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: " + condition);
    burger.update({
        devoured: 1
      }, condition, function(data) {
        res.redirect("/");
      });
    // burger.update({ devoured: req.body.devoured }, condition, function (result) {

    //     if (result.changedRows == 0) {
    //         return res.status(404).end();

    //     } else {
    //         res.status(200).end();

    //     }
    // });
});

//Delete Router
// router.delete("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition: " + condition);
//     burger.delete(condition, function (result) {
//         if (result.affectedRows === 0) {
//             return res.status(404).end();

//         } else {
//             res.status(200).end();
//         };
//     });
// });

module.exports = router;