












































































































const products = JSON.parse(localStorage.getItem("products")) || [];
console.log(products)
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
        productItem.setAttribute("dataName", product.name)

        productList.appendChild(productItem);
    }

}
myProductsBtn.addEventListener("click", () => {
    addSellerProduct()
})
