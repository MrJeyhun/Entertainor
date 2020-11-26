import {eventsData} from './eventsData.js';
const modalOverlay = document.querySelector('.eventspage__countdown-modal-overlay');
const modalCountdown = document.querySelector('.eventspage__countdown-modal');
const closeCountDownModalBtn = document.querySelector('.eventspage__countdown-modal__close');

let interval;
export const openCountDownModal = (eventId) => {
    eventsData.map((event) => {
        if (eventId == event.id) {
            interval = setInterval(() => {
                setCountDown(event.date);
            }, 1000);   
        }
    })

    setTimeout(() => {
        modalCountdown.style.animation = 'countdown-modal-open 2s ease';
        modalOverlay.style.display = 'flex';
        modalCountdown.style.display = 'block';
    }, 500)
    
}

const closeCountDownModal = () => {
    modalCountdown.style.animation = 'countdown-modal-close .8s ease';
    clearInterval(interval);

    setTimeout(() => {
        modalOverlay.style.display = 'none';
        modalCountdown.style.display = 'none';
    }, 600);    
}

closeCountDownModalBtn.addEventListener('click', closeCountDownModal);

//countdown logic
const setCountDown = (eventDate) => {

  const countDate = new Date(eventDate).getTime();

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