const path = require('path');
const port = process.env.PORT || 3000;



const outputPath = path.join(__dirname, "dist")

const host = process.env.HOST || "localhost";

module.exports = {
	context: __dirname,
	mode: 'production',
	entry: './src/index.jsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
		fallback: {"path": require.resolve("path-browserify")}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		port,
        host: host,
		historyApiFallback: true,
		publicPath: '/dist/',
        watchOptions: {
            ignored: '/node_modules/'
        },
	},
	externals: [
		"child_process",
		"dns",
		"fs",
		"net",
		"tls",
		"os",
		"crypto"
	  ]
}
