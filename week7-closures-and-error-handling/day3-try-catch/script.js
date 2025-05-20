function safeDivide(a,b){
  if (b==0){
    throw new Error('Cannot divide by zero');
  }
  return a/b;
}

try{
  console.log(safeDivide(4,0));
}
catch(err){
  console.log(err);
}