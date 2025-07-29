import {cart, removeFromCart, saveToStorage, updateCartDeliveryOption, updateCartQuantity } from '../../data/cart.js';
import { getProducts, products } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import { renderCartQuantity } from '../utils/renderCartQuantity.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { calculateDeliveryDate, deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';



export function renderCartSummary(){
let cartSummaryHTML = '';

cart.forEach((cartItem)=>{
  const productId = cartItem.productId;
  const matchingProduct = getProducts(productId);
  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  const dateString = calculateDeliveryDate(dayjs, deliveryOption);

  cartSummaryHTML += `<div class="cart-item-container
      js-cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
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
          <div class="product-quantity
          js-product-quantity-${matchingProduct.id}">
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
          ${deliveryOptionsHTML(matchingProduct, cartItem)}    
            </div>
          </div>
        </div>
      </div>
    </div>`
})

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
renderCartQuantity(cart, 'js-checkout-header');

function deliveryOptionsHTML(matchingProduct, cartItem){
  let html = '';
  
  
  deliveryOptions.forEach((deliveryOption)=>{
    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
    const dateString = calculateDeliveryDate(dayjs, deliveryOption);
    const priceString = deliveryOption.priceCents === 0 ? 'Free -' : `$${formatCurrency(deliveryOption.priceCents)} - `;


   html += `<div class="delivery-option">
    <input type="radio" ${isChecked? 'checked' : ''}
    class="delivery-option-input js-delivery-option-input"
    name="delivery-option-${matchingProduct.id}" 
    data-delivery-option-id="${deliveryOption.id}"
    data-product-id="${matchingProduct.id}">
    <div>
      <div class="delivery-option-date">
        ${dateString}
      </div>
      <div class="delivery-option-price">
        ${priceString} Shipping
      </div>
   </div>
  </div>
  `;
  })
  return html;
}


document.querySelectorAll('.js-delete-link')
  .forEach((deleteLink) =>{
    deleteLink.addEventListener('click', ()=>{
      const productId = deleteLink.dataset.productId;
      removeFromCart(productId);
      saveToStorage();
      renderCartQuantity(cart, 'js-checkout-header');
      renderCartSummary();
      renderPaymentSummary();
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
        renderPaymentSummary();
      }
      else{
        alert('Minimum 1 Quantity and Maximum 500 quantity is only allowed');
      }
    })
  })
  
  
  document.querySelectorAll('.js-delivery-option-input')
  .forEach((deliveryOptionInput) => {
    deliveryOptionInput.addEventListener('click', ()=>{
      const {deliveryOptionId, productId} = deliveryOptionInput.dataset;
      updateCartDeliveryOption(deliveryOptionId, productId);
      saveToStorage();
      renderCartSummary();
      renderPaymentSummary();
    })
  })
  
}
