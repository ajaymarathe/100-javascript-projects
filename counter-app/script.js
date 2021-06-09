var count = 0;
document.getElementById('count').innerHTML = count;

function add() {
    count++
    console.log(count);
    document.getElementById('count').innerHTML = count;
}

function decrease() {
    count--;
    console.log(count);
    document.getElementById('count').innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById('count').innerHTML = count;
}
