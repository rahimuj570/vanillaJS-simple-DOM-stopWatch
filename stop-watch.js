// Initial Value
let min = 0;
let sec = 0;
let ms = 0;
let interval;

// ======Display Element========
function getDisplayElem(idClass) {
  const displayElem = document.getElementById(idClass);
  return displayElem;
}

// =========Start Handler========
document.getElementById("start-btn").addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startWatch, 10);
});

// =========Pause Handler========
document.getElementById("pause-btn").addEventListener("click", function () {
  clearInterval(interval);
});

// =========Reset Handler========
document.getElementById("reset-btn").addEventListener("click", function () {
  clearInterval(interval);
  min = 0;
  sec = 0;
  ms = 0;
  getDisplayElem("display-min").innerText = min;
  getDisplayElem("display-sec").innerText = sec;
  getDisplayElem("display-ms").innerText = ms;
});

// ==========Start Stop-Watch Function========
function startWatch() {
  ms++;
  if (ms <= 9) {
    getDisplayElem("display-ms").innerText = "0" + ms;
  }
  if (ms > 9) {
    getDisplayElem("display-ms").innerText = ms;
  }
  if (ms > 100) {
    ms = 0;
    sec++;
    getDisplayElem("display-ms").innerText = ms;
    getDisplayElem("display-sec").innerText = sec;
  }
  if (sec === 60) {
    sec = 0;
    min++;
    getDisplayElem("display-min").innerText = min;
  }
}
