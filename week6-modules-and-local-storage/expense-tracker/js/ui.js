const buttonElement = document.querySelector('.button');
const titleInputElement = document.querySelector('.title-input');
const amountInputElement = document.querySelector('.amount-input');
const expenseList = document.querySelector('.list');

const clearForm = () => {
  titleInputElement.value ='';
  amountInputElement.value = '';
}


function renderExpense(data) { 
  let html = `<div class="align-div">
    <ul>Sl. No</ul>
  </div>
  <div class="align-div">
    <ul>Name of the Budget</ul>
  </div>
  <div class="align-div">
    <ul>Price</ul>
  </div>
  <div class="align-div">
    <ul>Action</ul>
  </div>`;
  console.log(data);
  data.forEach((e,index) => {
    html += `<div class="align-div">
    <ul>${index + 1}</ul>
  </div>
  <div class="align-div">
    <ul>${e.title}</ul>
  </div>
  <div class="align-div">
    <ul>${e.amount}</ul>
  </div>
  <div class="align-div">
    <ul>
      <button onclick="localStorage.clear();" class="delete-button"> Delete</button>
    </ul>
  </div>`
  });
  expenseList.innerHTML = html;
}


export {clearForm, renderExpense, titleInputElement, amountInputElement, buttonElement};