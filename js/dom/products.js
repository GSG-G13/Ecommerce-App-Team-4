const products = getItem('allProduct')
const tableBody = document.querySelector('.table-body')

function addToTable(obj, index) {
    tableBody.innerHTML += `
<tr>
    <td>${index + 1}</td>
    <td>${obj.name}</td>
    <td>${obj.price}</td>
    <td>${obj.category}</td>
    <td><img src="${obj.img}" alt="random"></td>
    <td class="td-btn"><button class="edit-btn table-btn" onClick = "editItem(${obj.id})">Edit</button></td>
    <td class="td-btn"><button class="delete-btn table-btn" onClick = "deleteItem(${obj.id})">Delete</button></td>
</tr>
    `
}
function editItem(id) {
    setItem('editedItem', id)
    window.location.href = "./editProducts.html"
}

function deleteItem(id) {
    removeItemFrom('allProduct', id)
    tableBody.innerHTML = ''
    getItem('allProduct').forEach((ele, index) => {
        addToTable(ele, index)
    })
}
products.forEach((ele, index) => {
    addToTable(ele, index)
})

