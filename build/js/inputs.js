document.addEventListener('DOMContentLoaded', function() {
  let inputs = document.querySelectorAll('.input-group__input');

  inputs.forEach((input) => {
    if(input.value.length > 0) {
      input.classList.add('is-filled');
    } else {
      input.classList.remove('is-filled');
    }

    input.addEventListener('input', function (event) {
      if(event.target.value.length > 0) {
        input.classList.add('is-filled');
      } else {
        input.classList.remove('is-filled');
      }
    });
  });
});
