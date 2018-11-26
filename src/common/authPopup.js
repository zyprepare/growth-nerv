/* eslint-disable */

/**
 * 实名认证弹窗
 */

var authPopup = {
  /**
   * 实名提示文案
   */
  txt: '您未实名',
  /**
   * 初始化
   * @param txt
   */
  init: function (txt) {
    this.txt = txt || this.txt;

    this.renderAuthentication();
  },
  /**
   * 渲染实名认证弹窗模板
   */
  renderAuthentication: function () {
    var authenticationHtml = [
      '<span class="icon-warning"></span>',
      '<p class="txt">' + this.txt + '</p>',
      '<div class="btn-area">',
      '<a href="javascript:void(0);" class="btn-white close-dialog">暂不实名</a>',
      '<a href="//authpay.jd.com/auth/toAuthPage?source=366&directReturnUrl=' + window.location.href + '" target="_blank"" class="btn-red close-dialog" clstag="pageclick|keycount|vip_public_stat|auth">去实名认证</a>',
      '</div>'
    ].join('');

    $("body").dialog({
      title: null,
      extendMainClass: 'authentication-dialog vip-dialog zoomIn animated',
      width: 420,
      height: 230,
      opacity: 0.6,
      fixed: true,
      source: authenticationHtml,
      autoUpdate: true,
      onReady: function () {
        $(".close-dialog").click(function () {
          $.closeDialog();
        });
      }
    });
  }
};

export default authPopup;
