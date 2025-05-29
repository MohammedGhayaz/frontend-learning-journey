// Excercise 10c
console.log(document.querySelector('.js-buttonn').classList.contains('js-buttonn'));

// Excercise 10d,10e,10f

const gamingButton = document.querySelectorAll('.js-gaming-button');

gamingButton.forEach((button)=>{
  button.addEventListener('click', ()=>{
    if(button.classList.contains('is-toggled')){
      gamingButton.forEach((button)=>{
        button.classList.remove('is-toggled');
      })
    }
    else{
      gamingButton.forEach((button)=>{
        button.classList.remove('is-toggled');
      })
      button.classList.add('is-toggled');
    }
  });
})


const myArray = [10,20,30,50];



