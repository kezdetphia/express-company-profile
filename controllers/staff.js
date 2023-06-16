const Staff = require("../models/staff");

module.exports = {
  index,
  show,
};

function index(req, res) {
  res.render("staff/index", { staff: Staff.getAll() });
}

function show(req, res) {
  res.rends("staff/show", { staff: Staff.getOne(req.params.id) });
}
