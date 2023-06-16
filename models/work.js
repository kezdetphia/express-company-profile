const work = [
  {
    name: "The Sweet Award",
    date: 2018,
    id: 219390,
  },
  {
    name: "The Sweet Award",
    date: 1994,
    id: 213954,
  },
  {
    name: "The Sweet Award",
    date: 2005,
    id: 102938,
  },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return work;
}

function getOne(id) {
  id = parseInt(id);
  return work.find((w) => w.id === id);
}
