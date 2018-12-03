var baseWebpackServer = require('base-webpack-server')
var webpackConfig = require('./webpack.dev.config')
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = require('../config/proxy')
var mockTable = require('../mock/router')

baseWebpackServer(webpackConfig, {
  port: 3000,
  autoOpenBrowser: true,
  proxy: {
    config: {
      target: 'http://previp.jd.com',
    },
    proxyTable
  },
  mock: {
    mockTable
  }
})
