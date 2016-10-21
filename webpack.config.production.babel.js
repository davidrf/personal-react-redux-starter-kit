import autoprefixer from 'autoprefixer';
import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import values from 'postcss-modules-values';
import webpack from 'webpack';

export default {
  entry: {
    bundle: [
      'normalize.css/normalize.css',
      'babel-polyfill',
      'whatwg-fetch',
      './src/main.js'
    ]
  },
  output: {
    path: './build',
    filename: "[name]-[hash].js",
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          ['css?modules&importLoaders=1&camelCase', 'postcss'])
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: { name: 'static/media/[name].[hash:8].[ext]' }
      }
    ]
  },
  postcss() {
    return [
      autoprefixer,
      values
    ];
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__TEST__': JSON.stringify(false),
      '__DEVELOPMENT__': JSON.stringify(false),
      '__PRODUCTION__': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/static/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css"),
    new CleanPlugin('build')
  ],
  resolve: {
    root: `${__dirname}/src`
  },
};
