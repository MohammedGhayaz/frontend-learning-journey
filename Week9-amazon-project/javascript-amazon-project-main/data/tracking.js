import { orders } from "./orders.js";

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