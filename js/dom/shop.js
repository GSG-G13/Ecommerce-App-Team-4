const productContainer = document.querySelector(".product-container");

let productItems = getItem("allProduct");

renderCards(productItems);

function renderCards(productItems) {
    const viewWrap = document.createElement("div");
    viewWrap.className = "grid-view view-wrap";
  
    productItems.forEach((element) => {
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
    const addBtn = document.createElement("button");
    removeBtn.className = "remove-cart";
    removeBtn.innerText = "Add to Cart";
    removeBtn.setAttribute("id", element.id);
    removeBtn.addEventListener("click", () => {
    addToCat( element.id);
      cartItems = getItem("cart");
      renderCards(cartItems);
    });
    return addBtn;
  }
  function addToCat(id){
    let arr =localStorage.getItem('cart')
    arr = JSON.parse(arr);
    arr.push(id);
  }
  