// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

// Обьявляем все переменные

const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('.value[data-days]');
const hoursEl = document.querySelector('.value[data-hours]');
const minutesEl = document.querySelector('.value[data-minutes]');
const secondsEl = document.querySelector('.value[data-seconds]');

const timerBlock = document.querySelector('.timer');
const timerElements = document.querySelectorAll('.field');

let currentDate = null;
let pickerDate = null;
let leftTime = null;
let intervalId = null;

// Скрываем кнопку

startBtn.style.opacity = '0.5';
startBtn.style.pointerEvents = 'none';

// Назначаем функционал кнопки

startBtn.addEventListener('click', () => {
  countDown(), disableStartButton();
});

// Обьект параметров flatpickr из ДЗ
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates, dateStr, instance) {
    currentDate = selectedDates[0].getTime();
    pickerDate = instance.now.getTime();
    // Сравниваем значение выбраное пользователем и текущую дату
    if (currentDate - pickerDate < 0) {
      windowAlert();
    } else {
      activationStartBtn();
    }
  },
};

//Инициализация flatpickr на Инпуте
flatpickr('input#datetime-picker', options);

// Функции которые используем

function windowAlert() {
  window.alert('Please choose a date in the future"');
}

function countDown() {
  leftTime = currentDate - pickerDate;
  intervalId = setInterval(() => {
    (leftTime -= 1000), checkLeftTime(), paintDigits();
  }, 1000);
}

function checkLeftTime() {
  if (leftTime <= 0) {
    clearInterval(intervalId);
  }
}

function activationStartBtn() {
  startBtn.style.opacity = '1';
  startBtn.style.pointerEvents = 'auto';
}

function disableStartButton() {
  startBtn.style.opacity = '0.5';
  startBtn.style.pointerEvents = 'none';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Выносим логику в интерфейс

function paintDigits() {
  const { days, hours, minutes, seconds } = convertMs(leftTime);
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

// Добавляем чуть чуть стилей

timerBlock.style.display = 'flex';

timerElements.forEach(element => {
  element.style.display = 'flex';
  element.style.alignItems = 'center';
  element.style.flexDirection = 'column';
  element.style.margin = '10px';
  element.style.fontWeight = '800';
});
