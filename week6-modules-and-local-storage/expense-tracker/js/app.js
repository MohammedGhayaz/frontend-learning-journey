import { clearForm, renderExpense, titleInputElement, amountInputElement, buttonElement } from './ui.js';
import { addExpense, getExpenses, setExpenses } from './data.js';
import { saveToStorage, getFromStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const dataFromStorage = getFromStorage();
  setExpenses(dataFromStorage);
  renderExpense(getExpenses());
});

buttonElement.addEventListener('click', (e) => {
  e.preventDefault();

  const title = titleInputElement.value.trim();
  const amount = amountInputElement.value.trim();

  if (title && amount) {
    addExpense(title, amount);
    renderExpense(getExpenses());
    saveToStorage(getExpenses());
    clearForm();
  } else {
    alert("Please enter both title and amount");
  }
});
