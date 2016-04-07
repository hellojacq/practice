//Write a function that takes two arguments and returns their minimum

/*
function min(x,y) {
  return Math.min(x,y);
}

console.log(min(0,-10));

// OR var min = Math.min;



function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else if ((x % 2 === 1) || (x % 2 === -1)) {
    return false;
  }  
}


function isEven(x) {
  if (x === 0) {
    return true
  } else if (x === 1){
    return false 
  } else {
    if (x < 0) {
      return isEven(x+2)
    } else {
      return isEven(x-2)
    }  
  }
}

console.log(isEven(50));
console.log(isEven(-100));
console.log(isEven(-1));

function layer(n) {
  console.log("Entering layer", n);
  if (n > 0) {
    layer(n-1)
  } 
  console.log("Exiting layer", n);
}

layer(10)

*/

function countChar(string, letter) {
  var counter=0;
  for (var i=0; i <= string.length-1; i++) {
    if(string.charAt(i) === letter) {
      counter++;  
    }
  }  
  return counter;
}

console.log(countChar("BBC", "B"));
console.log(countChar("kakkerlak", "k"));