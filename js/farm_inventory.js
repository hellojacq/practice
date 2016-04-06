/*
function printFarmInventory(cows, chickens) {
  var cowString = String(cows); 
  while (cowString.length < 3)
    cowString = 'O' + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = 'O' + chickenString;
  console.log(chickenString + " Chickens");
} 

printFarmInventory(7,11)

*/

function zeroPad(number,width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7,6,3);