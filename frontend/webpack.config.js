const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env =
  dotenv.config({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
  }).parsed || {};

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
      constants: path.resolve(__dirname, 'src/utils/constants'),
      context: path.resolve(__dirname, 'src/utils/context'),
      interfaces: path.resolve(__dirname, 'src/utils/interfaces'),
      translation: path.resolve(__dirname, 'src/utils/translation'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),

    new webpack.DefinePlugin(envKeys),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
      serveIndex: false,
    },
    client: {
      overlay: true,
    },
  },
};
