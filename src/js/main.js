const slider = document.querySelector(".drag__slide");
const slides = document.querySelectorAll(".drag__slider-desc");
let slideNumber = 1;
const length = slides.length;

const nextSlide = () => {
  const screenWidth = window.innerWidth;
  let scrollSize;

  if (screenWidth <= 550) {
    scrollSize = 250;
  } else {
    scrollSize = 500;
  }

  slider.style.transform = `translateX(-${slideNumber * scrollSize}px)`;
  slideNumber++;
};

const prevSlide = () => {
  const screenWidth = window.innerWidth;
  let scrollSize;

  if (screenWidth <= 550) {
    scrollSize = 250;
  } else {
    scrollSize = 500;
  }

  slider.style.transform = `translateX(-${(slideNumber - 2) * scrollSize}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  const screenWidth = window.innerWidth;
  let scrollSize;

  if (screenWidth <= 550) {
    scrollSize = 250;
  } else {
    scrollSize = 500;
  }

  slider.style.transform = `translateX(-${(length - 1) * scrollSize}px)`;
  slideNumber = length;
};

const smoothScroll = (event) => {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute("href").substring(1);

  const targetElement = document.getElementById(targetId);

  targetElement.scrollIntoView({
    behavior: "smooth",
  });
};

const fireApp = () => {
  const pricingLink = document.getElementById("page-link");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const openMenu = document.querySelector(".nav__open");
  const closeMenu = document.querySelector(".nav__close");
  const navMenu = document.querySelector(".nav__list");

  right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
  });

  left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
  });

  pricingLink.addEventListener("click", (e) => smoothScroll(e));

  openMenu.addEventListener("click", () => {
    navMenu.classList.add("nav__list--active");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("nav__list--active");
  });
};

fireApp();
