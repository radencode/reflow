module.exports = {
  context: __dirname + "/dev",
  entry: "./scripts/client.js",
  target: "electron",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_module)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
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
    path: __dirname + "/app/src/scripts/",
    filename: "client.min.js"
  }
}
