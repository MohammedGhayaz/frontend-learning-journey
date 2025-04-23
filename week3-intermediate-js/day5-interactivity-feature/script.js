const buttonElement = document.querySelector('.button');
const boxElement = document.querySelector('.box');
const copyButton = document.querySelector('.copy-button')

let r=0 ,g=0 ,b = 0;
buttonElement.addEventListener('click', colorChange)
function colorChange(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    boxElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

  copyButton.addEventListener('click', ()=>{
    navigator.clipboard.writeText(`rgb(${r}, ${g}, ${b})`);
    alert('Copied');

  })