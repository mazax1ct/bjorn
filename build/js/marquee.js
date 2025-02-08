document.addEventListener('DOMContentLoaded', function() {
  var marquee = document.querySelectorAll('.js-marquee');

  marquee.forEach((marquee) => {
    var marqueeEl = marquee.querySelectorAll('span');

    marqueeEl.forEach((marqueeEl) => {
      let marqueeElWidth = marqueeEl.getBoundingClientRect().width + 16;

      for (i = 0; i < 20; i++) {
        let clone = marqueeEl.cloneNode(true);
        marquee.appendChild(clone);
      };

      marquee.style.setProperty('--el_width', '-' + marqueeElWidth + 'px');
    });
  });
});
