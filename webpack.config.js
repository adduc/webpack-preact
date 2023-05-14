const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
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
            presets: ['@babel/react'],
            plugins: [
              ["@babel/transform-react-jsx", { "pragma":"h" }]
            ]
          }
        }
      }
    ]
  },
};
