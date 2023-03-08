const burgerMenuBtn = document.querySelector("[hamburger-menu-button]");
const mobileNavContainer = document.querySelector("[header-navigation]");

burgerMenuBtn.addEventListener("click", () => {
  mobileNavContainer.classList.toggle("active");
  burgerMenuBtn.classList.toggle("active");
});

var swiper = new Swiper(".testimonial__list", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
