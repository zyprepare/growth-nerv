const staticVertion = require('../package.json').version

module.exports = {
  outputPath: staticVertion,
  publicPath: '//static.360buyimg.com/vip_misc/vip2.0/',
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    port: 8081,
    autoOpenBrowser: true,
  }
}
