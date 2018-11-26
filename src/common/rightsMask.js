/* eslint-disable */

/**
 * 会员权限弹窗
 */
import swiper from './mySwiper'
import './mCustomerScrollbar'
import './mCustomerScrollbar/index.css'
import './lib/jdf.dialog'

var rightsMask = function (activeIndex) {
  $("body").dialog({
    title: null,
    extendMainClass: 'modal-rights vip-dialog',
    opacity: 0.6,
    fixed: true,
    width: 594,
    source: $('#modalMask').html(),
    autoUpdate: true,
    onReady: function () {
      //自定义权益弹窗滚动条
      $(".info-wrapper").mCustomScrollbar({
        theme: "light-thick",
        scrollbarPosition: "outside"
      });
      new swiper(activeIndex);
    },
    onCancel: function () {
      $("body").css("overflow", "auto");
    }
  });
};

export default rightsMask;
