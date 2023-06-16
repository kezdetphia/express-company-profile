var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/staff");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("staff/index", { title: "Staff" });
});

//GET show page
router.get("/show", function (req, res, next)) {
  res.render("staff/show", {skillsCtrl.})
}

module.exports = router;
