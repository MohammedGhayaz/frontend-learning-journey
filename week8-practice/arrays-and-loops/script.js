// Excercise 11a
const nums = [10,20,30];
nums[2] = 99;
console.log(nums);

// Excercise 11b

function getLastValue(array){
  return array[array.length-1];
}

console.log(getLastValue([10,20,30,40,50]));

//Excercise 11c

function swapArray(array){
const swappedArray = [];

for(let i=0;i<array.length;i++){
  if(i===0){
    swappedArray[i] = array[array.length-1];
  }
  else if(i===array.length-1){
    swappedArray[i] = array[0];
  }
  else{
    swappedArray[i] = array[i];
  }
}
return swappedArray;
}