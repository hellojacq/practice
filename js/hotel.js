var hotel = {
  name:'Park',
  listPrice:'$240',
  salePrice:'$204',
};

document.getElementById('hotelName').textContent = hotel.name;
document.getElementById('listPrice').textContent = hotel.listPrice;
document.getElementById('salePrice').textContent = hotel.salePrice;

var daysOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

var today = new Date();
var todaysDay = daysOfWeek[today.getDay()];
var todaysDate = today.toDateString();
var todaysEpoch = today.getTime();
var plusSevenDays = todaysEpoch + 604800000;
var expiry = new Date(plusSevenDays); 
var expiryDate = expiry.getDate();
var expiryMonth = months[expiry.getMonth()];
var expiryYear = (expiry.getYear())+1900;
var expiryDeadline = '(' + expiryDate + ' ' + expiryMonth + ' ' + expiryYear + ')';

document.getElementById('day').textContent = todaysDay;
document.getElementById('deadline').textContent = expiryDeadline;
