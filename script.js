const timerText = document.querySelector(".timer");

const newYear = new Date("January 1, 2022");
const numHours = document.querySelector(".num-hours");
const numMins = document.querySelector(".num-mins");
const numSecs = document.querySelector(".num-secs");
console.log(newYear, newYear.toISOString());

const tick = function () {
  const now = new Date();
  if (newYear - now > 0) {
    const hours = Math.trunc(Math.abs((newYear - now) / 1000 / 60 / 60));
    const mins = Math.trunc(Math.abs((newYear - now) / 1000 / 60));
    const secs = Math.trunc(Math.abs((newYear - now) / 1000 - mins * 60));
    console.log(hours, mins, secs);
    numHours.textContent = hours;
    numMins.textContent = mins;
    numSecs.textContent = secs;
  } else {
    timerText.textContent = "Timer has ended; Happy New Year!";
  }
};
setInterval(tick, 1000);
