let images = [
 "https://m.media-amazon.com/images/I/61n3V2QXHhL._SL1500_.jpg",
 "https://m.media-amazon.com/images/I/71h9Gf7j0-L._SL1500_.jpg",
 "https://m.media-amazon.com/images/I/71n9Z8ZxFHL._SL1500_.jpg"
];

let index = 0;
let qty = 1;
let price = 1999;

function nextImage(){
 index = (index + 1) % images.length;
 document.getElementById("productImage").src = images[index];
}

function prevImage(){
 index = (index - 1 + images.length) % images.length;
 document.getElementById("productImage").src = images[index];
}

function increaseQty(){
 qty++;
 document.getElementById("qty").innerText = qty;
}

function decreaseQty(){
 if(qty > 1){
  qty--;
  document.getElementById("qty").innerText = qty;
 }
}

function addToCart(){
 let total = qty * price;
 localStorage.setItem("cart", JSON.stringify({
  name: "Noise Smart Watch",
  qty: qty,
  total: total
 }));
 alert("Added to cart ✔");
}
