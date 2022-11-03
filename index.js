setInterval(ticking, 1000);

const hourStick = document.querySelector("[data-hour-stick]");
const minuteStick = document.querySelector("[data-minute-stick]");
const secondStick = document.querySelector("[data-second-stick]");

function ticking() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  rotation(secondStick, secondsRatio);
  rotation(minuteStick, minutesRatio);
  rotation(hourStick, hoursRatio);
}

function rotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

ticking();
