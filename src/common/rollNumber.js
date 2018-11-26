/* eslint-disable */

var RollNumber = function (container, config) {
  var self = this;
  self.container = $(container);
  self.number = self.container.text();

  if (!self.number || !parseInt(self.number, 10)) {
    return false;
  }

  self.height = container.height();
  self.lineHeight = container.css('lineHeight');
  self.config = $.extend({
    interval: 20,
    duration: 1
  }, config || {});

  self.timer = null;

  self.isSupportCssAnimation = self.checkCssAnimation();

  self._init();
};

RollNumber.prototype = {
  _init: function () {
    var self = this;
    var container = self.container;
    var threshold = 10;
    var num = self.container.text();
    var html = [];
    var arr = num.split('');
    var len = arr.length;
    var width = container.width();
    for (var i = 0; i < len; i++) {
      if (arr[i] == '.') {
        html.push(".");
        continue;
      }
      html.push('<div id="roll_' + i + '" class="roll-num" data-id="' + i + '" style="position:relative;display:inline-block;margin-right:-7px;height:' + self.height + 'px;overflow:hidden">');
      html.push(self.retuen10(threshold));
      html.push('</div>');
    }

    container.html(html.join(''));

    // self.play();
  },
  retuen10: function (num) {
    var self = this;
    var html = [];
    html.push('<div class="roll-list" style="position: relative;">');
    for (var i = 0; i < num; i++) {
      for (var j = 0; j < 10; j++) {
        html.push('<div style="height:' + self.height + 'px;">' + j + '</div>');
      }
    }
    html.push("</div>");
    return html.join('');
  },
  checkCssAnimation: function () {
    var animation = false,
      animationstring = 'animation',
      keyframeprefix = '',
      domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
      pfx = '',
      elm = document.createElement('div');

    if (elm.style.animationName !== undefined) {
      animation = true;
    }

    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }
    return animation;
  },
  play: function () {
    var self = this;
    var container = self.container;
    var isSupportCssAnimation = self.isSupportCssAnimation;

    var numberArr = self.number.split('');
    var lines = container.find('.roll-list');
    var len = lines.length;
    var listHeight;
    var duration = self.config.duration;
    for (var i = 0; i < len; i++) {
      listHeight = lines.eq(i).height();
      $('<div style="height:' + self.height + 'px;">' + numberArr[i] + '</div>').appendTo(lines.eq(i));
      if (isSupportCssAnimation) {
        // lines[i].style.transition='all '+(.9+i*.1)+'s ease-in .1s';
        // lines[i].style.transition='all ' + (duration - ((len - i - 1) * duration * 0.1)) + 's ease-in .1s';
        // console.log('tttt', 'all ' + (duration - ((len - i - 1) * duration * 0.1)) + 's ease-in .1s');
        // lines[i].style.transform='translate3d(0,-'+ listHeight +'px,0)';
        lines.eq(i).css({
          webkitTransition: 'all ' + (duration - ((len - i - 1) * duration * 0.1)) + 's ease-in .1s',
          transition: 'all ' + (duration - ((len - i - 1) * duration * 0.1)) + 's ease-in .1s',
          webkitTransform: 'translate3d(0,-' + listHeight + 'px,0)',
          transform: 'translate3d(0,-' + listHeight + 'px,0)'
          // transform: 'translateY(-'+ listHeight +'px)'
          // top: '-'+ listHeight +'px'
        })
      } else {
        lines.eq(i).animate({
          top: 0 - listHeight
        }, duration * 1000 - ((len - i - 1) * 100 * duration));
      }
    }
  }
};

export default RollNumber;
