let timerId; // переменная, которая будет хранить ID таймера
let isClock = false;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", updateClock);
stopButton.addEventListener("click", stopClock);

function updateClock(params) {
  if (!isClock) {
    timerId = setInterval(startTimer, 1000);
    isClock = true;
  }
}
function stopClock(params) {
  if (isClock) {
    clearInterval(timerId);
    isClock = false;
  }
}
function startTimer(params) {
  const clock = document.getElementById("clock");
  const now = new Date();
  const h = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  clock.textContent = `${addZero(h)}:${addZero(min)}:${addZero(sec)}`;
}
function addZero(char) {
  return char <= 9 ? `0${char}` : char;
}
