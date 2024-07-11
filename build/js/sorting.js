let sortingOpener = document.querySelector('.sorting__opener');
let sortingDropdown = document.querySelector('.sorting__dropdown');

sortingOpener.addEventListener('click', function (event) {
  if(!sortingDropdown.classList.contains('is-open')) {
    sortingDropdown.classList.add('is-open');
    sortingOpener.classList.add('is-active');
  } else {
    sortingDropdown.classList.remove('is-open');
    sortingOpener.classList.remove('is-active');
  }
});
