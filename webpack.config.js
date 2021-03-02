//@ts-check

'use strict';

const path = require('path');

/**@type {import('webpack').Configuration}*/
module.exports = {
	target: 'web',
	entry: './src/scripts/index.ts',
	output: {
		path: path.resolve(__dirname, 'src/__compiled'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			}
		]
	}
};