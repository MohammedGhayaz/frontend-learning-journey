const saveToStorage = (data) => {
  localStorage.setItem('expensesData', JSON.stringify(data));
};

const getFromStorage = () => {
  return JSON.parse(localStorage.getItem('expensesData')) || [];
};

export { saveToStorage, getFromStorage };
