/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 *
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com>
 */

const body = document.querySelector('.compare__values');
const head = document.querySelector('.compare__cards');

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add'+EventListener;
    var removeEventListener = 'remove'+EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        // cloning into array since HTMLCollection is updated dynamically
        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed, scroller, cont) {
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function(e) {
                        if (!el.hasAttribute('nochilddrag') || _document.elementFromPoint(e.pageX, e.pageY) == cont) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function() {pushed = 0;}, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function(e) {
                        if (pushed) {
                            (scroller = el.scroller||el).scrollLeft -= newScrollX = (- lastClientX + (lastClientX=e.clientX));

                            if(scroller.classList.contains('compare__cards')) {
                                body.scrollLeft -= newScrollX;
                            }

                            if(scroller.classList.contains('compare__values')) {
                                head.scrollLeft -= newScrollX;
                            }

                            scroller.scrollTop -= newScrollY = (- lastClientY + (lastClientY=e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );

             })(dragged[i++]);
        }
    }

    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
}));

var compContentEl = $('.compare__values'),
    compHeaderEl = $('.compare__cards'),
    scrTimeout, scrollChange = function scrollChange() {
      if (compHeaderEl[0].scrollLeft != this.scrollLeft) {
        compHeaderEl.off('scroll');
        compHeaderEl.on('touchstart', function(e) {
          e.preventDefault()
        });
        compHeaderEl[0].scrollLeft = this.scrollLeft;
        clearTimeout(scrTimeout);
        scrTimeout = setTimeout(function() {
          compHeaderEl.on('scroll', scrollChange);
          compHeaderEl.off('touchstart')
        }, 50)
      } else if (compContentEl[0].scrollLeft != this.scrollLeft) {
        compContentEl.off('scroll');
        compContentEl.on('touchstart', function(e) {
          e.preventDefault()
        });
        compContentEl[0].scrollLeft = this.scrollLeft;
        clearTimeout(scrTimeout);
        scrTimeout = setTimeout(function() {
          compContentEl.on('scroll', scrollChange);
          compContentEl.off('touchstart')
        }, 50)
      }
    };

compHeaderEl.on('scroll', scrollChange);
compContentEl.on('scroll', scrollChange);

const prev = document.querySelector('.js-compare-prev');
const next = document.querySelector('.js-compare-next');

var comparisonItemWidth = $('.compare__cards .compare-card').eq(0).outerWidth() + 12,
    btnScroll = function btnScroll(direction) {
      var currScroll = Math.abs(Math.round(compContentEl[0].scrollLeft / comparisonItemWidth)),
        scrollTo = {};
      if (direction == 'next') {
        scrollTo.scrollLeft = (currScroll + 1) * comparisonItemWidth;
      } else {
        scrollTo.scrollLeft = (currScroll - 1) * comparisonItemWidth;
      }
      compContentEl.add(compHeaderEl).off('scroll').on('touchstart', function(e) {
        e.preventDefault()
      }).animate(scrollTo, 400, function() {
        clearTimeout(scrTimeout);
        scrTimeout = setTimeout(function() {
          compContentEl.add(compHeaderEl).on('scroll', scrollChange).off('touchstart')
        }, 50)
      })
    };

$(document).on('click', '.js-compare-prev', function() {
  btnScroll('prev')
});

$(document).on('click', '.js-compare-next', function() {
  btnScroll('next')
});
