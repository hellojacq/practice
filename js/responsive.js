function myFunction() {
  document.getElementById("top-nav").classList.toggle("responsive");
}

var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('copyright');
el.innerHTML = '<p>&copy;' + year + ' Hello Jacq. All Rights Reserved.</p>';