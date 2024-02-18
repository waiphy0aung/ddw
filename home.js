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
    name: "Venture Pro",
    price: 129.99,
    image: "images/backpack/backpack1.jpg",
    description:
      "A versatile and durable backpack for all your camping adventures.",
    category: "backpacks",
  },
  {
    name: "Trailblazer XT",
    price: 89.95,
    image: "images/backpack/backpack2.jpg",
    description:
      "Compact and lightweight backpack, perfect for day hikes and short trips.",
    category: "backpacks",
  },
  {
    name: "Summit Peak 4-Person Tent",
    price: 249.99,
    image: "images/tent/tent1.jpg",
    description:
      "Spacious and durable 4-person tent, perfect for family camping trips.",
    category: "tents",
  },
  {
    name: "Trailblazer Solo Backpacking Tent",
    price: 129.95,
    image: "images/tent/tent2.jpg",
    description:
      "Lightweight and compact solo tent for backpackers seeking minimalist shelter.",
    category: "tents",
  },
  {
    name: "Trail Chef Cooking Set",
    price: 59.99,
    image: "images/cookware/cookware1.jpg",
    description:
      "Compact and lightweight cooking set for basic camping meals, perfect for solo adventurers.",
    category: "cookware",
  },
  {
    name: "Gourmet Explorer Cookware Kit",
    price: 129.95,
    image: "images/cookware/cookware2.jpg",
    description:
      "Versatile cookware kit with pots, pans, and utensils for a variety of camping culinary experiences.",
    category: "cookware",
  },
  {
    name: "Multi-Tool Adventure Kit",
    price: 39.99,
    image: "images/tools/tool1.jpg",
    description:
      "Versatile multi-tool with various functions, including a knife, pliers, screwdrivers, and more.",
    category: "tools",
  },
  {
    name: "Compact Folding Shovel",
    price: 29.95,
    image: "images/tools/tool2.jpg",
    description:
      "Portable and durable folding shovel, perfect for digging fire pits, trenches, and other outdoor tasks.",
    category: "tools",
  },
  {
    name: "Portable Camping Chair",
    price: 29.99,
    image: "images/furniture/furniture1.jpg",
    description:
      "Comfortable and lightweight chair for relaxing around the campfire or at the campsite.",
    category: "furniture",
  },
  {
    name: "Foldable Camping Table",
    price: 49.95,
    image: "images/furniture/furniture2.jpg",
    description:
      "Compact and sturdy camping table for dining, cooking, or playing games at the campsite.",
    category: "furniture",
  },
];

const featuredProducts = [
  {
    name: "Alpine Adventure",
    price: 199.99,
    image: "images/backpack/backpack5.jpg",
    description:
      "High-performance backpack designed for alpine conditions, built to withstand harsh weather.",
    category: "backpacks",
  },
  {
    name: "Explorer Elite",
    price: 119.95,
    image: "images/backpack/backpack6.jpg",
    description:
      "An all-purpose backpack with multiple compartments for organized storage during your outdoor explorations.",
    category: "backpacks",
  },
  {
    name: "Alpine Summit 2-Person Tent",
    price: 189.99,
    image: "images/tent/tent5.jpg",
    description:
      "High-altitude tent for two, designed to withstand the challenges of alpine environments.",
    category: "tents",
  },
  {
    name: "Family Oasis 8-Person Tent",
    price: 599.95,
    image: "images/tent/tent6.jpg",
    description:
      "Spacious family tent with multiple rooms and a large common area, perfect for group camping.",
    category: "tents",
  },
  {
    name: "Premium Camping Cookware Set",
    price: 149.99,
    image: "images/cookware/cookware5.jpg",
    description:
      "High-quality cookware set with non-stick surfaces and heat-resistant handles for a gourmet camping experience.",
    category: "cookware",
  },
  {
    name: "Ultimate Outdoor Cooking Bundle",
    price: 249.95,
    image: "images/cookware/cookware6.jpg",
    description:
      "Comprehensive cooking bundle with pots, pans, utensils, and a portable stove for all your outdoor cooking needs.",
    category: "cookware",
  },
  {
    name: "Wireless Portable Power Station",
    price: 129.99,
    image: "images/tools/tool5.jpg",
    description:
      "Compact and powerful portable power station to charge devices and power small appliances while camping.",
    category: "tools",
  },
  {
    name: "Compact Binoculars for Outdoor Exploration",
    price: 69.95,
    image: "images/tools/tool6.jpg",
    description:
      "High-quality binoculars with a compact design, perfect for observing wildlife and scenic views during camping.",
    category: "tools",
  },
  {
    name: "Hanging Hammock Chair",
    price: 59.99,
    image: "images/furniture/furniture5.jpg",
    description:
      "Relaxing and portable hanging hammock chair for lounging in nature.",
    category: "furniture",
  },
  {
    name: "Metolius Crash Pad Couch",
    price: 129.95,
    image: "images/furniture/furniture6.jpg",
    description:
      "the best way to turn any standard-size pad into a couch! Works great for the camp site, or as dirtbag furniture.",
    category: "furniture",
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
    specialIndex =specialIndex + 1;
    if(specialIndex >= 7){
      specialIndex = 0
    }
    showSlide(carouselId, specialIndex);
  } else if (carouselId === "featured-carousel") {
    featuredIndex = featuredIndex + 1;
    if(featuredIndex >= 7){
      featuredIndex = 0
    }
    showSlide(carouselId, featuredIndex);
  }
}

function prevSlide(carouselId) {
  if (carouselId === "special-carousel") {
    specialIndex = specialIndex - 1;
    if(specialIndex < 0){
      specialIndex = 6
    }
    showSlide(carouselId, specialIndex);
  } else if (carouselId === "featured-carousel") {
    featuredIndex = featuredIndex - 1;
    if(featuredIndex < 0){
      featuredIndex = 6
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
