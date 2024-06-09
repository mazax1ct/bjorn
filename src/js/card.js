document.addEventListener('DOMContentLoaded', function() {
  var cardsImages = document.querySelectorAll('.js-card-images');

  cardsImages.forEach((cardImages) => {
    var handlers = cardImages.querySelectorAll('.js-card-image-handler');
    var images = cardImages.querySelectorAll('.js-card-image');
    var pager = cardImages.querySelectorAll('.js-card-image-num');

    handlers.forEach((handler, index) => {
      handler.addEventListener('mouseover', function (event) {
        images.forEach((image) => {
          image.classList.remove('is-active');
        });

        pager.forEach((pager) => {
          pager.classList.remove('is-active');
        });

        images[index].classList.add('is-active');
        pager[index].classList.add('is-active');
      });
    });
  });
});
