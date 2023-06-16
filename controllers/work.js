const Work = require("../models/work");

module.exports = {
  index,
  show,
};

function index(req, res) {
  res.render("work/index", { work: Work.getAll(), title: "work" });
}

function show(req, res) {
  res.render("work/show", {
    work: Work.getOne(req.params.id),
    title: Work.getOne(req.params.id).name,
  });
}
