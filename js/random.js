function randomize() {
  return Math.floor(Math.random() * 255);
};

var r = randomize();
var g = randomize();
var b = randomize();

var color = 'rgb(' + r +',' + g + ',' + b + ')';

document.body.style.backgroundColor = color;
document.getElementById('color-value').textContent = color;

