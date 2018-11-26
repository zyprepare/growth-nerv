/* eslint-disable */

import UserLocation from './userLocation'

/**
 * 城市code码列表
 */
var JSON_CITY = {
  1: "北京",
  2: "上海",
  3: "天津",
  4: "重庆",
  5: "河北",
  6: "山西",
  7: "河南",
  8: "辽宁",
  9: "吉林",
  10: "黑龙江",
  11: "内蒙古",
  12: "江苏",
  13: "山东",
  14: "安徽",
  15: "浙江",
  16: "福建",
  17: "湖北",
  18: "湖南",
  19: "广东",
  20: "广西",
  21: "江西",
  22: "四川",
  23: "海南",
  24: "贵州",
  25: "云南",
  26: "西藏",
  27: "陕西",
  28: "甘肃",
  29: "青海",
  30: "宁夏",
  31: "新疆",
  32: "台湾",
  42: "香港",
  43: "澳门",
  52993: "港澳",
  84: "钓鱼岛",
  53283: "海外"
};

/**
 * 商品库存公共组件构造函数
 * @param opts
 * @constructor
 */
function Stock(opts) {
  /**
   * 组件API默认配置
   * node：库存的商品节点
   * skuIdAttr：节点上存储商品sku的属性，用于请求库存状态
   * callbackFn：成功回调函数
   * @type {{node: string, skuIdAttr: string, callbackFn: null}}
   */
  var defOpts = {
    node: '',
    skuIdAttr: 'data-sku-id',
    channelId: 1,
    area: '',
    callbackFn: null,
    errorCallbackFn: null
  };

  this.opts = $.extend({}, defOpts, opts);
  this.init();
}

$.extend(Stock.prototype, {
  /**
   * 初始化
   */
  init: function () {
    var self = this;

    this.nodes = $(this.opts.node);

    if (!this.nodes.length) {
      return;
    }

    new UserLocation({
      callbackFn: function () {
        self.opts.area = window.pageConfig.area ? window.pageConfig.area : '';
        self.load();
      }
    });
  },
  /**
   * 库存加载
   */
  load: function () {
    this.unique();

    var skuArr = [];

    // 将sku列表对象转换为数组
    for (var sku in this.skuJson) {
      if (this.skuJson.hasOwnProperty(sku)) {
        skuArr.push(this.skuJson[sku]);
      }
    }

    if (skuArr.length) {
      this.getStock(skuArr.join(','));
    }
  },
  /**
   * 数据过滤，去除重复的sku
   */
  unique: function () {
    var self = this;

    this.skuJson = {};
    this.nodes.each(function (index, item) {
      var target = $(item);
      var sku = target.attr(self.opts.skuIdAttr);

      if (!self.skuJson[sku]) {
        self.skuJson[sku] = sku;
      }
    });
  },
  /**
   * 获取库存状态
   * @param skuStr
   */
  getStock: function (skuStr) {
    var self = this;

    $.ajax({
      type: 'POST',
      url: '/product/queryStockState',
      data: {
        channelId: this.opts.channelId,
        area: this.opts.area,
        skuStr: skuStr
      },
      dataType: "json",
      success: function (data) {
        if (data && !$.isEmptyObject(data)) {
          self.renderStockView(data);

          typeof self.opts.callbackFn === 'function' && self.opts.callbackFn();
        }
      },
      error: function () {
        self.nodes.remove();
        typeof self.opts.errorCallbackFn === 'function' && self.opts.errorCallbackFn();
      }
    }
    )
  },
  /**
   * 渲染库存UI层
   * @param data
   */
  renderStockView: function (data) {
    var self = this;
    var areaName = JSON_CITY[data.area['1']];

    self.nodes.each(function (index, item) {
      var target = $(item);
      var skuId = target.attr(self.opts.skuIdAttr);

      if (data[skuId] && data[skuId].a === '34') {
        target.text(areaName + '无货');
      }
      else {
        target.remove();
      }
    });
  }
});

export default Stock;
