import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import webpack from 'webpack';
import WebpackProgressBarPlugin from 'progress-bar-webpack-plugin';

export default env => {
	return {
		entry: ['babel-polyfill', resolve(__dirname, '../', 'src', 'index.js')],
		target: 'electron-renderer',
		output: {
			filename: 'src/js/[name].bundle.[hash].js',
			path: resolve(__dirname, '../', 'app'),
			publicPath: env === 'production' ? '' : '/',
			libraryTarget: 'commonjs2',
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader',
					query: {
						presets: ['react', 'env', 'stage-2'],
						plugins: ['react-html-attrs', 'transform-decorators-legacy'],
					},
				},
				{
					test: /\.sass?$/,
					loader: 'style-loader!css-loader!sass-loader',
				},
				{
					test: /\.(jpe?g|png|gif)$/,
					loader: 'url-loader',
					options: {
						name: './src/images/[name]-[hash].[ext]',
						limit: 100000,
					},
				},
				{
					test: /\.(woff|otf|woff2|ttf|eot|svg)$/,
					loader: 'url-loader',
					options: {
						name: './src/fonts/[name]-[hash].[ext]',
						limit: 100000,
					},
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.sass', '.jpg', '.otf'],
			modules: [resolve(__dirname, '../', 'src'), resolve(__dirname, '../', 'node_modules')],
		},
		plugins: [
			new WebpackProgressBarPlugin(),
			new HtmlWebpackPlugin({
				template: resolve(__dirname, '../', 'public', 'index.html'),
				filename: 'index.html',
			}),
			new CopyWebpackPlugin([
				{
					from: resolve(__dirname, '../', 'public', 'main.js'),
					to: resolve(__dirname, '../', 'app'),
				},
				{
					from: resolve(__dirname, '../', 'public', 'update.html'),
					to: resolve(__dirname, '../', 'app', 'update'),
				},
				{
					from: resolve(__dirname, '../', 'src', 'resources', 'icons', 'electron', 'logo.png'),
					to: resolve(__dirname, '../', 'app', 'update'),
				},
				{
					from: resolve(__dirname, '../', 'src', 'resources', 'fonts', 'Esphimere-Bold.otf'),
					to: resolve(__dirname, '../', 'app', 'update'),
				},
				{
					from: resolve(__dirname, '../', 'src', 'resources', 'fonts', 'Esphimere.otf'),
					to: resolve(__dirname, '../', 'app', 'update'),
				},
			]),
			new webpack.DefinePlugin({
				'process.env.PLATFORM': JSON.stringify(process.argv[2]),
			}),
		],
	};
};
