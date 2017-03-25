var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.browser.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      root('./src'), // location of your src
      {}
    )
  ]
}

function root(__path) {
  return path.join(__dirname, __path);
}