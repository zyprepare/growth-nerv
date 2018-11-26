/* eslint-disable */

/**
 * 项目工程所用常量constants
 */
var constants = {};

/**
 * 参数
 * timeout：超时时长
 * domain：工程域名
 * @type {{timeout: number, domain: string}}
 */
constants.param = {
  timeout: 30000,
  domain: '//' + window.location.hostname + ':' + window.location.port
};

/**
 * debug方法
 * @param obj
 */
constants.debug = function (obj) {
  if (console && console.log) {
    console.log(obj);
  }
};

/**
 * 正则
 * @type {{num: RegExp}}
 */
constants.reg = {
  num: /^[0-9]\d*$/ //数字
};

/**
 * 字符集合
 * @type {{paramsError: string, netWorkError: string, systemError: string, rangeError: string, required: string, formatNum: string, getMedalSuccess: string, scrollLoadEnd: string, scrollLoading: string, activing: string, eta: string, enterPwd: string}}
 */
constants.str = {
  paramsError: '参数错误',
  netWorkError: '抱歉，网络错误,请稍后再试！',
  systemError: '抱歉，系统异常，请稍后再试！',
  rangeError: '%s, 范围设置错误！',
  required: '请填写%s！',
  formatNum: '%s, 只能输入数字',
  getMedalSuccess: '恭喜您！成功领取了 <span>%s！</span>',
  scrollLoadEnd: '到底了！',
  scrollLoading: '数据加载中...',
  activing: '...活动正在进行中...',
  eta: '距离活动开始还有',
  enterPwd: '请输入密码！'
};

/**
 * 字符集合
 * @type {{formatStr: formatStr, btnStatusManage: {disabled: disabled, enable: enable, isDisabled: isDisabled}, containerStatusManage: {loading: loading, complete: complete, error: error}}}
 */
constants.fn = {
  formatStr: function (text) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    for (var i = 0, j = args.length; i < j; i++) {
      text = text.replace("%s", args[i]);
    }
    return text;
  },
  btnStatusManage: {
    disabled: function ($btn) {
      if (!$btn || $btn.length < 1) return;
      $btn.attr("disabled", "disabled").addClass("disabled").addClass("btn-loading");
    },
    enable: function ($btn) {
      if (!$btn || $btn.length < 1) return;
      $btn.removeAttr("disabled").removeClass("disabled").removeClass("btn-loading");
    },
    isDisabled: function ($btn) {
      if (!$btn || $btn.length < 1) return false;
      if ($btn.hasClass("disabled")) {
        return true
      }
      return false
    }
  },
  containerStatusManage: {
    loading: function ($container, msg) {
      if (!$container) return;
      if ($container.length == 1) {
        $container.addClass("block-loading").removeClass("status-network");
        if (typeof msg !== "undefined") {
          $container.html(msg);
        }
      }
    },
    complete: function ($container, msg) {
      if (!$container) return;
      if ($container.length == 1) {
        $container.removeClass("block-loading").removeClass("status-network");
        if (typeof msg !== "undefined") {
          $container.html(msg);
        }
      }
    },
    error: function ($container, msg) {
      if (!$container) return;
      if ($container.length == 1) {
        $container.removeClass("block-loading").addClass("status-network");
        if (typeof msg !== "undefined") {
          $container.html(msg);
        }
      }
    }
  }
};

export default constants;
