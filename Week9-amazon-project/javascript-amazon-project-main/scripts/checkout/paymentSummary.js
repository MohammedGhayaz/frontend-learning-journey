import { cart } from "../../data/cart.js"
import { renderCartQuantity } from "../utils/renderCartQuantity.js"
import { products } from "../../data/products.js"
import {formatCurrency} from '../utils/money.js'
import { deliveryOptions } from "../../data/deliveryOptions.js"



export function renderPaymentSummary(){
  let paymentSummaryHTML = '';
  let totalProductsPrice = 0;
  let totalShippingPrice = 0;

  cart.forEach( cartItem => {

    products.forEach((product)=>{
      if(cartItem.productId === product.id){
        const productPriceCents = product.priceCents;
        totalProductsPrice += productPriceCents*cartItem.quantity;
      }
    })

    deliveryOptions.forEach((deliveryOption) => {
      if(cartItem.deliveryOptionId === deliveryOption.id){
        const shippingPrice = deliveryOption.priceCents;
        totalShippingPrice += shippingPrice;
      }
    })
    
  });

  const totalPriceCentsBeforeTax = totalProductsPrice + totalShippingPrice;
  const taxPriceCents = totalPriceCentsBeforeTax * 0.1;
  const totalPriceCentsAfterTax = totalPriceCentsBeforeTax + taxPriceCents;
  


  paymentSummaryHTML += `
        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (${renderCartQuantity(cart)}):</div>
          <div class="payment-summary-money">$${formatCurrency(totalProductsPrice)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$${formatCurrency(totalShippingPrice)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${formatCurrency(totalPriceCentsBeforeTax)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${formatCurrency(taxPriceCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${formatCurrency(totalPriceCentsAfterTax)}</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>`;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  document.querySelectorAll('.js-delivery-option-input')
  .forEach((deliveryOptionInput) => {
    deliveryOptionInput.addEventListener('click', ()=>{
      renderPaymentSummary();
    })
  })
}