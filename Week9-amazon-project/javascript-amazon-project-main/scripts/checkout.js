import { loadProductsFetch } from "../data/products.js";
import { renderCartSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import { Car } from "../data/car.js";
// import '../data/backend-practice.js'

loadProductsFetch().then(()=>{
  renderCartSummary();
  renderPaymentSummary();
})

// new Promise((resolve)=>{
//   loadProducts(()=>{
//     resolve();
//   });
// }).then(()=>{
//   renderCartSummary();
//   renderPaymentSummary();
// })

// loadProducts(()=>{
//   renderCartSummary();
//   renderPaymentSummary();
// })