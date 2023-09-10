
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categoryButtons1 = document.querySelectorAll('#category-buttons .menu-item');

searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        categoryButtons1.forEach(function (button) {
                const itemName = button.querySelector('.item-name').textContent.toLowerCase();
                if (itemName.includes(searchTerm)) {
                    button.style.display = 'flex'; // Display matching items
                } else {
                    button.style.display = 'none'; // Hide non-matching items
                }
            });
        });

let cart = [];
const categoryButtons = document.querySelectorAll('#category-buttons button');
const categories = document.querySelectorAll('.category');
categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            categories.forEach(function(category) {
                category.style.display = 'none';
                });
const categoryId = this.id.replace('-button', '-category');
const selectedCategory = document.getElementById(categoryId);
        selectedCategory.style.display = 'block';
            });
        });

categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
                // Hide all categories
            categories.forEach(function(category) {
                    category.style.display = 'none';
                });
        const categoryId = this.id.replace('-button', '-category');
        const selectedCategory = document.getElementById(categoryId);
                selectedCategory.style.display = 'block';
            });
        });
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
    cart = [];
    updateCart();
}
const checkoutButton = document.getElementById('checkout-button');
const paymentButton = document.getElementById('payment-button');
const paymentModal = document.getElementById('payment-modal');
const closeButton = document.getElementById('close-modal');
const paymentForm = document.getElementById('payment-form');
checkoutButton.addEventListener('click', function () {
    paymentModal.style.display = 'block';
});
checkoutButton.addEventListener('click', function () {
            paymentButton.style.display = 'block';
        });
closeButton.addEventListener('click', function () {
            paymentModal.style.display = 'none';
        });
paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();  
        alert('Payment received! Thank you for your payment.');  
        paymentModal.style.display = 'none';
        });

document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting

    // Simulate a payment received alert
    alert('Payment received! Thank you for your payment.');

    // You can redirect the user to a thank-you page or perform other actions here.
});
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// JavaScript for asking for user's location
const getLocationButton = document.getElementById('getLocationButton');

getLocationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            // Use the latitude and longitude coordinates as needed
            // For example, you can send these coordinates to your server to find nearby restaurants or stores.
            
            alert(`Your location: Latitude ${latitude}, Longitude ${longitude}`);
        }, (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("Location access denied by user.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("Request for location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
            }
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});
// JavaScript for handling payments with Stripe
const stripe = Stripe('pk_test_51NoMz0Dayuus0cY70DosgUEXPZV3SqAkDXm4GQBb34BE5uMl8Fq9OsFUNF31mWht6m5QkEPfEHLhuqGBwnZecXFB00tdtTT9aV');
const elements = stripe.elements();

// Create an instance of the card Element.
const card = elements.create('card');

// Add an instance of the card Element into the `card-element` div.
card.mount('#card-element');

const form = document.getElementById('payment-form');
const errorElement = document.getElementById('card-errors');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Use Stripe.js to handle the payment
    const { token, error } = await stripe.createToken(card);

    if (error) {
        // Display any errors to the customer.
        errorElement.textContent = error.message;
    } else {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token.id }),
        })
        .then((response) => {
            if (response.ok) {
                // Payment was successful, handle success scenario.
                alert('Payment successful!');
                // Redirect or show a success message as needed.
            } else {
                // Payment failed, handle error scenario.
                alert('Payment failed. Please try again later.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
        // Send the token to your server to complete the payment.
        // You should implement server-side code to handle this token securely.
        // Example: sendTokenToServer(token);
        alert('Payment successful!');
    }
);

