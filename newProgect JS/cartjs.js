
// var userNameStorage= window.localStorage.getItem("username"); 
// document.getElementById("userNameStorage").textContent=`Hello ${userNameStorage}`;


// var myProductStorage= JSON.parse(window.localStorage.getItem("myprodect")); 
// console.log(myProductStorage);


// var addToCart = function() {
//     console.log("minahalim");

//     const itemContainer = document.querySelector('#cart'); 

//     myProductStorage.forEach((product, i) => {
//         const productItem = `
//             <div class="item">
//                 <img src="${product.image}" alt="Product image for ${product.name}" />
//                 <div>
//                     <h3>${product.productname}</h3>
//                     <span>$ ${product.price}</span><span class="colorItem"></span>
//                 </div>


//                 <div class="inputDiv">
//                     <input type="button" value="-" class="degreasQuantity" onclick="decrement(${product.ID})"/>

//                     <input type="number" class="itemQuantity" value="1" min="1" />

//                     <input type="button" value="+" class="increasQuantity" onclick="increment(${product.ID})" />
//                 </div>

//                 <span class="quantityPrice" id="total">${product.price}</span>
//                 <span class="trash"><i class="fa-solid fa-trash" onclick="deleteproduct(${product.ID},this)"></i></span>
//             </div>
//         `;

//         itemContainer.innerHTML += productItem;
//     });

// };
// addToCart();


// function deleteproduct(id, element) {
//     console.log(id);

//     const productIndex = myProductStorage.findIndex(product => product.ID === id);

//     if (productIndex !== -1) {
//         myProductStorage.splice(productIndex, 1);

//         window.localStorage.setItem("myprodect", JSON.stringify(myProductStorage));

//         const itemContainer = element.closest('.item');
//         itemContainer.remove();

//         console.log(`Product with ID ${id} has been removed.`);
//     } 
// }






// function increment(id) {
//     const product = myProductStorage.find(product => product.ID === id);
//     const quantityInput = document.getElementById(`quantity-${id}`);
//     const totalPriceElement = document.getElementById(`total-${id}`);

//     // Increase the quantity
//     let currentQuantity = parseInt(quantityInput.value);
//     currentQuantity++;
//     quantityInput.value = currentQuantity;

//     // Update the total price
//     totalPriceElement.textContent = `$ ${(product.price * currentQuantity).toFixed(2)}`;
// }

// function decrement(id) {
//     const product = myProductStorage.find(product => product.ID === id);
//     const quantityInput = document.getElementById(`quantity-${id}`);
//     const totalPriceElement = document.getElementById(`total-${id}`);

//     // Decrease the quantity but ensure it's at least 1
//     let currentQuantity = parseInt(quantityInput.value);
//     if (currentQuantity > 1) {
//         currentQuantity--;
//         quantityInput.value = currentQuantity;

//         // Update the total price
//         totalPriceElement.textContent = `$ ${(product.price * currentQuantity).toFixed(2)}`;
//     }
// }


var userNameStorage = window.localStorage.getItem("username");
document.getElementById("userNameStorage").textContent = `Hello ${userNameStorage}`;

var myProductStorage = JSON.parse(window.localStorage.getItem("myprodect"));
console.log(myProductStorage);

var addToCart = function () {
    console.log("minahalim");

    const itemContainer = document.querySelector('#cart');

    myProductStorage.forEach((product, i) => {
        const productItem = `
            <div class="item" data-product-id="${product.ID}">
                <img src="${product.image}" alt="Product image for ${product.name}" />
                <div>
                    <h3>${product.productname}</h3>
                    <span>$ ${product.price}</span><span class="colorItem"></span>
                </div>

                <div class="inputDiv">
                    <input type="button" value="-" class="degreasQuantity" onclick="decrement(${product.ID})" />

                    <input type="number" class="itemQuantity" value="1" min="1" id="quantity-${product.ID}" />

                    <input type="button" value="+" class="increasQuantity" onclick="increment(${product.ID})" />
                </div>

                <span class="quantityPrice" id="total-${product.ID}">${product.price}</span>
                <span class="trash"><i class="fa-solid fa-trash" onclick="deleteproduct(${product.ID},this)"></i></span>
            </div>
        `;

        itemContainer.innerHTML += productItem;
    });
};
addToCart();

function deleteproduct(id, element) {
    console.log(id);

    const productIndex = myProductStorage.findIndex(product => product.ID === id);

    if (productIndex !== -1) {
        myProductStorage.splice(productIndex, 1);

        window.localStorage.setItem("myprodect", JSON.stringify(myProductStorage));

        const itemContainer = element.closest('.item');
        itemContainer.remove();

        console.log(`Product with ID ${id} has been removed.`);
    }
}

function increment(id) {
    const product = myProductStorage.find(product => product.ID === id);
    const quantityInput = document.getElementById(`quantity-${id}`);
    const totalPriceElement = document.getElementById(`total-${id}`);

    // Increase the quantity
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity++;
    quantityInput.value = currentQuantity;

    // Update the total price
    totalPriceElement.textContent = `$ ${(product.price * currentQuantity).toFixed(2)}`;
}

function decrement(id) {
    const product = myProductStorage.find(product => product.ID === id);
    const quantityInput = document.getElementById(`quantity-${id}`);
    const totalPriceElement = document.getElementById(`total-${id}`);

    // Decrease the quantity but ensure it's at least 1
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        currentQuantity--;
        quantityInput.value = currentQuantity;

        // Update the total price
        totalPriceElement.textContent = `$ ${(product.price * currentQuantity).toFixed(2)}`;
    }
}
