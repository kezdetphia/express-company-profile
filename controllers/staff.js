const Staff = require("../models/staff");

module.exports = {
  index,
  show,
};

function index(req, res) {
  res.render("staff/index", { staff: Staff.getAll(), title: "Staff" });
}

function show(req, res) {
  res.render("staff/show", {
    staff: Staff.getOne(req.params.id),
    title: Staff.getOne(req.params.id).name,
  });
}
