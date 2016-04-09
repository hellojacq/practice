//sum of a range

function range(start,end) {
  var rangeArray= [];
  for (var i=start; i<=end; i++) {
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

console.log(sum(range(1,10)));
