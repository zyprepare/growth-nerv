const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const config = require('../config')
// 打包后的静态资源发布地址
const publicPath = config.publicPath

module.exports = merge(baseConfig, {
  output: {
    publicPath
  }
})
