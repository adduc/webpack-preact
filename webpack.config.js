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
