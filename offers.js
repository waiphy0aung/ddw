const products = [
  {
    name: "Summit Explorer",
    price: 179.99,
    image: "images/backpack/backpack3.jpg",
    description:
      "Designed for serious trekkers, offering ample space and comfort for long journeys.",
    category: "backpacks",
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
    name: "Family Campfire Cooking Set",
    price: 199.99,
    image: "images/cookware/cookware3.jpg",
    description:
      "Complete cooking set for family camping, featuring large pots and a grill for group meals.",
    category: "cookware",
  },
  {
    name: "Survival Hatchet with Sheath",
    price: 49.99,
    image: "images/tools/tool3.jpg",
    description:
      "Compact hatchet with a survival edge, suitable for cutting wood and various outdoor tasks.",
    category: "tools",
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
    name: "Inflatable Camping Mattress",
    price: 79.99,
    image: "images/furniture/furniture3.jpg",
    description:
      "Comfortable inflatable mattress for a good night's sleep in your camping tent.",
    category: "furniture",
  },
];

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((product, index) => {
    const productHTML = `
      <div class="product" id="product-${index}">
        <div class="product-image-container">
          <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
          <button class="details-btn" onclick="openModal(${index})">View Details</button>
        </div>
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" onclick="toggleCart(${index})">Add to Cart</button>
      </div>
    `;

    container.innerHTML += productHTML;
  });
}

function openModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");

  const product = products[index];


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

function toggleCart(index) {
  const productId = products[index].name;
  const productElement = document.getElementById(
    `product-${index}`
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

displayProducts("furniture");
