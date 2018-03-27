import merge from 'webpack-merge';
import config from './webpack.config.babel.js';

export default merge(config, {
	devServer: {
		contentBase: './sever',
		compress: true,
		inline: true,
		port: 3000,
		host: 'localhost',
		stats: {
			chunkModules: false,
		},
		historyApiFallback: true,
	},
});
