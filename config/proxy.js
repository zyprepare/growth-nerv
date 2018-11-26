module.exports = {
  '/test*': {
    target: 'http://api.m.jd.com/api',
    changeOrigin: true,
  },
  '/fuli/area/list.html': {
    target: 'http://previp.jd.com',
    pathRewrite: {
      '^/fuli/area/list.html': '/fuli/area/list.html'
    },
    changeOrigin: true,
    secure: false
  }
}
