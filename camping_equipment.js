const products = [
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
    name: "Summit Explorer",
    price: 179.99,
    image: "images/backpack/backpack3.jpg",
    description:
      "Designed for serious trekkers, offering ample space and comfort for long journeys.",
    category: "backpacks",
  },
  {
    name: "Wilderness Escape",
    price: 149.95,
    image: "images/backpack/backpack4.jpg",
    description:
      "Rugged backpack with advanced features, ideal for wilderness camping.",
    category: "backpacks",
  },
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
    name: "Cabin Retreat 6-Person Tent",
    price: 349.99,
    image: "images/tent/tent3.jpg",
    description:
      "Large cabin-style tent with ample room for a group of six, ideal for extended camping stays.",
    category: "tents",
  },
  {
    name: "Wilderness Expedition Geodesic Tent",
    price: 499.95,
    image: "images/tent/tent4.jpg",
    description:
      "Geodesic design tent suitable for extreme weather conditions, favored by expedition enthusiasts.",
    category: "tents",
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
    name: "Family Campfire Cooking Set",
    price: 199.99,
    image: "images/cookware/cookware3.jpg",
    description:
      "Complete cooking set for family camping, featuring large pots and a grill for group meals.",
    category: "cookware",
  },
  {
    name: "Backcountry Survival Cookset",
    price: 79.95,
    image: "images/cookware/cookware4.jpg",
    description:
      "Compact and durable cookset designed for survival situations and minimalist camping.",
    category: "cookware",
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
    "name": "Multi-Tool Adventure Kit",
    "price": 39.99,
    "image": "images/tools/tool1.jpg",
    "description": "Versatile multi-tool with various functions, including a knife, pliers, screwdrivers, and more.",
    "category": "tools"
  },
  {
    "name": "Compact Folding Shovel",
    "price": 29.95,
    "image": "images/tools/tool2.jpg",
    "description": "Portable and durable folding shovel, perfect for digging fire pits, trenches, and other outdoor tasks.",
    "category": "tools"
  },
  {
    "name": "Survival Hatchet with Sheath",
    "price": 49.99,
    "image": "images/tools/tool3.jpg",
    "description": "Compact hatchet with a survival edge, suitable for cutting wood and various outdoor tasks.",
    "category": "tools"
  },
  {
    "name": "LED Headlamp with Adjustable Beam",
    "price": 19.95,
    "image": "images/tools/tool4.jpg",
    "description": "Hands-free LED headlamp with adjustable beam for navigating in the dark during camping trips.",
    "category": "tools"
  },
  {
    "name": "Wireless Portable Power Station",
    "price": 129.99,
    "image": "images/tools/tool5.jpg",
    "description": "Compact and powerful portable power station to charge devices and power small appliances while camping.",
    "category": "tools"
  },
  {
    "name": "Compact Binoculars for Outdoor Exploration",
    "price": 69.95,
    "image": "images/tools/tool6.jpg",
    "description": "High-quality binoculars with a compact design, perfect for observing wildlife and scenic views during camping.",
    "category": "tools"
  }
];

function displayProducts(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  filteredProducts.forEach((product, index) => {
    const productHTML = `
      <div class="product" id="${product.category}-product-${index}">
        <div class="product-image-container">
          <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
          <button class="details-btn" onclick="openModal(${index},'${category}')">View Details</button>
        </div>
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" onclick="toggleCart('${
          product.category
        }', ${index})">Add to Cart</button>
      </div>
    `;

    container.innerHTML += productHTML;
  });
}

function openModal(index,category) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");

  const product = category === "all" ? products[index] : products.filter(p => p.category === category)[index]

  modalTitle.textContent = product.name;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent = `$${product.price.toFixed(2)}`;

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function addToCart(index) {
  alert(`Added ${products[index].name} to cart!`);
}

const basketCount = document.getElementById("basket-count");
let cartCount = 0;
const cart = {};

function toggleCart(category,index) {
  const productId = products.filter(p => p.category === category)[index].name;
  const productElement = document.getElementById(
    `${category}-product-${index}`
  );
  const addToCartBtn = productElement.querySelector(".add-to-cart-btn");

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

displayProducts("all");
