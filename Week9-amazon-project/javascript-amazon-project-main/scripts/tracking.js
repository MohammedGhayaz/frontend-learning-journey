import { calculateOrderDate} from "../data/orders.js";
import { getProducts, loadProductsFetch } from "../data/products.js";
import { getOrderDay, getOrderProduct } from "../data/tracking.js";



const url = new URL(window.location.href);
const orderId = url.searchParams.get('orderId');
const productId = url.searchParams.get('productId');




loadProductsFetch().then(()=>{

  function renderTrackingPage(){

    const product = getProducts(productId);
    const orderProduct = getOrderProduct(orderId, productId);
    const deliveryDate = orderProduct.estimatedDeliveryTime;
  

    const trackingHTML = `
      <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">
        Arriving on ${getOrderDay(deliveryDate)}, ${calculateOrderDate(deliveryDate)}
      </div>

      <div class="product-info">
        ${product.name}
      </div>

      <div class="product-info">
      Quantity: ${orderProduct.quantity}
      </div>

      <img class="product-image" src="${product.image}">

      <div class="progress-labels-container">
        <div class="progress-label">
          Preparing
        </div>
        <div class="progress-label current-status">
          Shipped
        </div>
        <div class="progress-label">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
    `;

    document.querySelector('.js-order-tracking').innerHTML = trackingHTML;
  }

  renderTrackingPage();   

})
