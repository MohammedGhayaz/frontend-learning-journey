export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 1
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2
}
];

export function addToCart(productId){
      const selectorValue = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
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
        });
      }
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