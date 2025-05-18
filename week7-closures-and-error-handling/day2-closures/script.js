// function createScoreTracker(){
//   let score = 0;

//   return {
//     addPoint(){
//       score++;
//     },
//     getScore(){
//       return score;
//     }
//   }
// }

// const scoreTracker1 = createScoreTracker();
// scoreTracker1.addPoint();
// scoreTracker1.addPoint();
// scoreTracker1.addPoint();
// scoreTracker1.getScore();

// const scoreTracker2 = createScoreTracker();
// scoreTracker2.addPoint();
// scoreTracker2.getScore();


function createGreeter(){
  let name = '';
  return function greetUser(name){
    return `Good Morning ${name}`;
  }
}

const user = createGreeter();
console.log(user('Ghayaz'));
