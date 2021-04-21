import { http } from './http.js';
import {ui} from './ui.js';
// Get Products on DOM load

// All products  for admin table page
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http.get('https://607c1c5267e6530017573ae4.mockapi.io/db').then((data) => ui.showProducts(data));
}

// iphones admin
document.addEventListener('DOMContentLoaded', getAllProducts);
function getAllProducts(){
	http.get('https://607c1c5267e6530017573ae4.mockapi.io/db').then((data) => ui.showProducts(data));
}


// add product to db and admin page
document.getElementById('add-product').addEventListener('click', addNewProduct);
function addNewProduct() {
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const imageValue = document.getElementById('image').value;
	const descriptionValue = document.getElementById('description').value;
	const quantityValue = document.getElementById('quantity').value;

	let product = {
		title : titleValue,
		price: priceValue,
		image: imageValue,
		description: descriptionValue,
		quantity: quantityValue,
	};
	http
	.post(`https://607c1c5267e6530017573ae4.mockapi.io/db`, product)
	.then((data) => getProducts());

	// e.preventDefault();
	
}

// delete product from db and admin page
document.getElementById('products').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	// console.log(e.target);
	if(e.target.classList.contains('delete')){
		const id = e.target.id;
		http.delete(`https://607c1c5267e6530017573ae4.mockapi.io/db/${id}`)
		.then((data) => getProducts())
		.catch('Error on delete!');
	}
}

