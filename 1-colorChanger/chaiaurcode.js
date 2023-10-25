//first we need to talk about events
//like onclick event
const buttons = document.querySelectorAll('.button');
const buttonsList = [...buttons];

console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((buttons) => {
  console.log(buttons);
  buttons.addEventListener('click', (e) => {
  
    body.style.backgroundColor =e.target.id
  });
});
