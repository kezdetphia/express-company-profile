const Link = require("../models/links");

module.exports = {
  index,
};

function index(req, res) {
  res.render("links/index", { link: Link.getAll(), title: "Links" });
  console.log(Link.getAll());
}
