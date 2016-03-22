//Greeting
var greeting = 'Howdy ';
var name = 'Molly';
var message =', please check your order:';

var welcomeMessage = greeting + name + message;

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

//Title Calculations

var customSign = 'Montague House';
var quantity = customSign.length;
var pricePerTile = 5;
var subtotal = pricePerTile * totalTiles;
var shipping = 7;
var grandTotal = subtotal + shipping;

var el = document.getElementById('customSign');
el.textContent = customSign;