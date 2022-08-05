const path = require("path");

module.exports = {
	entry: "./src/js/main.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[hash][ext][query]",
	},

	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: () => [require("autoprefixer")],
							},
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
		],
	},
	devtool: "eval-source-map",
	devServer: {
		port: 3010,
		static: {
			directory: "./src",
		},
		historyApiFallback: true,
		hot: true,
	},
	mode: "development",
};
