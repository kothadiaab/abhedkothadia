const path = require("path");

module.exports = {
  entry: ["./src/js/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/build.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
