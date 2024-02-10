// on DOM constant load adding loaded class in body
document.addEventListener('DOMContentLoaded', function () {
  document.documentElement.classList.add('loaded');
});

// hide top header on close icon click
const topHeaderCloseButtonElement = document.querySelector(
  '.body-header__close'
);
const topHeader = document.querySelector('.top-header');
const pageElement = document.querySelector('.page');
const subHeader = document.querySelector('.header-sub');

topHeaderCloseButtonElement.addEventListener('click', () => {
  topHeader.style.display = 'none';
  topHeader.classList.toggle('top-header__active'),
    (subHeader.style.marginTop = '0'),
    (pageElement.style.marginTop = '80px');
});

document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const popupShowBtn = document.querySelector('.menu__popup');
  // Function to make popup visibility
  function showPopup() {
    const ariaHidden = popup.classList.add('popup_show');
  }
  // Function to make popup hidden
  function hidePopup() {
    const ariaHidden = popup.classList.remove('popup_show');
  }

  // Add event listener to show popup
  popupShowBtn.addEventListener('click', showPopup);

  // Add event listener to close button
  const closeBtns = document.querySelectorAll('[data-close]');
  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', hidePopup);
  });

  // Add event listener to form submission
  const form = document.querySelector('.form-popup');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    // Here you can add code to handle form submission, such as validation and sending data to the server
    // After form submission, you might want to close the popup
    hidePopup();
  });
});

// adding animate On Scroll
document.addEventListener('DOMContentLoaded', function () {
  const elementsToAnimate = document.querySelectorAll('[data-watch]');

  function isInViewport(element, offset) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -offset &&
      rect.left >= -offset &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          offset &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) + offset
    );
  }

  function animateOnScroll() {
    elementsToAnimate.forEach(function (element) {
      if (
        isInViewport(element, 250) &&
        !element.classList.contains('_watcher-view')
      ) {
        element.classList.add('_watcher-view');
      }
    });
  }

  // Initially check if elements are in viewport on page load
  animateOnScroll();

  // Add scroll event listener to check if elements come into view while scrolling
  window.addEventListener('scroll', animateOnScroll);
});
