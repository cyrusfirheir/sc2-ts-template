"use strict";

const path = require("path");
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env) => {
	const mode = env.production ? "production" : "development";

	const plugins = [
		new VueLoaderPlugin()
	];
	if (env.production) plugins.push(new webpack.DefinePlugin({
		__VUE_OPTIONS_API__: false,
		__VUE_PROD_DEVTOOLS__: false,
	}));

	const watch = !env.production;
	
	return {
		mode,
		plugins,
		watch,
		target: "web",
		entry: "./src/scripts/index.ts",
		output: {
			path: path.resolve(__dirname, "src/__compiled"),
			filename: "index.js"
		},
		resolve: {
			extensions: [".ts", ".js"]
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					loader: "ts-loader",
					options: {
						appendTsSuffixTo: [/\.vue$/]
					}
				},
				{
					test: /\.vue$/,
					exclude: /node_modules/,
					use: "vue-loader"
				},
				{
					test: /\.scss$/,
					use: [
						'vue-style-loader',
						'css-loader',
						'sass-loader'
					]
				}
			]
		}
	};
};