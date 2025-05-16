let expenses = [];

const addExpense = (title, amount) => {
  expenses.push({ id: Date.now(), title, amount });
  console.log(expenses);
};

const removeExpense = (id) => {
  expenses = expenses.filter((exp) => {
    exp.id !== id
  });
};

const getExpenses = () => expenses;

const setExpenses = (dataFromStorage) => {
  expenses = dataFromStorage;
};

export { addExpense, removeExpense, getExpenses, setExpenses };
