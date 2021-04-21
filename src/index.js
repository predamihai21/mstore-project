import { http } from './http.js';
import {ui} from './ui.js';

document.addEventListener('DOMContentLoaded', showAllProducts);

function showAllProducts(){
    http.get('https://607c1c5267e6530017573ae4.mockapi.io/db')
    .then((data) => ui.showAllProducts(data))


    // http.get("https://607c1c5267e6530017573ae4.mockapi.io/db").then((data) => ui.showIpadProducts(data));
}

