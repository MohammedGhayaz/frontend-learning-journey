import { addToCart, cart, loadFromStorage, removeFromCart, saveToStorage, updateCartDeliveryOption } from "../../data/cart.js";

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


describe('test suite: removeFromCart()',()=>{

  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(()=>{

    spyOn(localStorage,'setItem');

    spyOn(localStorage,'getItem').and.callFake(()=>{
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
  })

  it('removes product from the cart', ()=>{
    
    removeFromCart(productId1);
    saveToStorage();
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
      productId: productId2,
        quantity: 2,
        deliveryOptionId: '2'
    }]))
  })

  it('works with removing unexisiting product from the cart', ()=>{

    removeFromCart('exampleId');
    saveToStorage();
    expect(cart.length).toEqual(2);
    expect(cart[0].productId).toEqual(productId1);
    expect(cart[1].productId).toEqual(productId2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
      productId: productId1,
      quantity: 1,
      deliveryOptionId: '1'
    },
    {
      productId: productId2,
      quantity: 2,
      deliveryOptionId: '2'
    }]))
  })
})

describe('test suite: updateDeliveryOption()',()=>{
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

beforeEach(()=>{

    spyOn(localStorage,'setItem');

    spyOn(localStorage,'getItem').and.callFake(()=>{
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
  })
  
  it('updateDeliveryOption() works perfect', ()=>{
    

    updateCartDeliveryOption('3', productId1);
    expect(cart.length).toEqual(2);
    expect(cart[0].deliveryOptionId).toEqual('3');
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(([{
        productId: productId1,
        quantity: 1,
        deliveryOptionId: '3'
      },{
        productId: productId2,
        quantity: 2,
        deliveryOptionId: '2'
      }
      ])))
  })

  it('updateDeliveryOption() with unexisting product', ()=>{
    updateCartDeliveryOption('3', 'productId1');
    expect(cart.length).toEqual(2);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).not.toHaveBeenCalledWith('cart', JSON.stringify(([{
        productId: productId1,
        quantity: 1,
        deliveryOptionId: '1'
      },{
        productId: productId2,
        quantity: 2,
        deliveryOptionId: '2'
      }
      ])))
  })

  it('updateDeliveryOption() with unexisting deliveryOptionId', ()=>{
    updateCartDeliveryOption('4', productId1);
    expect(cart.length).toEqual(2);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).not.toHaveBeenCalledWith('cart', JSON.stringify(([{
        productId: productId1,
        quantity: 1,
        deliveryOptionId: '1'
      },{
        productId: productId2,
        quantity: 2,
        deliveryOptionId: '2'
      }
      ])))
  })

})