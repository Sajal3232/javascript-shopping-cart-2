const cartinfo=document.querySelector("#cart-info");
const cart=document.querySelector("#cart");

cartinfo.addEventListener("click", function(){
    cart.classList.toggle("show-cart");
})