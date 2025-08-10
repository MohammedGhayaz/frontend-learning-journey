import {resetCart} from './cart.js';

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function getOrder(orderId){
  let matchingOrder;
  orders.forEach(orderItem => {
    if(orderId === orderItem.id){
      matchingOrder = orderItem;
    }
  });
  return matchingOrder;
}


export function addOrder(order){
  orders.unshift(order);
  saveToStorage();
  resetCart();
}

function saveToStorage(){
localStorage.setItem('orders', JSON.stringify(orders));
}

export function calculateOrderDate(orderDate){
  const date = new Date(orderDate);
  const months = 
  [ 'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
return `${months[date.getMonth()]} ${date.getDate()}`;
}