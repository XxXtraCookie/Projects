const homePageHandler = require('./home-page');
const faviconHandler = require('./favicon');
const staticFilesHandler = require('./static-files');
const imageUploadHandler = require('./image-upload');

module.exports = [
  homePageHandler,
  faviconHandler,
  imageUploadHandler,
  staticFilesHandler,
]
