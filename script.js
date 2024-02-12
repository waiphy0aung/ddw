let openMen = document.querySelector("#openMen");
let closeMen = document.querySelector("#closeMen");
let navigationItems = document.querySelector("#navigation-items");

const hamburgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeMen.style.display = close;
  openMen.style.display = open;
};

openMen.addEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeMen.addEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

const prev = id => document.getElementById("prev-"+id);
const next = id => document.getElementById("next-"+id);

let carouselVp = id => document.getElementById("carousel-vp-"+id);

let cCarouselInner = id => document.getElementById("cCarousel-inner-"+id);
let carouselInnerWidth = id => cCarouselInner(id).getBoundingClientRect().width;

let specialLeftValue = 0;
let featuredLeftValue = 0;

const totalMovementSize = id =>
  parseFloat(
    document.querySelector(".cCarousel-item-"+id).getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner(id)).getPropertyValue("gap"),
    10
  );

function prevClick(id) {
  if (id === "special") {
    if (specialLeftValue !== 0) {
      specialLeftValue -= -totalMovementSize(id);
      cCarouselInner(id).style.left = specialLeftValue + "px";
    }
  } else {
    if (featuredLeftValue !== 0) {
      featuredLeftValue -= -totalMovementSize(id);
      cCarouselInner(id).style.left = featuredLeftValue + "px";
    }
  }
}

function nextClick(id){
  if (id === "special") {
    const carouselVpWidth = carouselVp(id).getBoundingClientRect().width;
    if (carouselInnerWidth(id) - Math.abs(specialLeftValue) > carouselVpWidth) {
      specialLeftValue -= totalMovementSize(id);
      cCarouselInner(id).style.left = specialLeftValue + "px";
    }
  } else {
    const carouselVpWidth = carouselVp(id).getBoundingClientRect().width;
    if (carouselInnerWidth(id) - Math.abs(featuredLeftValue) > carouselVpWidth) {
      featuredLeftValue -= totalMovementSize(id);
      cCarouselInner(id).style.left = featuredLeftValue + "px";
    }
  }
}

// prev.addEventListener("click", () => {
//   if (!leftValue == 0) {
//     leftValue -= -totalMovementSize;
//     cCarouselInner.style.left = leftValue + "px";
//   }
// });

// next.addEventListener("click", () => {
//   const carouselVpWidth = carouselVp.getBoundingClientRect().width;
//   if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
//     leftValue -= totalMovementSize;
//     cCarouselInner.style.left = leftValue + "px";
//   }
// });

// const mediaQuery510 = window.matchMedia("(max-width: 510px)");
// const mediaQuery770 = window.matchMedia("(max-width: 770px)");

// mediaQuery510.addEventListener("change", mediaManagement);
// mediaQuery770.addEventListener("change", mediaManagement);

// let oldViewportWidth = window.innerWidth;

// function mediaManagement() {
//   const newViewportWidth = window.innerWidth;

//   if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
//     leftValue += totalMovementSize;
//     cCarouselInner.style.left = leftValue + "px";
//     oldViewportWidth = newViewportWidth;
//   } else if (
//     leftValue <= -totalMovementSize &&
//     oldViewportWidth > newViewportWidth
//   ) {
//     leftValue -= totalMovementSize;
//     cCarouselInner.style.left = leftValue + "px";
//     oldViewportWidth = newViewportWidth;
//   }
// }

