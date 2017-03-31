var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
  		{
  			test: /\.jsx?/, 	//tests for all files with types .js or .jsx
  			include: APP_DIR,	//searches only in the app directory
  			loader: 'babel-loader'
  		}
  	]
  }
};

module.exports = config;