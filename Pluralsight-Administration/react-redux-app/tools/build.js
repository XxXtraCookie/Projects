import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading)

/* eslint-disable no-console */

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {  // so a fatal error occured. Stop here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow)); // eslint-disable-line
  }

  console.log(`webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('Your app has been completed in production mode and written to /dist. It\'s ready to roll!'.green);

  return 0;
});
