import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', ()=>{
  const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const inputElement = document.createElement('input');

  beforeEach(()=>{
    spyOn(localStorage, 'setItem');

    
    inputElement.className = `js-quantity-selector-${productId}`;
    inputElement.value = '1';
    document.body.appendChild(inputElement);
  })

  it('adds exisitng product to the cart', ()=>{

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([
        {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }
      ]);
    })
    loadFromStorage();


    addToCart(productId);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }
    ]))
  })

  it('adds new product to the cart',()=>{

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    })

    loadFromStorage();
    
    
    

    addToCart(productId);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }
    ]))

    
  })
  
  afterEach(()=>{
     document.body.removeChild(inputElement);
   })
})