
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let num3 = prompt(`Enter the operation to be performed
1.add
2.subtract
3.multiply
4.divide`)

let result = 0;

num1 = Number(num1);
num2 = Number(num2);

if(num3 == 1 || num3 == "add"){
result = num1 + num2;
}
else if(num3 == 2 || num3=="subtract"){
result = num1 - num2;
}
else if(num3 == 3 || num3=="multiply"){
result = num1 * num2;
}
else if(num3 == 4 || num3=="divide"){
result = num1 / num2;
}
else{
   result= 'Invalid option'
}

alert("The result is "+ result)
