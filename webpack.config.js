const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js', 
    publicPath: './',
  },
  devServer: {
    static: path.resolve(__dirname, 'docs'),
    historyApiFallback: true,
    port: 5051,
    hot:true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], 
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/i,
      //   type: 'asset/resource', 
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'), 
      filename: 'index.html', 
      inject: 'body', 
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/styles', to: 'styles' }, 
        { from: 'src/assets', to: 'assets' },
        { from: 'src/js', to: 'js' }, 
      ],
    }),
  ],
  devtool: 'eval-source-map', 
};
