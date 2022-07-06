// Only change code below this line
// v1.0
function countdown(n, arr = []){
  if (n < 1) {
    return arr;
  } else {
    arr.push(n);
    return countdown(n-1, arr);
  }
}
// Only change code above this line

// v2.0
function countdown(n, arr = [])
{
  if (n < 1) return arr;
  
  arr.push(n);
  return countdown(n-1, arr)
}

console.log(countdown(5));
