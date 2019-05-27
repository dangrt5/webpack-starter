const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const webpackConfig = {
  entry: {
    index: ["@babel/polyfill", "./src/index.js"]
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    compress: true,
    port: 6969,
    watchContentBase: true
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
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss"]
  }
};

module.exports = webpackConfig;
