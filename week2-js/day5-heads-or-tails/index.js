const scores = {
    wins: 0,
    losses:0
}

function resetScores(){
    scores.wins=0;
    scores.losses=0;
    alert("Scores has been succesfully reset!");
}

function playGame(userMove){
    let coin = '';
  const coinResult = Math.random();
if(coinResult > 0 && coinResult < 0.5){
    coin = 'heads';
}
else{
    coin = 'tails';
}

if(userMove === coin){
    scores.wins++;
    alert(`You won!
The result of coin is ${coin}
Scores:
Wins: ${scores.wins} 
Losses: ${scores.losses}`);
}
else{
    scores.losses++;
    alert(`You lost!
The result of coin is ${coin}
Scores:
Wins: ${scores.wins} 
Losses: ${scores.losses}`)
}
}