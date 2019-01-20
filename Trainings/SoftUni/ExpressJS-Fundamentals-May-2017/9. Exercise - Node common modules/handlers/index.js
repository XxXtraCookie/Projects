const homePageHandler = require('./home-page');
const faviconHandler = require('./favicon');
const staticFilesHandler = require('./static-files');
const imageUploadHandler = require('./image-upload');
const statusHeaderHandler = require('./status-header');

module.exports = [
  statusHeaderHandler,
  homePageHandler,
  faviconHandler,
  imageUploadHandler,
  staticFilesHandler,
];
