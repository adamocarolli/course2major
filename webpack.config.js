const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './client/index.jsx',
	output: {
		path: path.join(__dirname, 'client'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}
