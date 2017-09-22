const {resolve} = require('path');

module.exports = {
  publicPath: '/',
  clientSourcePath: resolve(__dirname, '..', 'src'),
  clientBuildPath: resolve(__dirname, '..', 'build'),
  clientBuildDevPath: resolve(__dirname, '..', 'build-dev') // to store cached dev files
};
