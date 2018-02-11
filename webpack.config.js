const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('Html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
   filename: 'css/style.css'
});

module.exports = {
  entry: ['./src/js/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/build.js'
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin(['dist']),
    extractPlugin
  ]
};
