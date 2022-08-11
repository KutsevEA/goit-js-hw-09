const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let intervalId = null;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(changeBgColor, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

stopBtn.style.opacity = '0.5';
stopBtn.style.pointerEvents = 'none';

stopBtn.addEventListener('click', () => {
  stopBtn.style.opacity = '0.5';
  stopBtn.style.pointerEvents = 'none';
  startBtn.style.opacity = '1';
  startBtn.style.pointerEvents = 'auto';
});

startBtn.addEventListener('click', () => {
  startBtn.style.opacity = '0.5';
  startBtn.style.pointerEvents = 'none';
  stopBtn.style.opacity = '1';
  stopBtn.style.pointerEvents = 'auto';
});
