const path = require("path");

module.exports = {
	entry: "./src/js/main.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: path.resolve(__dirname, "dist"),
		port: 8080,
		hot: true,
	},
	module: {
		rules: [
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
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html/,

				type: "asset/resource",

				generator: {
					filename: "static/[hash][ext][query]",
				},
			},
		],
	},
};
