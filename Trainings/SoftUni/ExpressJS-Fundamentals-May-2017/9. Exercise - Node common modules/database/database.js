let data = [];

module.exports = {
  initialize: () => {
    // handle JSON
  },
  save: (image) => {
    image.id = data.length + 1;
    data.push(image);
  },
  getAll: () => {
    return data.slice(0);
  }
};
