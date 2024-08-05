const time = document.querySelector("#time");
const timeFormat = document.querySelector("#timeFormat");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  time.innerHTML = `${hours} : ${mins} : ${secs}`;
  timeFormat.innerHTML = hours > 12 ? "AM" : "PM";
};
