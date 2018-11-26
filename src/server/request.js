/**
 * 请求处理，防止多次触发数据请求
 * @author zhouyun6@jd.com
 * @createDate 2018-11-26
 */

import send from '@/common/site'
import log from '@/common/log'

export default function request() {
  // 是否正在请求数据
  let isRequest = false

  return (opts) => {
    if (isRequest) {
      return
    }

    isRequest = true

    return new Promise((resolve, reject) => { // eslint-disable-line
      let obj = {
        callSuccess(data) {
          isRequest = false
          resolve(data)
        },
        callError(err) {
          isRequest = false
          reject(err)
        }
      }

      obj = Object.assign({}, obj, opts)
      log('request options: ', obj)

      send(obj)
    })
  }
}
