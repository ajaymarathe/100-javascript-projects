let bgImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];
var count = 0;

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  var bgImg = "url('images/" + bgImages[0] + "')"
  document.getElementById('slider').style.backgroundImage = bgImg;

});
function right() {
  // console.log(bgImages.length);
  count += 1;
  if(bgImages.length>=count){
    console.log('hello')
    this.changeSlider(count);
  }else if(count>bgImages.length){
    document.getElementById('right').disabled = true;
  }
  console.log(count);
}

function left() {
  // console.log(bgImages.length);
  count -= 1;
  console.log(count);
  if(count>=0 && count<=bgImages.length ){
    console.log('hello')
    this.changeSlider(count);
  }else{
    console.log('count is less than 0')
    document.getElementById('left').disabled = true;
  }
}

function changeSlider(slide){
  var bgImg = "url('images/" + bgImages[slide] + "')"
  document.getElementById('slider').style.backgroundImage = bgImg;
}