const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './client/index.jsx',
	output: {
		path: path.join(__dirname, 'client'),
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.s?css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
          name: '[name].[ext]',
          outputPath: './client/assets/fonts/'
        }
			}
		]
	}
}
