import {calculateOrderDate, orders} from '../data/orders.js';
import { getProducts, loadProductsFetch} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProductsFetch().then(()=>{

  // const url = new URL(window.location.href);
  //       const orderId = url.searchParams.get('orderId');
  //       console.log(orderId);

  // console.log(orders)




  function renderOrders(){
  let ordersHtml= '';

  orders.forEach((orderItem) =>{
    ordersHtml += `
    <div class="order-container">
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${calculateOrderDate(orderItem.orderTime)}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>$${formatCurrency(orderItem.totalCostCents)}</div>
          </div>
        </div>

        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${orderItem.id}</div>
        </div>
      </div>

      
      ${generateOrdersProductsHTML(orderItem)}
    `
  });
  console.log(ordersHtml);
  document.querySelector('.js-order-grid').innerHTML = ordersHtml;
  }

  function generateOrdersProductsHTML(orderItem){
    let matchingProduct;
    let ordersHtml = '';
    

    orderItem.products.forEach((orderProduct)=>{
      matchingProduct = getProducts(orderProduct.productId);

      ordersHtml += 
      `<div class="order-details-grid">
        <div class="product-image-container">
            <img src="${matchingProduct.image}">
          </div>

          <div class="product-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${calculateOrderDate(orderProduct.estimatedDeliveryTime)}
            </div>
            <div class="product-quantity">
              Quantity: ${orderProduct.quantity}
            </div>
            <button class="buy-again-button button-primary">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html?${orderItem.id}&${matchingProduct.id}">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>
        </div>
      </div>`
    });

    return ordersHtml;
  }


  renderOrders();
});