const productList = document.getElementById("product");
const seller = document.getElementById("sellerBtn");
const addCard = document.getElementById("AddProductForm");
const AddBtn = document.getElementById("AddBtn");
const saveBtn = document.getElementById("save");
const imgInbut = document.getElementById("img");
const sellerPord = document.getElementById("sellerPord");
let Description = document.getElementById("Description");
let productName = document.getElementById("productName");
let productPrice = document.getElementById("Product-Price");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const myProductsBtn = document.getElementById("myProduct")
const cartBtn = document.getElementById("cartBtn");
const myCartContent = document.getElementById("cart-summary");
AddBtn.addEventListener("click", () => {
    addCard.style.display = "flex";
})
let productArr = [];
if (localStorage.products) {
    let localarr = JSON.parse(localStorage.getItem("products"));
    productArr = [...localarr];
}
addElementToPage(productArr);
seller.addEventListener("click", () => {
    sellerPord.style.display = "block";
})
saveBtn.addEventListener("click", (e) => {
    if (productName.value == "" || productPrice.value == "" || Description.value == "" || imgInbut.value == "") {
        return;
    };
    getDAta();
    addToLocalStorage(productArr);
})
const getDAta = () => {
    const opjProduct = {
        id: Date.now,
        name: productName.value,
        price: productPrice.value,
        Desc: Description.value,
        imgurl: imgInbut.value
    };
    productArr.push(opjProduct);
    addToLocalStorage(productArr)
    productName.value = '';
    productPrice.value = '';
    Description.value = '';
    imgInbut.value = '';
    addCard.style.display = "none";
}

const addToLocalStorage = (arr) => {
    localStorage.setItem("products", JSON.stringify(arr));

}


searchBtn.addEventListener("click", (e) => {
    searchFromArray(searchInput.value, productArr);
})


const searchFromArray = (searchKey, products) => {
    const searchValue = products.filter(arr => arr.name === searchKey);
    if (searchValue.length > 0) {
        addSercheRes(searchValue);
    } else {
        return null;
    }
};
function addSercheRes(searchValue) {
    const header = document.getElementById("header");
    header.innerHTML = "My Products";
    productList.innerHTML = "";
    searchValue.forEach(e => {
        const item = document.createElement("div");
        item.className = "featured-item";
        item.innerHTML = `
        <img src="${e.imgurl}" alt="Item 1">
        <h4>${e.name}</h4>
        <h6>$${e.price}</h6>
        `;

        let cartBt = document.createElement("button");
        cartBt.id = "cartBtn";
        cartBt.innerHTML = `<i class="fa fa-shopping-cart"></i>`;
        item.appendChild(cartBt);
        productList.appendChild(item);
    });
}
const products = JSON.parse(localStorage.getItem("products")) || [];
const addSellerProduct = () => {

    productList.innerHTML = " ";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
    <div class="product-item-images">
      <img src="${product.imgurl}" alt="${product.name}">
    </div>
    <div class="product-item-details">
      <h2 id="productName">${product.name}</h2>
      <p id="Product-Price">$${product.price}</p>
      <p id="Description">${product.Desc}</p>
    </div>
`;
        productItem.setAttribute("dataName", product.name);
        productList.appendChild(productItem);
    }

};
myProductsBtn.addEventListener("click", () => {
    addSellerProduct();
});


function addElementToPage(productArr) {
    productArr.forEach(e => {
        const item = document.createElement("div");
        item.className = "featured-item";
        item.innerHTML = `
        <img src="${e.imgurl}" alt="Item 1">
        <h4>${e.name}</h4>
        <h6>$${e.price}</h6>
        
        `
        let cartBt = document.createElement("button");
        cartBt.id = "cartBtn";
        cartBt.innerHTML = `<i class="fa fa-shopping-cart"></i>`;
        item.appendChild(cartBt);
        item.setAttribute("dataName", e.name);
        productList.appendChild(item);
    });
}



function addToLocalCart() {
    if (localsorage.getItem("cart")) {
        let newproductArr = [...JSON.parse(localsorage.getItem("cart"))];
    } else {
        let newproductArr = [];
    }
    let AdCartBtns = document.querySelectorAll("#cartBtn");
    AdCartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let name = btn.parentElement.getAttribute("dataName");
            let newproductArr2 = productArr.filter(item => item.name == name);
            if (localStorage.getItem("cart")) {
                newproductArr = [...newproductArr, ...newproductArr2];
            }
            localStorage.setItem("cart", JSON.stringify(newproductArr));
        })
    })

}
addToLocalCart();
