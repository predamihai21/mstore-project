import { http } from './http.js';
import {ui} from './ui.js';

document.addEventListener('DOMContentLoaded', showIphone);

function showIphone() {
    // http.get('http://localhost:3000/products').then((data) => ui.showIphonesProductsOnly(data));
    http.get("https://607c1c5267e6530017573ae4.mockapi.io/db").then((data) => ui.showIphonesProductsOnly(data));
}

