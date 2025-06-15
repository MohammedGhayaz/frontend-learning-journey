export const cart = [];

export function addToCart(productId){
      let matchingItem;
      cart.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
      })
      
      if(matchingItem){
        matchingItem.quantity += Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      }
      else{
        cart.push({
          productId,
          quantity: Number(document.querySelector(`.js-quantity-selector-${productId}`).value),
        });
      }
}

let TimeoutId;
function blinkAddToCartMessage(productId){
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