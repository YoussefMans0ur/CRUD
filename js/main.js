var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var productsContainer = [];

if(localStorage.getItem("products") != null)
{
    productsContainer = JSON.parse( localStorage.getItem("products") );
    displayProduct();
}

function addProduct() {

    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    };

    productsContainer.push(product);
    localStorage.setItem("products" , JSON.stringify(productsContainer));
    clear();
    displayProduct();

}

function clear() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDescInput.value = '';
    
}

function displayProduct() {

    var cartoona = '';
    for (var i = 0; i < productsContainer.length; i++) {
        cartoona += `<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button class="btn btn-sm btn-outline-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
    </tr>`
    }

    document.getElementById('tableBody').innerHTML = cartoona;
    
}

function deleteProduct(productIndex) {
    productsContainer.splice(productIndex,1);
    localStorage.setItem("products" , JSON.stringify(productsContainer));
    displayProduct();

}

function searchProduct(term) {

    var cartoona = '';
    for (var i = 0; i < productsContainer.length; i++) {
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            cartoona += `<tr>
            <td>${i+1}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button class="btn btn-sm btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
        </tr>`
        }
        
    }

    document.getElementById("tableBody").innerHTML = cartoona;
    
}