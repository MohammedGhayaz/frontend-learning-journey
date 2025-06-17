import {cart, removeFromCart, saveToStorage, updateCartQuantity } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import { renderCartQuantity } from './utils/renderCartQuantity.js';


function renderCartSummary(){
let cartSummaryHTML = '';

cart.forEach((cartItem)=>{
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product)=>{
    if(product.id === productId){
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id = "${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input js-new-quantity-${matchingProduct.id}"></input>
            <span class="link-primary save-link js-save-link" data-product-id = "${matchingProduct.id}"> Save</span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
})

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
renderCartQuantity(cart, 'js-checkout-header');


document.querySelectorAll('.js-delete-link')
  .forEach((deleteLink) =>{
    deleteLink.addEventListener('click', ()=>{
      const productId = deleteLink.dataset.productId;
      removeFromCart(productId);
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
      saveToStorage();
      renderCartQuantity(cart, 'js-checkout-header');
    })
  })


document.querySelectorAll('.js-update-link')
  .forEach((updateLink)=>{
    updateLink.addEventListener('click',()=>{
      const productId = updateLink.dataset.productId;
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.classList.add('is-editing-quantity');
    })
  })

document.querySelectorAll('.js-save-link')
  .forEach((saveLink) => {
    saveLink.addEventListener('click',()=>{
      const productId = saveLink.dataset.productId;
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      const newQuantity = Number(document.querySelector(`.js-new-quantity-${productId}`).value);
      if(!newQuantity){
        document.querySelector(`.js-new-quantity-${productId}`).value = '';
        alert('Enter the quantity to update');
        return;
      }
      container.classList.remove('is-editing-quantity');
      if(newQuantity > 0 && newQuantity <=500){
        updateCartQuantity(productId, newQuantity);
        saveToStorage();
        renderCartSummary();
      }
      else{
        alert('Minimum 1 Quantity and Maximum 500 quantity is only allowed');
      }
    })
  })
}

renderCartSummary();