/* eslint-disable */

import constants from './constants'
import toast from './toast'

export default function (options) {
  var $btn = options.antiDuplicationBtn;
  var $container = options.container;
  options.url = (options.isAbsoluteUrl === false ? "" : constants.param.domain) + options.url;
  if (!options.data) options.data = {};

  options.success = function (data) {
    constants.fn.btnStatusManage.enable($btn);
    constants.fn.containerStatusManage.complete($container);
    if (!data) {
      if (options.needCommonErrorHandler) {
        new toast({
          type: 'error',
          isAutoDestroy: options.isAutoCloseErrorMsg || true,
          content: constants.str.systemError
        });
      }
      if (typeof options.callError === "function") {
        options.callError(data);
      }
      return;
    }

    if (typeof data === "string") {
      if ($container && $container.length == 1) {
        $container.html(data);
      }
      if (typeof options.callSuccess === "function") {
        options.callSuccess(data)
      }
      return;
    }

    if (data.success) {
      if (typeof options.callSuccess === "function") {
        options.callSuccess(data);
      }
    } else {
      /**
       * resultCode=101：用户未登录
       */
      if (data.resultCode == '101') {
        window.location.href = '//passport.jd.com/uc/login?' + encodeURIComponent(window.location.href);
        return;
      }
      /**
       * resultCode=1403：实名认证
       * 实名认证弹出提示框dialog，取消之前的toast弹窗，故添加resultCode判定
       */
      if (options.needCommonErrorHandler && data.resultCode != '1403') {
        new toast({
          type: 'error',
          isAutoDestroy: options.isAutoCloseErrorMsg || true,
          content: data.resultTips ? data.resultTips : constants.str.systemError
        });
      }
      if (typeof options.callError === "function") {
        options.callError(data);
      }
    }

    if (data.result && data.result.token) {
      pageConfig.token = data.result.token;
    }
  };
  options.error = function () {
    constants.fn.btnStatusManage.enable($btn);
    constants.fn.containerStatusManage.complete($container);
    if (options.needCommonErrorHandler) {
      new toast({
        type: 'error',
        isAutoDestroy: options.isAutoCloseErrorMsg || true,
        content: constants.str.netWorkError
      });
    }
    if (typeof options.callError === "function") {
      options.callError();
    }
  };

  var options = $.extend(true, { type: "GET", timeout: constants.param.timeout }, options);
  //默认注入token
  if (pageConfig.token) {
    if (!options.data) {
      options.data = {};
    }
    options.data.token = pageConfig.token
  }

  constants.fn.btnStatusManage.disabled($btn);
  constants.fn.containerStatusManage.loading($container);
  $.ajax(options);
};
