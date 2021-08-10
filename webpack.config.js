"use strict";

const path = require("path");

module.exports = (env) => {
	const mode = env.production ? "production" : "development";

	const watch = !env.production;
	
	return {
		mode,
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
					use: "ts-loader"
				}
			]
		}
	};
};