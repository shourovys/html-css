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

document.addEventListener('DOMContentLoaded', function () {
  const elementsToAnimate = document.querySelectorAll('[data-watch]');

  // Intersection Observer options
  const options = {
    root: null, // viewport
    rootMargin: '0px', // no margin
    threshold: 0.25, // 25% of the element visible
  };

  // Callback function for Intersection Observer
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add class when element is in viewport
        entry.target.classList.add('_watcher-view');
        // Stop observing after the class is added to improve performance
        observer.unobserve(entry.target);
      }
    });
  };

  // Create Intersection Observer instance
  const observer = new IntersectionObserver(callback, options);

  // Observe each element
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});
