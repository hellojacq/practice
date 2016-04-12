//function targetPractice(number, operator) {}

/* CONSTANTS */
var OPERATOR_ADDITION = "+";
var OPERATOR_MULTIPLICATION = "*";
var OPERATOR_DIVISION = "/";
var number = 3;

function evaluate(lhs, rhs, operator) {
  if (operator === OPERATOR_ADDITION) {
    return lhs + rhs; 
  } else if (operator === OPERATOR_MULTIPLICATION) {
    return lhs * rhs;
  } else if (operator === OPERATOR_DIVISION) {
    return Math.round(lhs / rhs) + ' remainder ' + lhs % rhs;
  }
}

/* Vars */
var operator = OPERATOR_ADDITION;
var output = "";

for (var i = 1; i <=10; i++) {
  var calculation = i + ' ' + operator + ' ' + number + ' = ' + (evaluate(i, number, operator));
  output += calculation + '<br />';
}

document.getElementById('output').innerHTML = output;
