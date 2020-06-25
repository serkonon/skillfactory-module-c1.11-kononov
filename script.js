const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
const control = document.querySelector('.control');

const setmins = document.querySelector('.setmins');
const setsecs = document.querySelector('.setsecs');
const start = document.querySelector('.start');
const timeaddt = document.querySelector('.timeaddt')
const reset1 = document.querySelector('.reset1')
const reset2 = document.querySelector('.reset2')
const pause = document.querySelector('.pause')

let countSec = 0;
let countMin = 0;
let timerInterval = null;

const updateText = () => {	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}

const countDown = () => {
	let total = countSec + countMin * 60;
  timerInterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timerInterval);
    timer.style.display = 'none';
    control.style.display = 'none';
    message.style.display = 'flex';
  }
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  } 
  updateText();  
}

setmins.addEventListener('click', () => {
  if (!timerInterval) {
    countMin = timeaddt.value;
    updateText();
  }
});

setsecs.addEventListener('click', () => {
  if (!timerInterval) {
    countSec = timeaddt.value;
    updateText();
  }
});

start.addEventListener('click', () => {
  let total = countSec + countMin * 60;
  if (total > 0) {
    countDown();
  }  
});

timeaddt.addEventListener('blur', () => {
  if (timeaddt.value < 0) {
    timeaddt.value = 0;
  } else if (timeaddt.value > 59) {
    timeaddt.value = 59;
  }
});

function doReset() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    countMin = 0;
    countSec = 0;
    updateText();
    timer.style.display = 'block';
    control.style.display = 'block';
    message.style.display = 'none';
  }
}

reset1.addEventListener('click', doReset);
reset2.addEventListener('click', doReset);

pause.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

updateText();
