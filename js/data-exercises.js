//sum of a range

function range(start,end) {
  var rangeArray= [];
  for (var i=start; i<=end; i++) {
    rangeArray.push(i); 
  }    
  return rangeArray;
}

console.log(range(1,10));

