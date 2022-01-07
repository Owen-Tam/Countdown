const timerText = document.querySelector(".timer");

const newYear = new Date("January 1, 2023");
const numDays = document.querySelector(".num-days");
const numHours = document.querySelector(".num-hours");
const numMins = document.querySelector(".num-mins");
const numSecs = document.querySelector(".num-secs");

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
const tick = function () {
  const now = new Date();
  if (newYear - now > 0) {
    const days = Math.trunc(Math.abs((newYear - now) / 1000 / 60 / 60 / 24));
    const hours = Math.trunc(
      Math.abs((newYear - now) / 1000 / 60 / 60) - days * 24
    );
    const mins = Math.trunc(
      Math.abs((newYear - now) / 1000 / 60) - days * 24 * 60 - hours * 60
    );
    const secs = Math.trunc(
      Math.abs(
        (newYear - now) / 1000 -
          days * 24 * 60 * 60 -
          hours * 60 * 60 -
          mins * 60
      )
    );
    numDays.textContent = days;
    numHours.textContent = hours;
    numMins.textContent = mins;
    numSecs.textContent = secs;
  } else {
    timerText.textContent = "Timer has ended; Happy New Year!";
  }
};
tick();
setInterval(tick, 1000);
console.log(":( made this for 2022 but could only enjoy it for 3 minutes");
console.log("Let me know if you came across this message");
