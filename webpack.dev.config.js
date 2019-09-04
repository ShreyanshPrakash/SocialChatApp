const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  watch : true,
  entry: {
    app: './index.js'
    // child: './src/child.js'
  },
  // entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist/FrontEnd'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    // chunkFilename: '[name].[contenthash].js',
  },
  target: 'web',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all'
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[name].vendor.js',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                sourceMap : true,
                plugins: ["@babel/plugin-syntax-dynamic-import"]
                // sourceMap: process.env.NODE_ENV !== 'production'
            }
          }]
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader ,'css-loader', 'sass-loader']         
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css",
    }),
  ]
}