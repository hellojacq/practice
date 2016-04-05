function buildRow(offset, size, sequence) {
  var row = '';
  for (var i = 0 ; i < size; i++) {
    row = row + sequence[(i + offset) % sequence.length];
  }
  return row;
}

function buildBoard(size) {
  var board = '';
  for (var i = 0; i < size; i++) {
    //console.log(buildRow(size, ' #'));  
    board = board + buildRow(i, size, ' #') + '\n';
  }
  return board;
}  

var board = buildBoard(60);
console.log(board);

