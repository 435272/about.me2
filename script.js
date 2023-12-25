/* Set countdown date as a future date with a 24 hour format */
// let countdownDate = new Date('01 January 2023 00:00')

/* Set countdown date by adding hours to current date */
// let countdownDate = new Date().setHours(new Date().getHours() + 1)

/* Set countdown date by adding minutes to current date */
// let countdownDate = new Date().setMinutes(new Date().getMinutes() + 5);

/* Set countdown date by adding seconds to current date */
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10);

let timerInterval;

const daysElem = document.getElementById("days"),
  hoursElem = document.getElementById("hours"),
  minutesElem = document.getElementById("minutes"),
  secondsElem = document.getElementById("seconds"),
  timer = document.getElementById("timer"),
  content = document.getElementById("content");

const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference < 1) {
    endCountdown();
  }

  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  daysElem.innerHTML = formatTime(days, "day");
  hoursElem.innerHTML = formatTime(hours, "hour");
  minutesElem.innerHTML = formatTime(minutes, "minute");
  secondsElem.innerHTML = formatTime(seconds, "second");
};

const endCountdown = () => {
  clearInterval(timerInterval);
  timer.remove();
  content.classList.add("visible");
};

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});

// document.addEventListener('DOMContentLoaded', function() {
//   let hours = 0;
//   let minutes = 0;
//   let seconds = 0;
//   let timerInterval;

//   // Установить время счета (заменить значениями по умолчанию)
//   // hours = 0;
//   // minutes = 0;
//   // seconds = 10;

//   const hoursElement = document.getElementById('hours');
//   const minutesElement = document.getElementById('minutes');
//   const secondsElement = document.getElementById('seconds');

//   function updateTimer() {
//     seconds++;

//     if (seconds >= 60) {
//       seconds = 0;
//       minutes++;

//       if (minutes >= 60) {
//         minutes = 0;
//         hours++;
//       }
//     }

//     hoursElement.textContent = pad(hours);
//     minutesElement.textContent = pad(minutes);
//     secondsElement.textContent = pad(seconds);

//     if (hours === 0 && minutes === 0 && seconds === 10) {
//       clearInterval(timerInterval);
//       showCompletionMessage();
//     }
//   }

//   function pad(value) {
//     return value < 10 ? '0' + value : value;
//   }

//   function showCompletionMessage() {
//     const timerDiv = document.querySelector('.timer');
//     timerDiv.textContent = 'Hello world';
//   }

//   timerInterval = setInterval(updateTimer, 1000); // Обновление таймера каждую секунду
// });