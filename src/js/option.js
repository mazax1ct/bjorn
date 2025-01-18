document.addEventListener('DOMContentLoaded', function() {
  let options = document.querySelectorAll('.option');

  options.forEach((option) => {
    let optionToggler = option.querySelector('.js-option-toggler');

    optionToggler.addEventListener('click', function (event) {
      let option = optionToggler.closest('.option');
      let optionDropdown = option.querySelector('.option__dropdown');

      if(optionToggler.classList.contains('is-active')) {
        option.classList.remove('is-open');
        optionToggler.classList.remove('is-active');
      } else {
        option.classList.add('is-open');
        optionToggler.classList.add('is-active');
      }
    });

    let optionSizes = option.querySelectorAll('.js-option-size');

    optionSizes.forEach((size, index) => {
      size.addEventListener('click', function (event) {
        let option = size.closest('.option');
        let optionInput = option.querySelector('.option__input');
        let sizeValue = size.dataset.title;

        optionSizes.forEach((size) => {
          size.classList.remove('is-active');
        });

        optionSizes[index].classList.add('is-active');

        optionInput.value = sizeValue;

        option.classList.remove('is-open');
        optionToggler.classList.remove('is-active');
      });
    });

    let optionColors = option.querySelectorAll('.js-option-color');

    optionColors.forEach((color, index) => {
      color.addEventListener('click', function (event) {
        let option = color.closest('.option');
        let optionInput = option.querySelector('.option__input');
        let colorValue = color.dataset.title;

        optionColors.forEach((color) => {
          color.classList.remove('is-active');
        });

        optionColors[index].classList.add('is-active');

        optionInput.value = colorValue;

        option.classList.remove('is-open');
        optionToggler.classList.remove('is-active');
      });
    });
  });
});
