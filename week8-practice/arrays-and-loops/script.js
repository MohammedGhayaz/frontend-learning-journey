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

//Excercise 11d

for(let i=0; i<=10; i=i+2){
  console.log(i);
}

//Excercise 11e

for(let i=5; i>=0; i--){
  console.log(i);
}

//Excercise 11f
console.log('Excercise 11f');

for(const element of [0,1,2]){
  console.log(element + 1);
}

//Excercise 11g
console.log('Excercise 11g');

function addArray(arr){
 const newArray =[];
 arr.forEach((e, index)=> {
  newArray[index] = e+1;
  });
  return newArray;
}
//Excercise 11i
console.log('Excercise 11i');

function addArray(arr, num){
 const newArray =[];
 arr.forEach((e, index)=> {
  newArray[index] = e+num;
  });
  return newArray;
}
console.log(addArray([10,22], 5));


//Excercise 11j

function addArrays(array1,array2){
  let addedArray = [];
  console.log(`${array1.length} - ${array2.length}`);
  if(array1.length === array2.length){
    for(let i=0;i<array1.length;i++){
      addedArray[i] = array1[i] + array2[i];
    }  
  }
  else if(array1.length < array2.length){
    for(let i=0;i<array1.length;i++){
      addedArray[i] = array1[i] + array2[i];
    }  
    for(let i=array1.length; i<array2.length; i++){
      addedArray[i] = array2[i];
    }
  }
    else{
      for(let i=0;i<array2.length;i++){
        addedArray[i] = array1[i] + array2[i];
      }  
      for(let i=array2.length; i<array1.length; i++){
        addedArray[i] = array1[i];
      }
    }
return addedArray;
}


//Excercise 11k

function countPositive(nums){
  let count =0;
  nums.forEach(element=>{
    if(element>0){
      count++;
    }
  })
  return count;
}

// Excercise 11l and 11m

function MinMax(nums){
 const obj = {
  min:0,
  max:0
 };

 if(nums.length === 0){
  obj.min = null;
  obj.max = null;
 }
 if(nums.length === 1){
  obj.min = nums[0];
  obj.max = nums[0];
 }
 if(nums.length > 1){
  for(let i=0;i<nums.length;i++){
   if(nums[i]<obj.min){
    obj.min = nums[i];
   }
   if(nums[i]> obj.max){
    obj.max = nums[i];
   }
  }
 }
return obj;
}

// Excercise 11n

function countWords(words){
const result = {};

for(let i=0;i<words.length;i++){
  const word = words[i];
  if(!result[word]){
    result[word] = 1;
  }
  else{
    result[word]++;
  }
}
return result;
}

// Excercise 11o
let temp = -1;
['hello','world','search','good'].forEach((string, index)=>{
  if(string === 'search'){
    temp = index;
  }
})
console.log(temp);


//Excercise 11p
const arr = ['hello','search','world','search','good']
let index = -1;

for(let i=0; i<arr.length ; i++){
  if(arr[i]==='search'){
    index = i;
    break;
  }
}
console.log(index);


// Excercise 11q
function findIndex(array, word){
  let index = -1;
  for(let i=0; i<array.length;i++){
    if(array[i]===word){
      index = i;
      return index;
    }
  }
  return index;
}

// Excercise 11r,11s,11t

function removeEgg(foods){
  foods = foods.reverse();
  let count = 2;
  let filteredArray = [];
  for(let i=0; i<foods.length;i++){
    if(count>0){
      if(foods[i] === 'egg'){
        count--;
        continue;
      }
    }
    filteredArray.push(foods[i]);
  }
  return filteredArray.reverse();
}

// Excercise 11u
function fizzBuzz(){
  for(let i=1;i<=20;i++){
    if(i%3===0 && i%5===0){
      console.log('FizzBuzz');
    }
    else if(i%3===0){
      console.log('Fizz');
    }
    else if(i%5===0){
      console.log('Buzz');
    }
    else{
      console.log(i);
    }
  }
}  

  // Excercise 11v

  function unique(array){
    const result = [];
    for(let i=0;i<array.length;i++){
      const wrd = array[i];
      if(findIndex(arr,wrd) === -1){
        result.push(wrd);
      }
    }
    return result;
  }

  console.log(unique(['green', 'red', 'blue', 'red']));