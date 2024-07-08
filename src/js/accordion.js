document.addEventListener('DOMContentLoaded', function() {
  let accordionsTogglers = document.querySelectorAll('.js-accordion-toggler');

  accordionsTogglers.forEach((accordionToggler) => {
    accordionToggler.addEventListener('click', function (event) {
      let accordion = accordionToggler.closest('.accordion');
      let accordionBody = accordion.querySelector('.accordion__body');
      if(accordionToggler.classList.contains('is-open')) {

        accordionBody.style.height = "0px"

      	accordionBody.addEventListener('transitionend', () => {
          accordionBody.classList.remove('is-open');
          accordionToggler.classList.remove('is-open');
        }, {once: true});
      } else {
        accordionToggler.classList.add('is-open');
        accordionBody.classList.add('is-open');

        accordionBody.style.height = "auto";

      	let height = accordionBody.offsetHeight + "px"

        accordionBody.style.height = "0px"

        setTimeout(() => {
          accordionBody.style.height = height
        }, 10);
      }
    });
  });
});
