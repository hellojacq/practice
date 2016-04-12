//sum of a range

/*

function range(start,end,step) {
  var rangeArray= [];
  for (var i=start; (step>0)?(i<=end):(i>=end); i = i+step ) {
    rangeArray.push(i); 
  }    
  return rangeArray;
}

function sum(array) {
  var sumOfRange=0;
  for (var i=0; i < array.length; i++) {
    sumOfRange = sumOfRange + array[i] ;
  }
  return sumOfRange;
}

console.log(sum(range(5,2,-1)));



//write two functions, reverseArray and reverseArrayInPlace without using reverse method

function reverseArray(array) {
  newArray = [];
  for (var i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

*/

var arrayValue = [1, 2, 3, "banana", 5];

function reverseArrayInPlace(arrayValue) {
  for (var i = 0; i <= Math.floor((arrayValue.length-1)/2); i++) {
    var temp = arrayValue[i];
    arrayValue[i] = arrayValue[arrayValue.length-1-i];
    arrayValue[arrayValue.length-1-i] = temp;  
  }
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);