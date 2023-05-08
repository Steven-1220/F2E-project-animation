const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    animation: './src/animation.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:6].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template/index.html'),
      filename: 'index.html',
      title: 'The F2E 活動網站',
    }),
    new CleanWebpackPlugin(),
  ],

  performance: {
    hints: false,
  },
};
