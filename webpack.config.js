var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [APP_DIR + '/index.jsx'],
  module: {
    preLoaders: [
      {
          test: /\.jsx?$/,
          include: APP_DIR,
          loader: 'eslint-loader'      
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};

module.exports = config;
