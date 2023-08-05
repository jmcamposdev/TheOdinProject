const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
    static: './dist',
  },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
      template: './src/index.html',
      inject: 'body',
		}),
	],
  output: {
	filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
		clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};