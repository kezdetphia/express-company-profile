var express = require("express");
var router = express.Router();
const linksCtrl = require("../controllers/links");

/* GET users listing. */
router.get("/", linksCtrl.index);

module.exports = router;
