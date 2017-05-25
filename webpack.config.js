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
    extensions: ['.ts', '.js', '.css', '.html']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true']
      },
      {
        test: /\.(css|html)$/,
        loader: 'file-loader',
        exclude: [root('./src/index.html')]
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
  ],
  devServer: { historyApiFallback: true }
}

function root(__path) {
  return path.join(__dirname, __path);
}