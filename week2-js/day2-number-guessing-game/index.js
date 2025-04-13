let attempts = 0;
let number = 0;


let randomNumber = Math.floor(Math.random()*100 + 1);


for(let i=randomNumber; randomNumber!=number; i++){
    number = Number(prompt("Guess a number between 1-100!"));
    
    if(randomNumber == number){
        alert("You have guessed the right number in " + attempts + " attempts")
    }
    else if(randomNumber < number){
        attempts++;
        alert("Number is higher, Try guessing a lower number")
    }
    else if(randomNumber > number){
        attempts++;
        alert("Number is lower, Try guessing a higher number");
    }
}