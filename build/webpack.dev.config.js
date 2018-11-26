const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');
const proxyConfig = require('../config/proxy')
const mockRouter = require('../mock/router')

module.exports = merge(config, {
  devServer: {
    port: 8081,
    proxy: {
      ...proxyConfig,
      ...mockRouter
    }
  }
})
