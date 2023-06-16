var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/staff");

/* GET home page. */
router.get("/", skillsCtrl.index);

//GET show page
// router.get("/show", function (req, res, next)) {
//   res.render("staff/show", {skillsCtrl.})
// }

module.exports = router;
