const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
// const ExtractTextPlugin = require('extract-text-webpack-plugin') // not for css
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: './index.js'
    // child: './src/child.js'
  },
  output: {
    path: path.join(__dirname, 'dist', 'FrontEnd'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  target: 'web',
//   devtool: 'source-map',
  // Webpack 4 does not have a CSS minifier, although
  // Webpack 5 will likely come with one
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true, // to improve build speed using multiple cores
        // sourceMap: true // set to true if you want JS source maps
      }),
    //   new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      // chunks: 'all'
      cacheGroups: {
        commons: {
          // filename: '[name].bundle.js',
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
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ["@babel/plugin-syntax-dynamic-import"]
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
            options: { minimize: true }
          }
        ]
      },
      {
        // Loads images into CSS and Javascript files
        test: /\.jpg$/,
        use: [{loader: "url-loader"}]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader ,'css-loader', 'sass-loader']          
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
       }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css",
    }),
  ]
}