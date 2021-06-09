
function onPressSubmit() {
    var getInputData = document.getElementById('textInput').value;
    console.log(getInputData);
    document.getElementById('lastMessage').innerHTML = getInputData;
    // clear input 
    document.getElementById('textInput').value = '';
}