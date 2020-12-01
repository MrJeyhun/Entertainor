import { eventsData } from './eventsData.js';
const modals = document.querySelectorAll('.modal');
const countDownModalOverlay = document.querySelector('.countdown-modal-overlay');
const addEventModalOverlay = document.querySelector('.add-event-modal-overlay');
const closeSlideModalBtns = document.querySelectorAll('.modal__close');

let interval;
export const openSlideModal = (selectedModal, eventId = null) => {
    eventsData.map(event => {
        if (eventId == event.id) {
            interval = setInterval(() => {
                setCountDown(event.date);
            }, 1000);
        }
    });

    setTimeout(() => {
        for (const modal of modals) {
            modal.style.animation = 'modal-open .8s ease';
        }
        selectedModal.style.display = 'flex';
    }, 500);
};

export const closeSlideModal = () => {
    console.log('closing...');
    for (const modal of modals) {
        modal.style.animation = 'modal-close .7s ease';
    }
    clearInterval(interval);

    setTimeout(() => {
        countDownModalOverlay.style.display = 'none';
        addEventModalOverlay.style.display = 'none';
    }, 600);
};

for (const closeSlideModalBtn of closeSlideModalBtns) {
    closeSlideModalBtn.addEventListener('click', closeSlideModal);
}

//countdown logic
const setCountDown = eventDate => {
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

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
};
