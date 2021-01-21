const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    publicPath: path.join(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `./src/index.html`)
    }),
  ],
};
