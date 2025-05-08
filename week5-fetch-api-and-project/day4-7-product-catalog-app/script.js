const productsContainer = document.querySelector('.products-container');
const inputElement = document.querySelector('.input-div input');
let allProducts = [];
let html = '';
(async function getProducts(){
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  allProducts = data;
  data.forEach(e => {
    html += `<div class="grid-items">
    <div class="image">
      <img src="${e.image}" alt="Image">
    </div>
    <div class="title">
      ${e.title}
    </div>
    <div class="description">
     ${e.description}
    </div>
    <div class="price">
      $${e.price}
    </div>
    <div class="button">
      <button> Buy Now </button>
    </div>
    </div>`;
  });
  productsContainer.innerHTML = html;
})();

inputElement.addEventListener('input',async ()=>{
  const searchInput = inputElement.value;
})