import { calculateOrderDate} from "../data/orders.js";
import { getProducts, loadProductsFetch } from "../data/products.js";
import { getOrderDay, getOrderProduct, trackShipment } from "../data/tracking.js";



const url = new URL(window.location.href);
const orderId = url.searchParams.get('orderId');
const productId = url.searchParams.get('productId');




loadProductsFetch().then(()=>{

  function renderTrackingPage(){

    const product = getProducts(productId);
    const orderProduct = getOrderProduct(orderId, productId);
    const deliveryDate = orderProduct.estimatedDeliveryTime;
   
    const status = trackShipment(orderId, deliveryDate);

    const trackingHTML = `
      <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">
        ${ status>=100? `Delivered on ${getOrderDay(deliveryDate)}, ${calculateOrderDate(deliveryDate)}`:
          `Arriving on ${getOrderDay(deliveryDate)}, ${calculateOrderDate(deliveryDate)}`
        }
      </div>

      <div class="product-info">
        ${product.name}
      </div>

      <div class="product-info">
      Quantity: ${orderProduct.quantity}
      </div>

      <img class="product-image" src="${product.image}">

      <div class="progress-labels-container">
        <div class="progress-label ${status>=0 && status<50?'current-status': ''}">
          Preparing
        </div>
        <div class="progress-label ${status>=50 && status<100?'current-status': ''}">
          Shipped
        </div>
        <div class="progress-label ${status>=100?'current-status': ''}">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar js-progress-bar"></div>
      </div>
    `;

    document.querySelector('.js-order-tracking').innerHTML = trackingHTML;

    if(status>=0 && status<50){
      document.querySelector('.js-progress-bar').style.width = '0%';
    }else if(status>=50 && status<100){
      document.querySelector('.js-progress-bar').style.width = '50%';
    }
    else{
      document.querySelector('.js-progress-bar').style.width = '100%';
    }
  }

 

  renderTrackingPage();   
})
