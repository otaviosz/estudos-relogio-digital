function updateClock() {
  const clockElement = document.querySelector('.clock');
  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;

  console.log(hours);
}

setInterval(updateClock, 1000);
