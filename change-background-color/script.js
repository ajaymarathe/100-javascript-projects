const body = document.querySelector('body');
const colors = ['red','orange','yellow','pink','brown','green'];
body.style.backgroundColor = 'orange';

function changeBackground(){
    const colorIndex= parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex];
}