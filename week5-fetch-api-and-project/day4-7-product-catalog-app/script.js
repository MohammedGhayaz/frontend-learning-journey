const productsContainer = document.querySelector('.products-container');
const inputElement = document.querySelector('.input-div input');
const selectElement = document.querySelector('.category-select');
let categories = [];
let allProducts = [];
let html = '';
let selectHtml = '';
(async function (){
  try{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    allProducts = data;
    data.forEach(e => {
      html += dynamicHTML(e);
  });
  productsContainer.innerHTML = html;
}
catch(err){
  alert(err);
}})();


inputElement.addEventListener('input',()=>{
  const searchInput = inputElement.value;
  let filteredHtml = '';
  const filteredProducts =  allProducts.filter((item) => {
    console.log(searchInput);
    return  item.title.toLowerCase().includes(searchInput.toLowerCase());
  })
  filteredProducts.forEach(e => {
    filteredHtml += dynamicHTML(e);
  })
  productsContainer.innerHTML = filteredHtml;
});

(async function getCategories(){
  const response =  await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  categories = data;
  categories.forEach((e) => {
    selectHtml  += `<option value="${e}">${e}</option>`;
  })
  selectElement.innerHTML = selectHtml;
})();

selectElement.addEventListener('change', ()=>{
    let categoriesHtml = '';
  let categoryProducts = [];
  const selectedElement =  selectElement.value;
  categoryProducts = allProducts.filter((e)=>{
    if(e.category === selectedElement){
      return true;
    }
    else{
      return false;
    }
  })
  categoryProducts.forEach((e)=>{
    categoriesHtml += dynamicHTML(e);
  })
  productsContainer.innerHTML = categoriesHtml;
})

function dynamicHTML(e){
  return `<div class="grid-items">
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
}