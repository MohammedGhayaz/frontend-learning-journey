import { removeExpense, getExpenses } from './data.js';
import { saveToStorage } from './storage.js';



const buttonElement = document.querySelector('.button');
const titleInputElement = document.querySelector('.title-input');
const amountInputElement = document.querySelector('.amount-input');
const expenseList = document.querySelector('.list');

const clearForm = () => {
  titleInputElement.value ='';
  amountInputElement.value = '';
}

function renderExpense(data) {
  let html = `
    <div class="align-div"><ul>Sl. No</ul></div>
    <div class="align-div"><ul>Title</ul></div>
    <div class="align-div"><ul>Amount</ul></div>
    <div class="align-div"><ul>Action</ul></div>
  `;

  data.forEach((e, index) => {
    html += `
      <div class="align-div"><ul>${index + 1}</ul></div>
      <div class="align-div"><ul>${e.title}</ul></div>
      <div class="align-div"><ul>${e.amount}</ul></div>
      <div class="align-div">
        <ul>
          <button class="delete-button" data-id="${e.id}">Delete</button>
        </ul>
      </div>`;
  });

  expenseList.innerHTML = html;

  document.querySelectorAll('.delete-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.target.dataset.id);
      removeExpense(id);
      renderExpense(getExpenses());
      saveToStorage(getExpenses());
    });
  });
}


export {clearForm, renderExpense, titleInputElement, amountInputElement, buttonElement};