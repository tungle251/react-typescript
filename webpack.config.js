const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: { path: path.join(__dirname, 'dist'), filename: 'index.bundle.js' },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|dist)/,
            use: ['babel-loader'],
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /(node_modules|dist)/,
            use: ['ts-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
    }),],
  };