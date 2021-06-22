const answerContainer = document.querySelector('#answerContainer');
console.log('answer:', answerContainer);
const buttons = document.querySelectorAll('.btn');
console.log('button: ', buttons);

const performAction = buttons.forEach((button) => {
  console.log('button2:', button)
  button.addEventListener('click', function (e) {
    console.log('hello', e);
    console.log('classnames:L ', e.target.className.includes('erase'));
    let buttonType = e.target.className;
    console.log('btnType:', buttonType);
    if (buttonType.includes('erase')) {
      console.log(true);
    }else if(buttonType.includes('add')){
      console.log('add');
      addActionToAnswerComponent('+');
    }else if(buttonType.includes('one')){
      addActionToAnswerComponent(1);
    }
  })
})

function addActionToAnswerComponent(value) {
  console.log('actionToAnswerComponent: ', value);
  answerContainer.textContent = value;
}