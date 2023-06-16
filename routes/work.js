var express = require("express");
var router = express.Router();
const workCtrl = require("../controllers/work");

router.get("/", workCtrl.index);
router.get("/:id", workCtrl.show);

module.exports = router;
