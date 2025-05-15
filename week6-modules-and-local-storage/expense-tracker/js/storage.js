const saveToStorage = (data) =>{
  localStorage.setItem( 'expensesData', JSON.stringify(data));
}

const getFromStorage = (data) =>{
  data = JSON.parse(localStorage.getItem('expenseData'));
  return data;
}

export { saveToStorage, getFromStorage };