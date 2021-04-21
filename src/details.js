import { http } from './http.js';
import {ui} from './ui.js';
import { initCart } from "./app.js";

const id = window.location.search.split('=')[1];
window.onload= () => {
    if (window.location.search !== '') {
        const id = window.location.search.split('=')[1];
        http 
                .get('https://607c1c5267e6530017573ae4.mockapi.io/db/' + id)
                .then((data) => ui.showDetails(data))
    }
}

export function btnAddToCart() {
    document.getElementById(`${id}`).addEventListener("click", function (e) {
       if (e.target.id == id) {
          // alert("Product add to cart");
          addItemToCart(id);
       }
       ui.addToCartMessage();
    });
}


function addItemToCart(id) {
    const cartList = JSON.parse(localStorage.getItem("products"));
    cartList.push(id);
    localStorage.setItem("products", JSON.stringify(cartList));
}

