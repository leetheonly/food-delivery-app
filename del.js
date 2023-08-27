let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItemsList.innerHTML = "";
    
    let total = 0;
    
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name}: $${item.price}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert("Thank you for your order!");
    cart = [];
    updateCart();
}
