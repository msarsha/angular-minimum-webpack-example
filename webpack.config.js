var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //entry file to begin bundling
  entry: "./src/main.browser.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    //tells webpack to automaticlly resolve extensions
    //for example: import * from 'my-component'
    //no need to specify the .ts extension
    extensions: ['.ts', '.js']
  },
  module: {
    //loaders goes here
    rules: [
      {
        //awesome-typescript-loader - used to transpile ts to js.
        //angular2-template-loader - used to replace temaplteUrl and styleUrls in component metadata 
        //                           to inline template and styles with require statements.
        test: /\.ts$/,
        loader: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        //raw-loader - will handle all require(foo.css | foo.html) statements created by the angular2-template-loader
        //             and replace this with plain text.                      
        test: /\.(css|html)$/,
        loader: 'raw-loader',
        exclude: [root('./src/index.html')]
      }
    ]
  },
  plugins: [
    //htmlWebpackPlugin - will generate index.html and inject the bundle inside it.
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      //fix for webpack warnings - angular/11580

      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      root('./src'), // location of your src
      {}
    )
  ],
  devServer: { 
    // when using html 5 history api this options helps navigate back to index.html for 404 responses.
    historyApiFallback: true 
  }
}

function root(__path) {
  return path.join(__dirname, __path);
}