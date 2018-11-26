/**
 * 会员权限弹窗
 */
import swiper from '@/common/mySwiper'
import '@/common/mCustomerScrollbar'
import '@/common/lib/jdf.dialog'
import templete from './template'
import './index.scss'

var rightsMask = function (activeIndex) {
  $('body').dialog({
    title: null,
    extendMainClass: 'modal-rights vip-dialog',
    opacity: 0.6,
    fixed: true,
    width: 594,
    source: templete,
    autoUpdate: true,
    onReady: function () {
      //自定义权益弹窗滚动条
      $('.info-wrapper').mCustomScrollbar({
        theme: 'light-thick',
        scrollbarPosition: 'outside'
      });
      new swiper(activeIndex);
    },
    onCancel: function () {
      $('body').css('overflow', 'auto');
    }
  });
};

export default rightsMask;
