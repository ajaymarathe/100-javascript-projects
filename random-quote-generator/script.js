// hide the loader
document.getElementById('loader').style.display = 'none';

async function getRandomQuotes() {
  // show loader 
  document.getElementById('loader').style.display = 'block';

  const response = await fetch('https://api.quotable.io/random')
  let data = await response.json();
  if(data){
    document.getElementById('loader').style.display = 'none';
  }
  console.log(data);
  document.getElementById('author').innerHTML = data.author;
  document.getElementById('quote').innerHTML = data.content;
}