var path = require('path');

module.exports = {
  context: __dirname + "/dev",
  entry: "./scripts/core/client.jsx",
  target: "electron",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_module)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.sass?$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ],
  },
  output: {
    path: __dirname + "/app/src/scripts/",
    filename: "client.min.js",
    libraryTarget: "commonjs2",
  },
  externals: {
    'electron-edge': {
      commonjs2: 'electron-edge',     
    }
  }
}
