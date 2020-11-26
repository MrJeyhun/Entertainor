const eventsContainer = document.querySelector('.eventspage__events');

document.getElementById('get-ticket').addEventListener('click', () => {
    let modalOverlay = document.querySelector('.eventspage__countdown-modal-overlay');
    let modalCountdown = document.querySelector('.eventspage__countdown-modal');

    modalOverlay.style.display = 'flex';
    modalCountdown.style.display = 'block';
})


//countdown logic
const countDate = new Date("Jan 01, 2021 00:00:00").getTime();

const setCountDown = () => {
  const now = new Date().getTime();
  let gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
    setCountDown();
}, 1000);
