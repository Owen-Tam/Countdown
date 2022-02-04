"use strict";
const timerText = document.querySelector(".timer");
const timer = document.querySelector("#timer");
const header = document.querySelector(".timer-title");
const timerMsg = document.querySelector(".timerMsg");
const nowForYear = new Date();
//nowForYear.getFullYear()
const westNewYear = new Date(`January 1, ${nowForYear.getFullYear() + 1}`);
const chiNewYear = new Date("February 1, 2022");
const numDays = document.querySelector(".num-days");
const numHours = document.querySelector(".num-hours");
const numMins = document.querySelector(".num-mins");
const numSecs = document.querySelector(".num-secs");
const button = document.querySelector(".button");
const bg1 = document.querySelector(".bg");
const root = document.documentElement;

// const tick = function () {
//   const now = new Date();
//   if (newYear - now > 0) {
//     const hours = Math.trunc(Math.abs((newYear - now) / 1000 / 60 / 60));
//     const mins = Math.trunc(Math.abs((newYear - now) / 1000 / 60) - hours * 60);
//     const secs = Math.trunc(
//       Math.abs((newYear - now) / 1000 - hours * 60 * 60 - mins * 60)
//     );
//     numHours.textContent = hours;
//     numMins.textContent = mins;
//     numSecs.textContent = secs;
//   } else {
//     timerText.textContent = "Timer has ended; Happy New Year!";
//   }
// };
const tick = function (toYear) {
  const now = new Date();
  if (toYear - now > 0) {
    const days = Math.trunc(Math.abs((toYear - now) / 1000 / 60 / 60 / 24));
    const hours = Math.trunc(
      Math.abs((toYear - now) / 1000 / 60 / 60) - days * 24
    );
    const mins = Math.trunc(
      Math.abs((toYear - now) / 1000 / 60) - days * 24 * 60 - hours * 60
    );
    const secs = Math.trunc(
      Math.abs(
        (toYear - now) / 1000 -
          days * 24 * 60 * 60 -
          hours * 60 * 60 -
          mins * 60
      )
    );
    timerText.classList.remove("hidden");
    timerMsg.classList.add("hidden");
    numDays.textContent = days;
    numHours.textContent = hours;
    numMins.textContent = mins;
    numSecs.textContent = secs;
  } else {
    timerText.classList.add("hidden");
    timerMsg.classList.remove("hidden");
  }
};
tick(westNewYear);

let intervalTicker = setInterval(tick, 1000, westNewYear);
console.log(":( made this for 2022 but could only enjoy it for 3 minutes");
console.log("Let me know if you came across this message");
let cny = false;
button.addEventListener("click", function () {
  clearInterval(intervalTicker);
  if (!cny) {
    // when click it isnt cny yet
    tick(chiNewYear);
    intervalTicker = setInterval(tick, 1000, chiNewYear);
    button.textContent = "Countdown to New Year";

    header.textContent = "🎉 Countdown to CNY 🎉";
    // root.style.setProperty("--main-color", "rgb(255, 38, 0)");
    root.style.setProperty("--background-color", "rgb(228, 169, 59)");
    root.style.setProperty("--background-img", "url('background4.png')");

    bg1.style.opacity = 0;
    button.style.color = "black";
    button.style.border = "solid black";
    cny = true;
  } else {
    tick(westNewYear);
    clearInterval(intervalTicker);
    intervalTicker = setInterval(tick, 1000, westNewYear);
    button.textContent = "Countdown to CNY";

    header.textContent = "🎉 Countdown to New Year 🎉";
    root.style.setProperty("--background-color", "rgb(26, 26, 26)");
    root.style.setProperty("--background-img", "url('background.png')");

    bg1.style.opacity = 1;
    button.style.color = "var(--button-color)";
    button.style.border = "solid var(--button-color)";
    cny = false;
  }
});
