var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    bundle: './test'
  },
  output: {
    path: path.join(__dirname, 'test', 'dist'),
    publicPath: 'test/dist/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
