let bgImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];
var count = 0;

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  var bgImg = "url('images/" + bgImages[0] + "')"
  document.getElementById('slider').style.backgroundImage = bgImg;
  
});
const bgImageLength = bgImages.length - 1 ;
console.log(bgImageLength);
function right() {
  count += 1;
  console.log('count:', count, 'bgImageLength: ', bgImageLength);
  console.log(count > bgImageLength);

  if(bgImageLength >= count){
    console.log('i m in right count.')
    this.changeSlider(count);
    document.getElementById('left').disabled = false;
  }else if(count > bgImageLength){
    document.getElementById('right').disabled = true;
  }

}

function left() {

  count -= 1;
  console.log('count:', count, 'bgImageLength: ', bgImageLength);

  if(count >= 0 && count <= bgImageLength ){
    console.log('i m in left');
    this.changeSlider(count);
    document.getElementById('right').disabled = false;
  }else{
    console.log('count is less than 0')
    document.getElementById('left').disabled = true;
  }

  console.log('left count: ', count);
}

function changeSlider(slide){
  var bgImg = "url('images/" + bgImages[slide] + "')"
  document.getElementById('slider').style.backgroundImage = bgImg;
}