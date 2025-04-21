const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('.reset');
let count = 0;
btn.addEventListener('click',()=>{
    count++;
    h1.innerHTML = `You have clicked the button ${count} times`;
})
btn.addEventListener('dblclick',()=>{
    count--;
    h1.innerHTML = `You have clicked the button ${count} times`;
})

resetButton.addEventListener('click',()=>{
    count = 0;
    h1.innerHTML = `You have clicked the button ${count} times`;
})