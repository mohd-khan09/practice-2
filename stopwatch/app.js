let [sec, min, hrs] = [0, 0, 0];
disp_time = document.getElementById("dispaly_time");
timer = null;

function stopwatch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hrs++;
    }
  }
  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  disp_time.innerHTML = h + ":" + m + ":" + s;
}

//this starts the timer
function watch_start() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
//this stops thw watch timer
function watch_stop() {
  clearInterval(timer);
}
//this resets the timer to zero
function watch_reset() {
  clearInterval(timer);
  [sec, min, hrs] = [0, 0, 0];
  disp_time.innerHTML = "00:00:00";
}

document.querySelector(".buttons").addEventListener("click")
