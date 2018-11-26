/* eslint-disable */

import UserLocation from './userLocation'

var priceLazyload = {
  /**
   * node：价格懒加载节点选择器，默认为属性选择器[data-lazy-price="vip"]，该字段必须传属性选择器
   * skuIdAttr：保存商品skuId的属性名，默认为data-sku-id
   * 根据接口文档，属性值必须为J_(skuid)
   * 例：<div class="sku-price" data-sku-id="J_2788622" data-lazy-price="vip"></div>
   *
   * hidePlusPriceAttr：隐藏plus价格的属性名，默认为data-hide-plus-price
   * 默认展示plus价格，若需隐藏，则在dom中配置hidePlusPriceAttr属性参数，值不能为空
   * 例：<div class="hide-plus-price" data-sku-id="J_2788622" data-lazy-price="vip" data-hide-plus-price="yes"></div>
   *
   * reportSkuAttr：上报无效sku的属性名，默认为data-report-sku
   * 默认不上报，若需上报，则在dom中配置reportSkuAttr属性参数，值不能为空
   * 例：<div class="report-sku" data-sku-id="J_2788622" data-lazy-price="vip" data-report-sku="yes"></div>
   */
  defaultOpts: {
    node: '[data-lazy-price="vip"]',
    skuIdAttr: 'data-sku-id',
    hidePlusPriceAttr: 'data-hide-plus-price',
    reportSkuAttr: 'data-report-sku'
  },
  opts: '',
  /**
   * 区域
   */
  area: '',
  /**
   * 商品价格节点
   */
  nodes: [],
  /**
   * 存储sku列表的对象，方便去重处理
   */
  skuJson: {},
  /**
   * 一次加载sku最大数量，根据价格接口设定
   */
  maxCount: 10,
  /**
   * 每次加载的数量
   */
  currentCount: 0,
  /**
   * 是否还有符合懒加载条件的商品，默认为false，若为true则在接口调用后再次触发load方法
   */
  loadMore: false,
  /**
   * 获取价格的地址
   * http://cf.jd.com/pages/viewpage.action?pageId=34211539
   */
  url: "//p.3.cn/prices/mgets",
  /**
   * 初始化
   */
  win: null,
  NO_PRICE_FLAG: "暂无报价",
  /**
   * 程序入口
   * @param opts
   */
  init: function (opts) {
    var self = this;

    this.opts = $.extend({}, this.defaultOpts, opts);
    this.win = $(window);
    this.nodes = $(this.opts.node);

    new UserLocation({
      callbackFn: function () {
        self.area = window.pageConfig.area ? window.pageConfig.area.replace(/,/g, '_') : '';
        self.load();
        self.addEvent();
      }
    });
  },
  /**
   * 给win添加事件，主要处理scroll resize 事件
   */
  addEvent: function () {
    var self = this;

    this.win.bind("scroll resize", function () {
      self.nodes = $(self.opts.node);
      self.load();
    });
  },
  /**
   * 价格加载
   */
  load: function () {
    if (!this.nodes.length) {
      return;
    }

    this.unique();

    var skuArr = [];

    // 将sku列表对象转换为数组
    for (var sku in this.skuJson) {
      if (this.skuJson.hasOwnProperty(sku)) {
        skuArr.push(this.skuJson[sku]);
      }
    }

    if (skuArr.length) {
      this.getPrice({
        skuids: skuArr.join(','),
        area: this.area
      });
    }
  },
  /**
   * 数据过滤，去除重复的sku
   */
  unique: function () {
    var self = this;

    this.skuJson = {};
    this.currentCount = 0;

    this.nodes.each(function (index, item) {
      var target = $(item);
      var sku = target.attr(self.opts.skuIdAttr);

      if (self.inviewport(target) && target.attr('data-loading') !== 'loading' && !self.skuJson[sku]) {
        if (self.currentCount < self.maxCount) {
          // 添加data-loading属性，避免sku重复请求
          target.attr('data-loading', 'loading');
          self.skuJson[sku] = sku;
          self.currentCount++;
          self.loadMore = false;
        }
        else {
          self.loadMore = true;
        }
      }
    });
  },
  /**
   * 验证价格节点是否在可视区域
   * @param element
   * @returns {boolean}
   */
  inviewport: function (element) {
    return element.offset().top - this.win.scrollTop() < this.win.height() + 100;
  },
  /**
   * 获取真实的价格
   * @param data
   */
  getPrice: function (data) {
    var self = this;

    $.ajax({
      url: self.url,
      dataType: "jsonp",
      data: data,
      success: function (data) {
        if (data && data.length) {
          self.updatePrice(data);
        }

        if (self.loadMore) {
          self.nodes = $(self.opts.node);
          self.load();
        }
      },
      error: function () {
        self.nodes.removeAttr('data-loading');
      }
    }
    )
  },
  /**
   * 更新价格UI
   * @param skus
   */
  updatePrice: function (skus) {
    var self = this;
    var reportSkuJson = {}; // 上报异常sku列表对象

    $(skus).each(function (index, item) {
      $.extend(reportSkuJson, self.renderPriceView(item));
    });

    this.reportSku(reportSkuJson);
  },
  /**
   * 更新显示价格UI层
   * @param data
   * @returns {{}}
   */
  renderPriceView: function (data) {
    var self = this;
    var sku_id = data.id;
    var target = $(this.opts.node + '[' + this.opts.skuIdAttr + '="' + sku_id + '"]');
    var reportSkuJson = {};  // 上报异常sku列表对象

    target.each(function (index, item) {
      var priceHtml = '';

      /**
       * 前台京东价可能返回小于0的价格，做兼容处理
       */
      if (data.p <= 0 || data.p === self.NO_PRICE_FLAG) {
        priceHtml = '<span class="jd-price">' + self.NO_PRICE_FLAG + '</span>';

        if ($(item).attr(self.opts.reportSkuAttr)) {
          var skuId = sku_id.split('_')[1];

          if (!reportSkuJson[skuId]) {
            reportSkuJson[skuId] = skuId;
          }
        }
      } else {
        priceHtml = '<span class="jd-price">¥<span class="num">' + data.p + '</span></span>';

        /**
         * PLUS价格
         */
        if (!$(item).attr(self.opts.hidePlusPriceAttr) && data.tpp && data.tpp > 0) {
          priceHtml += '<span class="plus-price">' + data.tpp + '<span class="icon-plus"></span></span>'
        }
      }

      $(item).html(priceHtml);
      $(item).removeAttr(self.opts.node.substring(1, self.opts.node.indexOf('=')));
      $(item).removeAttr('data-loading');
    });

    return reportSkuJson;
  },
  /**
   * 上报sku
   * @param reportSkuJson
   */
  reportSku: function (reportSkuJson) {
    var reportSkuArr = [];  // 上报异常sku数组

    // 将sku列表对象转换为数组
    for (var sku in reportSkuJson) {
      if (reportSkuJson.hasOwnProperty(sku)) {
        reportSkuArr.push(reportSkuJson[sku]);
      }
    }

    if (!reportSkuArr.length) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "/sign/hideBiSku",
      dataType: "json",
      data: {
        skuStr: reportSkuArr.join(',')
      },
      success: function (data) {
      },
      error: function () {
      }
    }
    );
  }
};

export default priceLazyload;
