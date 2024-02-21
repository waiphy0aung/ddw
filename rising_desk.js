const products = [
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
    name: "The Möbel",
    price: 299.0,
    image: "images/pneumatic/pneumatic5.png",
    description: "A stylish side table and quick-convert pneumatic laptop desk",
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
    name: "The Recken",
    price: 799.0,
    image: "images/electric/electric3.jpg",
    description: "New for 2023: The better option than the fully Jarvis.",
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
    name: "Recken Base",
    price: 599.0,
    image: "images/base/base2.jpg",
    description:
      "New for 2023: Rectangular, 3 stage, full featured motorized desk",
    category: "base",
  },
  {
    name: "Nimbus Base",
    price: 599.0,
    image: "images/base/base3.png",
    description:
      "Power-free counterbalanced desk base made for multiple-monitor setups",
    category: "base",
  },
  {
    name: "Oben Base",
    price: 449.0,
    image: "images/base/base4.jpg",
    description: "Brushless internal motor, expandable base",
    category: "base",
  },
  {
    name: "Lüften Base",
    price: 599.0,
    image: "images/base/base5.png",
    description: "A modern and clean dual center column design",
    category: "base",
  },
  {
    name: "Ändern Electric Base",
    price: 599.0,
    image: "images/base/base6.png",
    description: "A heavy lift single column designed to lift in any setting.",
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
    name: "Lightning",
    price: 795.00,
    image: "images/bench/bench2.png",
    description: "Height-Adjustable Tool Stand",
    category: "bench",
  },
  {
    name: "FabSurfacePro T2",
    price: 1995.0,
    image: "images/bench/bench3.png",
    description: `1/4" Steel Top Fabrication Bench`,
    category: "bench",
  },
  {
    name: "Aluminum Top / Dual Vise Kit",
    price: 1495.0,
    image: "images/bench/bench4.png",
    description: "The Swiss Army Knife of Tools",
    category: "bench",
  },
  {
    name: "Prima Sella",
    price: 575.0,
    image: "images/seat/seat1.jpg",
    description: "Premium, heavy built executive task chair for superior comfort",
    category: "seat",
  },
  {
    name: "Alta Sella",
    price: 550.0,
    image: "images/seat/seat2.jpg",
    description: "Versatile task chair for standing desks and collaborative spaces",
    category: "seat",
  },
  {
    name: "Sella",
    price: 450.0,
    image: "images/seat/seat3.jpg",
    description: "American made task chair with adjustable lumbar support",
    category: "seat",
  },
  {
    name: "Sthul",
    price: 420.0,
    image: "images/seat/seat4.jpg",
    description: "Height adjustable motion stool for active sitting",
    category: "seat",
  },
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

function openModal(index, category) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");

  const product =
    category === "all"
      ? products[index]
      : products.filter((p) => p.category === category)[index];

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

function toggleCart(category, index) {
  const productId = products.filter((p) => p.category === category)[index].name;
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
