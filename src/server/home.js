import requestHelper from './request'

/**
 * 异步请求数据
 * @param {Object} data
 */
export const getData = (data) => {
  const request = requestHelper()

  return request({
    type: 'GET',
    // isAbsoluteUrl: false,
    url: '/fuli/area/list.html',
  })
}
