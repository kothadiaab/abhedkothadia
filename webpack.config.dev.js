import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, // Enables the debug informaion
  devtool: 'cheap-module-eval-source-map', // dev tool for application
  noInfo: false, // Display all the files it is bundling
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // built in to webpack for hot relaod
    '/src/index' //index.jsx file
  ],
  target: 'web' // bunlde up the code in way browser understand.. other:'node'
  'output': {
    path: __dirname + '/dist', // Note: creates a file ina memory. Physical files are created with build process
    publicPath: '/',
    filename: 'build.js'
  },
  'devServer': { //tels where our code is.
    contentbase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable us to replace mobule without broswer reload
    new webpack.NoErrorsPlugin() //shows error message in broswer
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ],
  }
};
