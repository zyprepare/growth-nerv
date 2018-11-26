/* eslint-disable */

/**
 * uaHelper
 * userAgent相关判定
 */
var uaHelper = {
  /**
   * 是否是小于等于ie8的环境
   * @returns {boolean}
   */
  lteIE8: function () {
    var DEFAULT_VERSION = 8;
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie") > -1;
    var safariVersion;
    if (isIE) {
      safariVersion = parseInt(ua.match(/msie ([\d.]+)/)[1], 10);
    }
    return safariVersion <= DEFAULT_VERSION;
  }
};

export default uaHelper;
