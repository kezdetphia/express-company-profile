var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/staff");

/* GET home page. */
router.get("/", skillsCtrl.index);

// GET show page
router.get("/:id", skillsCtrl.show);

module.exports = router;
