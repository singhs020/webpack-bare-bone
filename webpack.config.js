const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [{
      "enforce": "pre",
      "test": /\.js$/,
      "exclude": /node_modules/,
      "use": "eslint-loader"
    }, {
      "test": /\.js$/,
      "exclude": /node_modules/,
      "use": "babel-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: "body"
    })
  ],
  devServer: {
    contentBase: "./dist",
    port: 3000,
  } 
};