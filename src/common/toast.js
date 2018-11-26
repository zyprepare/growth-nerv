/* eslint-disable */

/**
 * Toast公共组件构造函数
 * @param options
 * @constructor
 */
function Toast(options) {
  /**
   * 组件API及默认配置
   * type：toast类型   1、error错误（默认配置），2、success成功
   * content：toast内容
   * isAutoDestroy：是否自动摧毁，默认为true
   * autoDestroyTime：自动摧毁时间
   * @type {{type: string, content: string, isAutoDestroy: boolean, autoDestroyTime: number}}
   */
  var defOptions = {
    type: 'error',
    content: '',
    isAutoDestroy: true,
    autoDestroyTime: 3000
  };

  this.options = $.extend(defOptions, options);
  this.init();
}

$.extend(Toast.prototype, {
  /**
   * 初始化
   */
  init: function () {
    this.destroy();
    this.render();
  },
  /**
   * 渲染toast弹窗
   */
  render: function () {
    var toastClass = this.options.type === 'error' ? 'toast-error' : 'toast-success';

    var toastTmp = [
      '<div id="toast" class="' + toastClass + '">',
      '<div class="icon-toast"></div>',
      '<div class="toast-content">' + this.options.content + '</div>',
      '</div>'
    ].join('');

    $('body').append(toastTmp);

    var $toast = $('#toast');

    $toast.css({
      'marginTop': -$toast.outerHeight() / 2,
      'marginLeft': -$toast.outerWidth() / 2
    });

    $toast.show();
    $toast.addClass('zoomIn animated');

    this.autoDestroy();
  },
  /**
   * 自动摧毁
   */
  autoDestroy: function () {
    if (!this.options.isAutoDestroy) {
      return;
    }

    var _this = this;

    if (!window.autoDestroyTimer) {
      window.autoDestroyTimer = setTimeout(function () {
        _this.destroy();
      }, this.options.autoDestroyTime);
    }
  },
  /**
   * 摧毁节点
   */
  destroy: function () {
    $('#toast').remove();
    clearTimeout(window.autoDestroyTimer);
    window.autoDestroyTimer = null;
  }
});

export default Toast;
