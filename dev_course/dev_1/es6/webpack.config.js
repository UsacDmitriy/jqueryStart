let path = require('path');

let conf = {
  entry: './es6/script.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.js',
    publicPath: 'js/'
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: '/node_modules/'        
      }
    ]
  }
};

module.exports = conf;