const productList = document.getElementById("product");
function getFromLocal() {
    let newArr2 = JSON.parse(localStorage.getItem("cart"));
    return newArr2
}
function addElementToPage(productArr) {
    productArr.forEach(e => {
        const item = document.createElement("div");
        item.className = "featured-item";
        item.innerHTML = `
        <img src="${e.imgurl}" alt="Item 1">
        <h4>${e.name}</h4>
        <h6>$${e.price}</h6>
        `;
        item.setAttribute("dataName", e.name);
        let btn = document.createElement("button");
        btn.id = "Dele";
        btn.textContent = "Delete";
        item.appendChild(btn);
        productList.appendChild(item);
        btn.addEventListener("click", (e) => {
            const b = btn.parentElement;
            b.remove();
            let name = b.getAttribute("dataName");
            remFromLocal(name);
        })
    });
};
addElementToPage(getFromLocal());


const delebtns = document.querySelectorAll("#dele");
function remFromLocal(name) {
    const newar = JSON.parse(localStorage.getItem("cart")).filter((e) => { e.name !== name });
    localStorage.setItem("cart", JSON.stringify(newar));
    const arr = JSON.parse(localStorage.getItem("cart"));
    addElementToPage(arr);

}

