const links = [
  {
    name: "Store Directions",
    link: "https://www.google.com/",
  },

  {
    name: "About Us",
    link: "https://www.google.com/imghp?hl=en&authuser=0&ogbl",
  },

  {
    name: "Awards",
    link: "https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US&pli=1",
  },
];

module.exports = {
  getAll,
};

function getAll() {
  return links;
}
