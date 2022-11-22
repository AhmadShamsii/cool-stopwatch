'use strict';

const btnStartStop = document.querySelector('.start-stop');
const btnReset = document.querySelector('.reset');

const seconds = document.querySelector('.seconds');
const centiSeconds = document.querySelector('.centi-seconds');

let sec = 0;
let csec = 0;
let interval;
let state = false;

btnStartStop.addEventListener('click', function () {
  if (state === false) {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);

    state = true;
    return;
  }
  if (state === true) {
    clearInterval(interval);

    state = false;
    return;
  }
});

btnReset.addEventListener('click', function () {
  clearInterval(interval);
  sec = 0;
  csec = 0;

  seconds.innerHTML = '00';
  centiSeconds.innerHTML = '00';
});

const startTimer = function () {
  csec++;
  if (csec <= 9) {
    centiSeconds.innerHTML = '0' + csec;
  }
  if (csec > 9) {
    centiSeconds.innerHTML = csec;
  }
  if (csec > 99) {
    sec++;
    seconds.innerHTML = '0' + sec;
    csec = 0;
    centiSeconds.innerHTML = 0;
  }
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};
