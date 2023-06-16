const staff = [
  {
    name: "Ben Jenkins",
    role: "Manager",
    rating: 3,
    id: 235,
  },
  {
    name: "Beth Townsend",
    role: "Head Maker",
    rating: 5,
    id: 329,
  },
  {
    name: "Brit Manst",
    role: "Cashier",
    rating: 1,
    id: 120,
  },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return staff;
}

function getOne(id) {
  id = parseInt(id);
  return staff.find((member) => id === staff.id);
}
