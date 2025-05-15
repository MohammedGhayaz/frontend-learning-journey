let data = [];

const addExpense = ( title, amount ) => {
  data.push({title, amount});
  console.log(data);
}

const removeExpenses = (title) => {
  const expenseToRemove = data.indexOf(tit)
  data.forEach((e)=>{
    if(e.title == title){
      data.splice(expenseToRemove, 1);
    }
  })
}



const getExpenses = () => {
  return data;
}

export { data, addExpense, removeExpenses, getExpenses };