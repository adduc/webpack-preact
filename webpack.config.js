var path = require('path');

module.exports = {
  mode: "production",
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
};
