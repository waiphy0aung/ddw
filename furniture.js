const products = [
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
  {
    name: "Inflatable Camping Mattress",
    price: 79.99,
    image: "images/furniture/furniture3.jpg",
    description:
      "Comfortable inflatable mattress for a good night's sleep in your camping tent.",
    category: "furniture",
  },
  {
    name: "Folding Camp Cot",
    price: 89.95,
    image: "images/furniture/furniture4.jpg",
    description:
      "Sturdy folding cot for elevated sleeping comfort during camping trips.",
    category: "furniture",
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

function displayProducts(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  filteredProducts.forEach((product, index) => {
    const productHTML = `
      <div class="product">
        <div class="product-image-container">
          <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
          <button class="details-btn" onclick="openModal(${index},'${category}')">View Details</button>
        </div>
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" onclick="addToCart(${index})">Add to Cart</button>
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

displayProducts("furniture");
