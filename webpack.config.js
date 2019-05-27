const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: "./src/index.js",
  output: {
    filename: "./main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

module.exports = webpackConfig;
