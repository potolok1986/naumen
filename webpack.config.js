const path = require('path');
const distPath = path.join(__dirname, "dist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		index: `${distPath}/index.js`
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					}, {
						loader: "css-loader",
						options: {sourceMap: true}
					}, {
						loader: "postcss-loader",
						options: {
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {sourceMap: true}
					}
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: [{
							loader: 'vue-style-loader'
						}, {
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						}],
						scss: [{
							loader: 'vue-style-loader'
						}, {
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						}, {
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}]
					},
				}
			}, {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	output: {
		path: path.join(__dirname, "build"),
		publicPath: "/",
		filename: '[name].js'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `css/style.css`
		}),
	],
	resolve: {
		alias: {
			'@': distPath,
		},
	},
};