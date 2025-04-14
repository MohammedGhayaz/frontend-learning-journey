let shoppingList = [];

let itemName = '';
let qty = 0;
document.querySelector('.js-display-btn').addEventListener('click', displayItems);
document.querySelector('.js-add-items-btn').addEventListener('click', addItems);
document.querySelector('.js-reset-btn').addEventListener('click', reset);



function addItems(){
  document.querySelector('.js').innerHTML = ``;
  if(!document.querySelector('.js-item-name').value){
    alert("Please enter the item name");
  }
  else if(!document.querySelector('.js-qty').value){
    alert("Please enter the quantity");
    
  }
  else{
    itemName = document.querySelector('.js-item-name').value;
    qty = parseInt(document.querySelector('.js-qty').value);
    let existingItem = undefined;

    for(let i=0; i<shoppingList.length;i++){
      if(shoppingList[i].iname.toLowerCase() === itemName.toLowerCase()){
        existingItem = shoppingList[i];
      }
    }
      if(existingItem){
        existingItem.quantity += qty;
        alert("Added to cart successfully!");
        document.querySelector('.js-item-name').value = '';
        document.querySelector('.js-qty').value ='';
      }
      else{
        shoppingList.push({iname:`${itemName}`, quantity: qty});
        alert("Added to cart successfully!");
        document.querySelector('.js-item-name').value = '';
        document.querySelector('.js-qty').value ='';
      }
    }
  }



function displayItems(){
  document.querySelector('.js').innerHTML = ``;
  if(!shoppingList.length){
    document.querySelector('.js').innerHTML = `<div class="label"> The cart is empty! Start adding items to the cart</div>`;
  }
  else{
    for(let i=0;i<shoppingList.length;i++){
      document.querySelector('.js').innerHTML += `<div class="label list"> ${shoppingList[i].iname} : ${shoppingList[i].quantity} </div>`;
    }
  }
}

function reset(){
  shoppingList = [];
  displayItems();
  document.querySelector('.js').innerHTML = ``;
}

