const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const { CheckerPlugin } = require('awesome-typescript-loader');
const createAppScripts = require('./build-utils/appScriptsGenerator');

const sourceRootPath = path.join(__dirname, 'src');
const distRootPath = path.join(__dirname, 'dist');
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const webBrowser = process.env.WEB_BROWSER ? process.env.WEB_BROWSER : 'chrome';

module.exports = {
	entry: {
		core: path.join(sourceRootPath, 'ts', 'core', 'index.ts'),
		...createAppScripts(path.join(sourceRootPath, 'ts', 'apps'))
	},
	output: {
		path: distRootPath,
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.json', '.css', '.scss'],
		alias: {
			'gxcore': path.resolve(__dirname, '/src/ts/core')
		}
	},
	optimization: {
		minimizer: [new TerserPlugin({
			parallel: true,
		})],
	},
	module: {
		rules: [
			{
				test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
				  {
					loader: "file-loader"
				  }
				]
			  },
			  {
				test: /\.(js|ts|tsx)?$/,
				loader: "awesome-typescript-loader",
				exclude: /node_modules/
			  },
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  "style-loader",
				  // Translates CSS into CommonJS
				  "css-loader",
				  // Compiles Sass to CSS
				  "sass-loader"
				]
			  },
			  {
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			  }
		]
	},
	plugins: [
		//new CleanWebpackPlugin(),
		new webpack.ProgressPlugin(),
		new CheckerPlugin(),

		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, 'html', 'multiple-app-render.html'),
			inject: 'body',
			filename: 'multiple-app-render.html',
			title: 'App 1 Test page',
			chunks: ['jqueryMultipleControlsApp'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, "html", "builder.html"),
			inject: "body",
			filename: "builder.html",
			title: "Builder",
			chunks: ["builder"]
		}),
		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, 'html', 'App1.html'),
			inject: 'body',
			filename: 'App1.html',
			title: 'App 1 Test page',
			chunks: ['app1'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, 'html', 'MaterialTest.html'),
			inject: 'body',
			filename: 'MaterialTest.html',
			title: 'Material Test  page',
			chunks: ['materialTestApp'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, 'html', 'App2.html'),
			inject: 'body',
			filename: 'App2.html',
			title: 'App 2 Test page',
			chunks: ['app2'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, 'html', 'Dashboard1.html'),
			inject: 'body',
			filename: 'Dashboard1.html',
			title: 'Dashboard1',
			chunks: ['dashboard1'],
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(sourceRootPath, 'assets'),
				to: path.join(distRootPath, 'assets'),
				test: /\.(jpg|jpeg|png|gif|svg)?$/,
			},
			{
				from: path.join(sourceRootPath, 'html', 'test-pages'),
				to: path.join(distRootPath, 'test-pages'),
				test: /\.(html|htm)?$/,
			},

		]),
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify(nodeEnv),
			'WEB_BROWSER': JSON.stringify(webBrowser),
		}),
	],
}

if (nodeEnv === 'watch') {
	module.exports.watch = true;
	//todo do something to watch

}

if (nodeEnv === 'production') {
	module.exports.plugins.push(new CleanWebpackPlugin({ verbose: true, dry: false }));
}
