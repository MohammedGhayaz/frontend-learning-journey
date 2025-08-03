import { validDeliveryOption } from "./deliveryOptions.js";

function Cart(localStorageKey){
  const cart = {
    cartItems : undefined,
    TimeoutId : undefined,

    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
      },{
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 2,
      deliveryOptionId: '2'
      }];
    },


    saveToStorage(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems))
    },


    addToCart(productId){
      let selectorValue;
      if(!document.querySelector(`.js-quantity-selector-${productId}`)){
        selectorValue = 1;
      }
      else{
        selectorValue = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      }
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
            matchingItem = cartItem;
        }
      })
          
      if(matchingItem){
        matchingItem.quantity += selectorValue;
      }
      else{
        this.cartItems.push({
          productId,
          quantity: selectorValue,
          deliveryOptionId: '1'
        });
      }
    
      this.saveToStorage();
    },


    blinkAddToCartMessage(productId){
      document.querySelector(`.js-added-to-cart-${productId}`)
      .classList.add('visible-added-to-cart');
      if(this.TimeoutId){
        clearTimeout(this.TimeoutId);
        }
      this.TimeoutId = setTimeout(()=>{
        document.querySelector(`.js-added-to-cart-${productId}`)
        .classList.remove('visible-added-to-cart');
      },2000)
    },


    removeFromCart(productId){
      const newCart = [];
    
      this.cartItems.forEach((cartItem)=>{
        if(productId !== cartItem.productId){
          newCart.push(cartItem);
        }
      })
      this.cartItems = newCart;
    },


    updateCartQuantity(productId, newQuantity){
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
          matchingItem.quantity = newQuantity;
        }
      })
    },


    updateCartDeliveryOption(deliveryOptionId, productId){
      let matchingItem;
      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
        if(matchingItem){
          if(validDeliveryOption(deliveryOptionId)){
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
          }
        }
    });
    }
  } 

  return cart;
}

const cart = Cart('cart-oop');
cart.loadFromStorage();


const businessCart = Cart('cart-business');
businessCart.loadFromStorage();