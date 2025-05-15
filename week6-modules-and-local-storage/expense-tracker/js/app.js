import { clearForm, renderExpense, titleInputElement, amountInputElement, buttonElement } from './ui.js';
import { data,addExpense } from './data.js';
import { saveToStorage, getFromStorage } from './storage.js';


buttonElement.addEventListener('click',(e)=>{
  e.preventDefault();
  data = getFromStorage(data) || data;
  console.log(typeof titleInputElement.value)
  if(titleInputElement.value && amountInputElement.value){
    addExpense(titleInputElement.value, amountInputElement.value );
    renderExpense(data);
  }
  else{
    alert("Please Enter the missing input fields")
  }
  clearForm();
  saveToStorage(data);
})