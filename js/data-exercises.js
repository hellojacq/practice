//sum of a range

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
