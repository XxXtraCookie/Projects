let data = [];

module.exports = {
  save: (image) => {
    image.id = data.length + 1;
    data.push(image);
  }
};
