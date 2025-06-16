export function updateCartQuantity(cart, classString){
  let cartQuantity = 0;
  cart.forEach((item)=>{
    cartQuantity += item.quantity;
  });
  if(classString === 'js-checkout-header'){
    document.querySelector(`.${classString}`).innerHTML = `${cartQuantity} items`;
  }
  else{
    document.querySelector(`.${classString}`).innerHTML = cartQuantity;
  }
}