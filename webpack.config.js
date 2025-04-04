const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'), // The folder that will be deployed to GitHub Pages
    filename: 'bundle.js', // Main JavaScript bundle
    publicPath: './', // Ensure that the public path is relative (important for GitHub Pages)
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
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Ensure postcss-loader is included
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource', // Handling images
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'), // Template HTML file
      filename: 'index.html', // Output the HTML file to the /docs folder
      inject: 'body', // Inject the scripts just before the closing body tag
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/styles', to: 'styles' }, // Copy CSS from /src/styles to /docs/styles
        { from: 'src/assets', to: 'assets' }, // Copy images and other assets from /src/assets to /docs/assets
        { from: 'src/js', to: 'js' }, // Copy any JS files from /src/js to /docs/js
      ],
    }),
  ],
  devtool: 'eval-source-map', // For easier debugging
};
