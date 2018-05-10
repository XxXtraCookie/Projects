function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegrees =  ((hours / 12) * 360) + 90;
  const minsDegrees =  ((mins / 60) * 360) + 90;
  const secondsDegrees =  ((seconds / 60) * 360) + 90;

  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  console.log(hours);
  console.log(mins);
  console.log(seconds);
}

setInterval(setDate, 1000);
