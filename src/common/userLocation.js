/* eslint-disable */

/**
 * 获取用户地址公共组件构造函数
 * @param opts
 * @constructor
 */
function UserLocation(opts) {
  /**
   * 组件API默认配置
   * callbackFn：回调函数
   * @type {{callbackFn: null}}
   */
  var defOpts = {
    callbackFn: null
  };

  this.opts = $.extend({}, defOpts, opts);
  this.init();
}

$.extend(UserLocation.prototype, {
  /**
   * 初始化
   */
  init: function () {
    if (!window.pageConfig.area) {
      this.getArea();
    }
    else {
      this.callbackRun();
    }
  },
  /**
   * 根据用户cookie中的ipLoc-djd字段获取当前用户的地域信息
   */
  getArea: function () {
    var cookie = document.cookie;
    var pattern = "(?:; )?ipLoc-djd=([^;]*);?";

    if (new RegExp(pattern).test(cookie)) {
      var area = RegExp.$1.replace(/-/g, ',');

      window.pageConfig.area = area.indexOf('.') !== -1 ? area.substring(0, area.indexOf('.')) : area;
      this.callbackRun();
    }
    else {
      this.getLbsLocation();
    }
  },
  /**
   * 获取LBS服务提供的基于GIS、IP的定位信息
   * http://lbsyun.m.jd.com/doc
   * 参数说明：
   * type：默认使用国家标准std
   * appid：必传项，需要申请分配，联系shuyi3或者zhoulongting
   * isdefaultipaddr：1表示如果经纬度参数没有，以当前客户端的IP地址做定位
   */
  getLbsLocation: function () {
    var self = this;

    $.ajax({
      url: '//lbsapi.m.jd.com/gis',
      data: {
        appid: '5266a504ef4688eb764cc10365aff096',
        isdefaultipaddr: 1
      },
      dataType: "jsonp",
      success: function (data) {
        if (data.code === 0) {
          window.pageConfig.area = data.provinceid + ',' + data.cityid + ',' + data.districtid + ',' + data.townid;
        }
      },
      error: function () {
      },
      complete: function () {
        self.callbackRun();
      }
    }
    )
  },
  /**
   * 运行callback函数
   */
  callbackRun: function () {
    typeof this.opts.callbackFn === 'function' && this.opts.callbackFn();
  }
});

export default UserLocation;
