
var body = document.querySelector('body');
function changeBgColor() {
  body.style.backgroundColor = getRandomColor();
  document.getElementById('color').innerHTML = getRandomColor();
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  var i;
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}