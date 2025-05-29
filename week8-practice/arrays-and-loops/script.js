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

//Excercise 11e
console.log('Excercise 11e');

for(const element of [0,1,2]){
  console.log(element + 1);
}

//Excercise 11f
console.log('Excercise 11f');

function addArray(arr){
 const newArray =[];
 arr.forEach((e, index)=> {
  newArray[index] = e+1;
  });
  return newArray;
}
//Excercise 11g
console.log('Excercise 11g');

function addArray(arr, num){
 const newArray =[];
 arr.forEach((e, index)=> {
  newArray[index] = e+num;
  });
  return newArray;
}
console.log(addArray([10,22], 5));


//Excercise 11h

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


