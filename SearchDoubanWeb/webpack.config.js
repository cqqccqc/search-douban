var webpack = require('webpack');
// var ignoreFiles = new webpack.IgnorePlugin(/\.\/jquery-last.js$/);
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');

var srcPath = './public/src/';
var libPath = './node_modules/';
var bulidPath = './public/assets/';

module.exports = {
  entry: {
    index: srcPath + 'index.es',
    vendor: ['jquery', libPath+'bootstrap/dist/css/bootstrap.min.css', libPath+'bootstrap/dist/js/bootstrap.min.js']
  },
  output: {
    path: bulidPath,
    filename: '[name].js'
  },

  plugins: [
      commonsPlugin,
      new ExtractTextPlugin("[name].css")
    ],
  
  
  module: {
    loaders: [
	  // 提取css
	  { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      //.css 文件使用 style-loader 和 css-loader 来处理
      //{ test: /\.css$/, loader: 'style-loader!css-loader' },
	  // es6 use babel-loader
	  { test: /\.es$/, loader: 'babel-loader'},
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      { test: /\.scss$/, loader: 'style!css!scss?sourceMap'},
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
	  {test: /\.woff(2*)$/,   loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf$/,    loader: "file"},
      {test: /\.eot$/,    loader: "file"},
      {test: /\.svg$/,    loader: "file"},
	  // export jquery to window
	  //{test: libPath + 'jquery/jquery.min.js', loader: 'expose?jQuery'},
    ],
  },
  
  resolve: {
	  root: [srcPath, libPath],
	  extensions: ['', '.js', '.coffee', '.html', '.css', '.scss'],
	  alias: {
		  jquery: 'jquery/dist/jquery.min.js'
	  }
  }
};
