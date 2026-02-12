let cart = [];

function addToCart(productName, price) {
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price} x ${item.quantity}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    updateTotal();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function updateTotal() {
    let totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 
        0
    );

    document.getElementById("totalPrice").innerHTML =
        "Total Price: ₹" + totalPrice;
}
