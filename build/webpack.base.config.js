const merge = require('webpack-merge')
const makeWebpack = require('basewebpack')
const path = require('path')
const config = require('../config')
// 打包后的输出目录
const outputPath = config.outputPath

let basewebpack = merge(makeWebpack({
  mode: 1,
  outputPath,
  spritesConfig: {
    // sprite输出目录
    spritePath: path.join('src', 'assets')
  }
}), {
    resolve: {
      alias: {
        'react': 'nervjs',
        'react-dom': 'nervjs',
      }
    },
  })
// console.log('------------------')
// console.log(basewebpack.module.rules)
module.exports = basewebpack
