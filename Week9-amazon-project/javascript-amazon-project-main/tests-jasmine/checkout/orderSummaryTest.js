import {renderCartSummary} from '../../scripts/checkout/orderSummary.js';
import { cart,loadFromStorage } from "../../data/cart.js";

describe('test suite: renderCartSummary', ()=>{
  it('displays the cart', ()=>{

    document.querySelector('.js-test-container').innerHTML = `
    <div class='js-checkout-header'></div>
    <div class='js-order-summary'></div>
    `

    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId: productId1,
        quantity: 1,
        deliveryOptionId: '1'
      },{
        productId: productId2,
        quantity: 2,
        deliveryOptionId: '2'
      }
      ]);
    })
    loadFromStorage();
    
    
    renderCartSummary();
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 1');
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 2');

    document.querySelector('.js-test-container').innerHTML = '';
  })

  it('removes a product', ()=>{
    
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
    <div class='js-checkout-header'></div>
    <div class='js-order-summary'></div>
    <div class='js-payment-summary'></div>
    `

    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId: productId1,
        quantity: 1,
        deliveryOptionId: '1'
      },{
        productId: productId2,
        quantity: 2,
        deliveryOptionId: '2'
      }
      ]);
    })
    loadFromStorage();

    renderCartSummary();

    document.querySelector(`.js-delete-link-${productId1}`).click();

    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 2');
    expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null);
    expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);

    document.querySelector('.js-test-container').innerHTML = '';
  })
})