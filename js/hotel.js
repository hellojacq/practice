var hotel = {
  name:'Park',
  listPrice:'$240',
  salePrice:'$204',
};

document.getElementById('hotelName').textContent = hotel.name;
document.getElementById('listPrice').textContent = hotel.listPrice;
document.getElementById('salePrice').textContent = hotel.salePrice;

var today = new Date();
var day = today.getDay();
var expiryDate = today.getDate()+7;

document.getElementById('day').textContent = day;
