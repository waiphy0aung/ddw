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


