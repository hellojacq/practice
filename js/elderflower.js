//Greeting
var greeting = 'Howdy ';
var name = 'Molly';
var message =', please check your order:';

var welcomeMessage = greeting + name + message;

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

//Title Calculations

var customSign = 'Montague House'; //Sign is Montague House
var quantity = customSign.length; // Quantity is 14
var pricePerTile = 5; // Price per Tile is 5
var subtotal = pricePerTile * totalTiles; //Subtotal is 5 * 14
var shipping = 7; //Shipping is $7
var grandTotal = subtotal + shipping; //Grand Total is $70 + $7

var el = document.getElementById('custom-sign');
el.textContent = customSign;

var el = document.getElementById('quantity');
el.textContent = quantity;

var el = document.getElementById('subtotal');
el.textContent = '$' + subtotal;

var el = document.getElementById('shipping');
el.textContent = '$' + shipping;

var el = document.getElementById('grand-total');
el.textContent = '$' + grandTotal;

