const btn = document.querySelector('.btn');
let count = 0;
btn.addEventListener('click',()=>{
    count++;
    alert(`You have clicked the button ${count} times`);
})