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

let startX;
let isScrolling = false;
let scrollX = 0; // Текущая позиция скролла

body.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isScrolling = true;
});

head.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isScrolling = true;
});

body.addEventListener('touchmove', (e) => {
    if (!isScrolling) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    // Определите направление и сместите элемент
    // Этот пример очень упрощен, для более сложной логики понадобится
    // хранить начальное значение scrollLeft и обновлять его
    head.scrollLeft -= deltaX; // Смещение влево/вправо
    startX = currentX; // Обновляем стартовую позицию для следующего шага
});

head.addEventListener('touchmove', (e) => {
    if (!isScrolling) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    // Определите направление и сместите элемент
    // Этот пример очень упрощен, для более сложной логики понадобится
    // хранить начальное значение scrollLeft и обновлять его
    body.scrollLeft -= deltaX; // Смещение влево/вправо
    startX = currentX; // Обновляем стартовую позицию для следующего шага
});

body.addEventListener('touchend', () => {
    isScrolling = false;
});

head.addEventListener('touchend', () => {
    isScrolling = false;
});
