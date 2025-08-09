import { validDeliveryOption } from "./deliveryOptions.js";

export let cart; 

loadFromStorage();

export function resetCart(){
  loadFromStorage();
  cart = [];
  saveToStorage();
}

export function loadFromStorage(){
cart = JSON.parse(localStorage.getItem('cart')) || [];
}

export function addToCart(productId){
      const selectorValue = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      let matchingItem;
      cart.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
      })
      
      if(matchingItem){
        matchingItem.quantity += selectorValue;
      }
      else{
        cart.push({
          productId,
          quantity: selectorValue,
          deliveryOptionId: '1'
        });
      }

      saveToStorage();
}

let TimeoutId;
export function blinkAddToCartMessage(productId){
  document.querySelector(`.js-added-to-cart-${productId}`)
  .classList.add('visible-added-to-cart');
  if(TimeoutId){
    clearTimeout(TimeoutId);
    }
  TimeoutId = setTimeout(()=>{
    document.querySelector(`.js-added-to-cart-${productId}`)
    .classList.remove('visible-added-to-cart');
  },2000)
}


export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem)=>{
    if(productId !== cartItem.productId){
      newCart.push(cartItem);
    }
  })
  cart = newCart;
}

export function saveToStorage(){
localStorage.setItem('cart',JSON.stringify(cart))
}

export function updateCartQuantity(productId, newQuantity){
  let matchingItem;
      cart.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
          matchingItem.quantity = newQuantity;
        }
      })
}

export function updateCartDeliveryOption(deliveryOptionId, productId){
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(cartItem.productId === productId){
      matchingItem = cartItem;
    }
    if(matchingItem){
      if(validDeliveryOption(deliveryOptionId)){
        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToStorage();
      }
    }
});
}