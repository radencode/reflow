module.exports = {
  context: __dirname + "/dev",
  entry: "./js/client.js",
  target: "electron",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_module)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs']
        }
      },
      {
        test: /\.sass?$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/app/src/js/",
    filename: "client.min.js"
  }
}
