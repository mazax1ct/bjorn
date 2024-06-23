function sizesBlockClose() {
  let sizesBlockOpen = document.querySelector('.card__sizes.is-open');

  if (sizesBlockOpen != null && !sizesBlockOpen.contains(event.target)) {
    sizesBlockOpen.classList.remove('is-open');

    setTimeout(() => {
      document.removeEventListener('click', sizesBlockClose);
    }, 300);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let cardsImages = document.querySelectorAll('.js-card-images');
  let buyButtons = document.querySelectorAll('.js-buy-button');

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

  buyButtons.forEach((buyButton, index) => {
    let parentCard = buyButton.closest('.card');
    let sizesBlock = parentCard.querySelector('.card__sizes');

    buyButton.addEventListener('click', function (event) {
      let sizesBlockOpen = document.querySelector('.card__sizes.is-open');

      event.preventDefault();

      if(sizesBlockOpen != null) {
        sizesBlockOpen.classList.remove('is-open');

        document.removeEventListener('click', sizesBlockClose);
      }

      sizesBlock.classList.add('is-open');

      setTimeout(() => {
        document.addEventListener('click', sizesBlockClose);
      }, 300);
    });
  });
});
