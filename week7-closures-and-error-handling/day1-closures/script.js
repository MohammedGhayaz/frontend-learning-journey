function createCounter(){
  let counter = 0;
  function inner(){
    counter++;
    console.log(counter);
  }
  return inner;
}

const counter1 = createCounter();
const counter2 = createCounter();
for(let i=0;i<10;i++){
  if(i===1 || i==3 || i==5 || i==7 || i==9){
    counter1();
  }
counter2();
}