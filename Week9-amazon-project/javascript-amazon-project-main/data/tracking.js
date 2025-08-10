import { getDayOfMonth } from "../scripts/utils/getDate.js";
import { getOrder, orders } from "./orders.js";

export function trackShipment(orderId, deliveryDate){
  const order = getOrder(orderId);

  const currentTime = getDayOfMonth(new Date());
  const orderTime = getDayOfMonth(order.orderTime);
  const deliveryTime = getDayOfMonth(deliveryDate);

  const progress = (((currentTime - orderTime)/(deliveryTime - orderTime))*100).toFixed(2);
  return progress;
}


export function getOrderProduct(orderId, productId){
  let matchingOrderProduct;

  orders.forEach((orderItem)=>{
    if(orderItem.id === orderId){
      orderItem.products.forEach((orderProduct)=>{
        if(orderProduct.productId === productId){
          matchingOrderProduct = orderProduct;
        }
      })
    }
  })

  return matchingOrderProduct;
}


export function getOrderDay(orderDate){

  const date = new Date(orderDate);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
return days[date.getDay()];
}