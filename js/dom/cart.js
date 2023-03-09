const productContainer = document.querySelector(".product-container");
const totalPrice = document.querySelector("#total-price");

let cartItems = getItem("cart");

if (cartItems.length > 0) {
  renderCards(cartItems);
  totalPrice.innerText = getTotalPrice(cartItems);
} else {
  totalPrice.innerText = "There is no products in Your cart";
}

function renderCards(cartItems) {
  const viewWrap = document.createElement("div");
  viewWrap.className = "grid-view view-wrap";

  cartItems.forEach((element) => {
    viewWrap.appendChild(creatProductCard(element));
    productContainer.appendChild(viewWrap);
  });
}

function creatProductCard(element) {
  const productCard = document.createElement("div");
  productCard.className = "product-card view-item";

  productCard.appendChild(createProductImg(element));

  productCard.appendChild(createProductDetail(element));

  productCard.appendChild(createProductbtn(element));

  return productCard;
}

function createProductImg(element) {
  const productImgdiv = document.createElement("div");
  productImgdiv.className = "product-image";

  const productImg = document.createElement("img");
  productImg.src = element.img;

  productImgdiv.appendChild(productImg);
  return productImgdiv;
}

function createProductDetail(element) {
  const productDetail = document.createElement("div");
  productDetail.className = "product-detail vi-right";
  const productName = document.createElement("p");
  productName.className = "product-name";
  productName.innerText = element.name;
  const productPrice = document.createElement("p");
  productName.className = "product-price";
  productPrice.innerText = element.price;
  productDetail.appendChild(productName);
  productDetail.appendChild(productPrice);
  return productDetail;
}

function createProductbtn(element) {
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-cart";
  removeBtn.innerText = "Remove From Cart";
  removeBtn.setAttribute("id", element.id);
  removeBtn.addEventListener("click", () => {
    removeItemFrom("cart", element.id);
    cartItems = getItem("cart");
    renderCards(cartItems);
  });
  return removeBtn;
}

//renderCards();
