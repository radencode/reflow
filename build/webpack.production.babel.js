import { resolve } from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';
import config from './webpack.config.babel.js';
import webpack from 'webpack';

export default merge(config, {
	externals: {
		'electron-edge-js': {
			commonjs2: 'electron-edge-js',
		},
	},
	plugins: [
		new CleanWebpackPlugin(['src'], { root: resolve(__dirname, '../', 'app') }),
		new UglifyJSPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),
	],
});
