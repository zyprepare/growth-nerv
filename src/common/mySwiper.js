/* eslint-disable */

var mySwiper = function (activeIndex) {
  this.activeIndex = activeIndex ? activeIndex : 0;
  this._init();
};
mySwiper.prototype = {
  _init: function () {
    this._calc();
    this._initActive();
    this._disableClick();
    this._nextClick();
    this._prevClick();
    this._itemClick();
    this._imgInit(this.activeIndex);
    this._itemHover();
    this._activeContent(this.activeIndex);
    this._specialHover();
  },
  //初始化计算
  _calc: function () {
    this.itemLen = $("#rights-left .rights-item");
    this.perWidth = parseInt($(this.itemLen).css("width"));
    this.size = this.itemLen.size();
    this.maxSize = this.size * 100;
    $("#rights-left").css("width", this.maxSize);
  },
  //button按键disable处理
  _disableClick: function () {
    //当<5个时click添加disable属性
    if (this.size <= 5) {
      $("#btn-prev").addClass("disable");
      $("#btn-next").addClass("disable");
    }
  },
  //初始化时根据this.activeIndex确定左移右移，并确定prev和next的状态
  _initActive: function () {
    var _self = this;
    if (this.size <= 5) {
      return;
    }
    var distance = this.size - this.activeIndex;
    if (distance <= 5 && distance >= 0) {
      var rightItem = (this.size - 5) * _self.perWidth;
      rightItem = 0 - rightItem;
      var leftPx = rightItem + "px";
      $("#rights-left").css({ "left": leftPx });
      $("#btn-next").addClass("disable");
      return;
    }
    var rightItem = this.activeIndex * _self.perWidth;
    rightItem = 0 - rightItem;
    var leftPx = rightItem + "px";
    $("#rights-left").css({ "left": leftPx });
    if (this.activeIndex == 0) {
      $("#btn-prev").addClass("disable");
    }
  },
  //给next按键设置click时间
  _nextClick: function () {
    var _self = this;
    $("#btn-next").click(function () {
      //当disable时点击无效
      if ($(this).hasClass("disable")) {
        return;
      }
      if ($(this).hasClass("unClick")) {
        return;
      }
      _self._shadowAllHide();
      $(this).addClass("unClick");
      var index = $("#rights-left").css("left");
      index = parseInt(index);
      var left = index - _self.perWidth;
      var leftPx = left + "px";
      //当屏幕只剩5个时， 变成无法点击
      var absIndex = Math.abs(left);
      var overFlow = absIndex + _self.perWidth * 5;
      if (overFlow >= _self.maxSize) {
        $(this).addClass("disable");
      }
      var clickBtn = this;
      $("#rights-left").animate({ "left": leftPx }, 250, function () {
        $(clickBtn).removeClass("unClick");
        _self._specialHover();
        _self._activeHoverCheck();
      });
      $("#btn-prev").removeClass("disable");
    });

  },
  //给prev按键设置click事件
  _prevClick: function () {
    var _self = this;
    $("#btn-prev").click(function () {
      //当disable时点击无效
      if ($(this).hasClass("disable")) {
        return;
      }
      //这里进行快速点击时的封锁
      if ($(this).hasClass("unClick")) {
        return;
      }
      _self._shadowAllHide();
      $(this).addClass("unClick");
      var index = $("#rights-left").css("left");
      index = parseInt(index);
      var left = index + _self.perWidth;
      //当点击到最左侧时添加disable属性
      if (left == 0) {
        $(this).addClass("disable");
      }
      var leftPx = left + "px";
      var clickBtn = this;
      $("#rights-left").animate({ "left": leftPx }, 250, function () {
        $(clickBtn).removeClass("unClick");
        _self._specialHover();
        _self._activeHoverCheck();
      });
      $("#btn-next").removeClass("disable");
    });
  },
  //点击上面的时候active选中并将对应内容展示出来
  _itemClick: function () {
    var _self = this;
    $(".modal-rights .rights-item").click(function () {
      var activeItem = $(this);
      var activeNum = $(this).index();
      _self._specialActiveShadow(activeNum);
      $(".modal-rights .rights-item").not(activeItem).removeClass("active");
      //处理将其他的图标更换车成非选中状态
      var activeImg = $(".modal-rights .benefitImg").eq(activeNum);
      var otherImgs = $(".modal-rights .benefitImg").not(activeImg);
      $(otherImgs).each(function () {
        var src = $(this).attr("data-src");
        $(this).attr("src", src);
      });
      $(this).addClass("active");
      //将图标更换成选中状态
      var activeSrc = $(activeImg).attr("data-hover");
      $(activeImg).attr("src", activeSrc);
      $("#modalBenefit .rights-intro").hide();
      $("#modalBenefit .rights-intro").eq(activeNum).show();
    });
  },
  //检查左右按键是否处于disable状态
  _checkClick: function () {
    var _self = this;
    var leftPx = $("#rights-left").css("left");
    var left = parseInt(leftPx);
    if (left < 0) {
      $("#btn-prev").removeClass("disable");
    }
    var dis = this.maxSize + left;
    var max = _self.perWidth * 5;
    if (dis > max) {
      $("#btn-next").removeClass("disable");
    }
  },
  _itemHover: function () {
    var _self = this;
    $(".modal-rights .rights-item").hover(
      function () {
        var index = $(this).index();
        var hoverItem = $(".modal-rights .benefitImg").eq(index);
        var hoverSrc = $(hoverItem).attr("data-hover");
        $(hoverItem).attr("src", hoverSrc);
        /* _self._showShadow(index);*/

      },
      function () {
        if ($(this).hasClass("active")) {
          return;
        }
        var index = $(this).index();
        var hoverItem = $(".modal-rights .benefitImg").eq(index);
        var src = $(hoverItem).attr("data-src");
        $(hoverItem).attr("src", src);
        /* _self._hideShadow(index);*/
      });
  },
  //直接跳转到第几个item并且选中
  _moveTo: function (index) {
    this.activeIndex = index;
    this._initActive();
    this._disableClick();
    this._checkClick();
    this._nextClick();
    this._prevClick();
    this._activeContent(this.activeIndex);
    this._imgInit(this.activeIndex);
    this._specialHover();
  },
  //上面item点击下面内容显示
  _activeContent: function (index) {
    var _self = this;
    $("#modalBenefit .rights-item").removeClass("active");
    $("#modalBenefit .rights-item").eq(index).addClass("active");
    var active = $("#modalBenefit .rights-intro").eq(index).show();
    $("#modalBenefit .rights-intro").not(active).hide();
    _self._specialHover();
    _self._showShadow(index);
  },
  _imgInit: function (activeNum) {
    var activeImg = $(".modal-rights .benefitImg").eq(activeNum);
    var otherImgs = $(".modal-rights .benefitImg").not(activeImg);
    $(otherImgs).each(function () {
      var src = $(this).attr("data-src");
      $(this).attr("src", src);
    });
    $(this).addClass("active");
    //将图标更换成选中状态
    var activeSrc = $(activeImg).attr("data-hover");
    $(activeImg).attr("src", activeSrc);
  },

  _specialHover: function () {
    var _self = this;
    var left = $("#rights-left").css("left");
    left = Math.abs(parseInt(left));
    _self.specialShadowLeft = left / _self.perWidth;
    _self.specialShadowRight = _self.specialShadowLeft + 4;
  },
  _showShadow: function (hover) {
    var _self = this;
    if (hover == _self.specialShadowLeft) {
      var plus = $("#rights-left .rights-item").eq(hover);
      if ($(plus).is(".plus")) {
        $(".special-shadow-left-plus").show();
        return;
      }
      else {
        $(".special-shadow-left").show();
        return;
      }
    }
    if (hover == _self.specialShadowRight) {
      var plus = $("#rights-left .rights-item").eq(hover);
      if ($(plus).is(".plus")) {
        $(".special-shadow-right-plus").show();
        return;
      }
      else {
        $(".special-shadow-right").show();
        return;
      }
    }
  },
  _hideShadow: function (hover) {
    var _self = this;
    if (hover == _self.specialShadowLeft) {
      var plus = $("#rights-left .rights-item").eq(hover);
      if ($(plus).is(".plus")) {
        $(".special-shadow-left-plus").hide();
        return;
      }
      else {
        $(".special-shadow-left").hide();
        return;
      }
    }
    if (hover == _self.specialShadowRight) {
      var plus = $("#rights-left .rights-item").eq(hover);
      if ($(plus).is(".plus")) {
        $(".special-shadow-right-plus").hide();
        return;
      }
      else {
        $(".special-shadow-right").hide();
        return;
      }
    }
  },

  //当点击的时候，判断最左或最右显示阴影否，并且显示什么样的
  _specialActiveShadow: function (activeNum) {
    var _self = this;
    //左阴影去掉
    if (activeNum != _self.specialShadowLeft) {
      $(".special-shadow-left").hide();
      $(".special-shadow-left-plus").hide();
    }
    //右阴影去掉
    if (activeNum != _self.specialShadowRight) {
      $(".special-shadow-right").hide();
    }
    //plus阴影
    if (!($(activeNum).is(".plus"))) {
      $(".special-shadow-right-plus").hide();
    }
    //左阴影显示
    if (_self.specialShadowLeft == activeNum) {
      var plus = $("#rights-left .rights-item").eq(activeNum);
      if ($(plus).is(".plus")) {
        $(".special-shadow-left-plus").show();
      }
      else {
        $(".special-shadow-left").show();
      }
      return;
    }
    //右阴影显示
    if (_self.specialShadowRight == activeNum) {
      var plus = $("#rights-left .rights-item").eq(activeNum);
      if ($(plus).is(".plus")) {
        $(".special-shadow-right-plus").show();
      }
      else {
        $(".special-shadow-right").show();
      }
      return;
    }
  },
  _shadowAllHide: function () {
    $(".special-shadow-left").hide();
    $(".special-shadow-right-plus").hide();
    $(".special-shadow-left-plus").hide();
    $(".special-shadow-right").hide();
  },
  _activeHoverCheck: function () {
    var _self = this;
    _self._shadowAllHide();
    var activeNum = $("#rights-left .rights-item").filter(".active").index();
    _self._showShadow(activeNum);
  }
}

export default mySwiper;
