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

const specialProducts = [
  {
    name: "The Klöud",
    price: 1149.0,
    image: "images/pneumatic/pneumatic1.jpg",
    description:
      "The #1 power-free weight adjustable standing desk. Up to 150lbs",
    category: "pneumatic",
  },
  {
    name: "The Nimbus",
    price: 999.0,
    image: "images/pneumatic/pneumatic2.jpg",
    description:
      "Power-free counterbalanced standing desk made for multi-monitor setups",
    category: "pneumatic",
  },
  {
    name: "The Ändern Electric",
    price: 749.0,
    image: "images/electric/electric1.jpg",
    description: "Light and airy design + powerful electric performance",
    category: "electric",
  },
  {
    name: "The Oben",
    price: 649.0,
    image: "images/electric/electric2.png",
    description: "The best all-round electric desk on the market today",
    category: "electric",
  },
  {
    name: "Klöud Base",
    price: 949.0,
    image: "images/base/base1.jpg",
    description:
      "The most advanced power-free, height adjustable desk base ever",
    category: "base",
  },
  {
    name: "Speedbench™ Storm",
    price: 1195.0,
    image: "images/bench/bench1.png",
    description: "Ergonomic Automotive Work System",
    category: "bench",
  },
  {
    name: "Prima Sella",
    price: 575.0,
    image: "images/seat/seat1.jpg",
    description:
      "Premium, heavy built executive task chair for superior comfort",
    category: "seat",
  },
];

const featuredProducts = [
  {
    name: "The Lüften",
    price: 849.0,
    image: "images/pneumatic/pneumatic3.jpg",
    description: "Roomy desktop and 2-column pneumatic lift of larg monitors",
    category: "pneumatic",
  },
  {
    name: "The Ändern",
    price: 699.0,
    image: "images/pneumatic/pneumatic4.png",
    description:
      "Flexible pneumatic standing desk for laptop and single monitor users",
    category: "pneumatic",
  },
  {
    name: "The Recken",
    price: 799.0,
    image: "images/electric/electric3.jpg",
    description: "New for 2023: The better option than the fully Jarvis.",
    category: "electric",
  },
  {
    name: "Recken Base",
    price: 599.0,
    image: "images/base/base2.jpg",
    description:
      "New for 2023: Rectangular, 3 stage, full featured motorized desk",
    category: "base",
  },
  {
    name: "Lightning",
    price: 795.0,
    image: "images/bench/bench2.png",
    description: "Height-Adjustable Tool Stand",
    category: "bench",
  },
  {
    name: "Alta Sella",
    price: 550.0,
    image: "images/seat/seat2.jpg",
    description:
      "Versatile task chair for standing desks and collaborative spaces",
    category: "seat",
  },
];

const basketCount = document.getElementById("basket-count");
const specialCarousel = document.getElementById("special-carousel");
const featuredCarousel = document.getElementById("featured-carousel");
let specialIndex = 0;
let featuredIndex = 0;
let cartCount = 0;
const cart = {};
const itemsPerPage = 4;

function initCarousel(carousel, products, startIndex) {
  products.forEach((product, index) => {
    const productHTML = `
          <div class="product" id="${carousel.id}-product-${index}">
            <div>
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>$${product.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart" onclick="toggleCart('${
              carousel.id
            }', ${index})">Add to Cart</button>
          </div>
        `;
    carousel.innerHTML += productHTML;
  });

  showSlide(carousel.id, startIndex);
}

function showSlide(carouselId, index) {
  const slideWidth = document.querySelector(".product").offsetWidth + 20;
  const carousel = document.getElementById(carouselId);
  const newPosition = -index * slideWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
}

function nextSlide(carouselId) {
  if (carouselId === "special-carousel") {
    specialIndex = specialIndex + 1;
    if (specialIndex >= 4) {
      specialIndex = 0;
    }
    showSlide(carouselId, specialIndex);
  } else if (carouselId === "featured-carousel") {
    featuredIndex = featuredIndex + 1;
    if (featuredIndex >= 3) {
      featuredIndex = 0;
    }
    showSlide(carouselId, featuredIndex);
  }
}

function prevSlide(carouselId) {
  if (carouselId === "special-carousel") {
    specialIndex = specialIndex - 1;
    if (specialIndex < 0) {
      specialIndex = 3;
    }
    showSlide(carouselId, specialIndex);
  } else if (carouselId === "featured-carousel") {
    featuredIndex = featuredIndex - 1;
    if (featuredIndex < 0) {
      featuredIndex = 2;
    }
    showSlide(carouselId, featuredIndex);
  }
}

function toggleCart(carouselId, index) {
  const productId =
    carouselId === "special-carousel"
      ? specialProducts[index].name
      : featuredProducts[index].name;
  const productElement = document.getElementById(
    `${carouselId}-product-${index}`
  );
  const addToCartBtn = productElement.querySelector(".add-to-cart");

  if (cart[productId]) {
    cart[productId]--;
    if (cart[productId] === 0) {
      delete cart[productId];
    }
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.classList.remove("remove-from-cart");
  } else {
    cart[productId] = 1;
    addToCartBtn.textContent = "Remove from Cart";
    addToCartBtn.classList.add("remove-from-cart");
  }

  cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );
  basketCount.textContent = cartCount;
}

initCarousel(specialCarousel, specialProducts, specialIndex);
initCarousel(featuredCarousel, featuredProducts, featuredIndex);

let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];

setTimeout(function () {
  modal.style.display = "block";
}, 2000);

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
