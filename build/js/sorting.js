var sortingOpener = document.querySelector('.sorting__opener');
var sortingDropdown = document.querySelector('.sorting__dropdown');

sortingOpener.addEventListener('click', function (event) {
  if(!sortingDropdown.classList.contains('is-open')) {
    sortingDropdown.classList.add('is-open');
  } else {
    sortingDropdown.classList.remove('is-open');
  }
});
