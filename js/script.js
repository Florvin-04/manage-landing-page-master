const burgerMenuBtn = document.querySelector("[hamburger-menu-button]");
const mobileNavContainer = document.querySelector("[header-navigation]");
const overlayBG = document.querySelector(".overlayBG");
const body = document.querySelector("body");

const emailInput = document.querySelector("#email");
const invalidEmailLabel = document.querySelector(".validation");

burgerMenuBtn.addEventListener("click", () => {
  mobileNavContainer.classList.toggle("active");
  burgerMenuBtn.classList.toggle("active");
  overlayBG.classList.toggle("active");
  body.classList.toggle("activeMenu");
});

const isValidEmail = (email) => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // sample@g.co
  return re.test(String(email).toLowerCase());
};

emailInput.addEventListener("keyup", () => {
  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add("invalid");
    invalidEmailLabel.style.setProperty("display", "block");
  } else {
    invalidEmailLabel.style.setProperty("display", "none");
    emailInput.classList.remove("invalid");
  }
});

window.addEventListener("load", (event) => {
  invalidEmailLabel.value = "mm";
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
