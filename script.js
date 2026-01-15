let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */
function addToCart(name, price) {
  let item = cart.find(p => p.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart");
}

/* LOAD CART PAGE */
function loadCart() {
  let cartItems = document.getElementById("cart-items");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="changeQty(${index}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

/* CHANGE QUANTITY */
function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

/* SEARCH PRODUCT */
function searchProduct() {
  let value = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    let name = p.querySelector("h3").innerText.toLowerCase();
    p.style.display = name.includes(value) ? "block" : "none";
  });
}

/* CATEGORY FILTER */
function filterCategory(category) {
  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    if (category === "all" || p.classList.contains(category)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}

loadCart();
