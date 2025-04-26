// // console.log('Hello');

// greet = () => console.log('Hello there');

// // setTimeout(greet, 4000);

// // setInterval(function() {
// //     console.log("Hello every 1 second");
// //   }, 1000);

  
// function greetUser(userName, callback){
//     console.log('Hello ' + userName);
//     callback();
// }

// greetUser('Ghayaz',greet)

// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//       console.log("Step 2");
//       setTimeout(() => {
//         console.log("Step 3");
//       }, 1000);
//     }, 1000);
//   }, 1000);

// Excercise 1

// console.log('Immediately...');
// setTimeout(()=>{
//     console.log('3 Seconds later..')
// },3000)
  

// Excercise 2

// setInterval(()=>{
//     console.log('Learning Javascript');
// },2000);

// Excercise 3

// let count = 5;

// const IntervalId = setInterval(()=>{
//     console.log(count);
//     count--;
//     if(count==0){
//         console.log('Go!');
//         clearInterval(IntervalId);
//     }
// },1000);


// Excercise 4

// function greet(name, callback){
//     console.log('Hello, ' + name);
//     callback();
// }
// function sayGoodBye(){
//     console.log('GoodBye!');
// }

// greet('Ghayaz', sayGoodBye);


// Excercise 5
// let result = 0;
// function doMath(num1,num2, callback){
//     result = num1 + num2;
//     callback(result);
// }

// function displayResult(result){
//     console.log(result);
// }

// doMath(5,2,displayResult);

// Excercise 6

// setTimeout(()=> {
// console.log('Task1');
// setTimeout(()=>{
//     console.log('Task2');
//     setTimeout(()=>{
//         console.log('Task3');
//     },1000);
// },1000)
// },1000)

// Excercise 7

// setTimeout(()=> {
// console.log('3');
// setTimeout(()=>{console.log('2');
//     setTimeout(()=>{
//         console.log('1');
//             setTimeout(()=>{console.log('Go');},1000)
//     },1000);
// },1000)
// },1000)


setTimeout(()=>{
    console.log('Loading data...');
    setTimeout(()=>{
        console.log('Fetching from server...');
        setTimeout(()=>{
            console.log('Recieved data!');
        },1000);
    },2000)
},2000)