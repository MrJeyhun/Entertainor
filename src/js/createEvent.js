import { eventsData } from './eventsData.js';
import { renderEvents } from './renderEvents.js';
import { closeSlideModal } from './slideModal.js';

export const dropArea = document.querySelector('.add-event-modal__form-field__drop-area');
export const fileInput = document.querySelector('.add-event-modal__form-field__drop-area__file-input');
export const fileInputMessage = document.querySelector('.add-event-modal__form-field__drop-area__message');

const createBtn = document.querySelector('.modal__btn__buy-ticket');

const locationInput = document.getElementById('location');
const priceInput = document.getElementById('price');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const descriptionInput = document.getElementById('description');
const hashtagsInput = document.getElementById('hashtags');
const coverInput = document.getElementById('cover');

let id = 2;
let location;
let price;
let date;
let time;
let description;
let hashtags;
let cover;

//disable all dates before today in datepicker
const todayDate = new Date();
const formattedTodayDate = new Date().toISOString().split('T')[0];
const todayDateHour = todayDate.getHours();
const todayDateMinute = todayDate.getMinutes();
const currentTime = `${todayDateHour}:${todayDateMinute}`;
console.log('currenttime', currentTime);
dateInput.setAttribute('min', formattedTodayDate);

//watching inputs' data
locationInput.addEventListener('change', event => (location = event.target.value));
priceInput.addEventListener('change', event => (price = event.target.value));
dateInput.addEventListener('change', event => {
    if (dateInput.value == formattedTodayDate) {
        console.log('TODAY!');
        timeInput.setAttribute('min', currentTime);
    }
    date = event.target.value;
});
timeInput.addEventListener('change', event => (time = event.target.value));
descriptionInput.addEventListener('change', event => (description = event.target.value));
hashtagsInput.addEventListener('change', event => (hashtags = event.target.value));
coverInput.addEventListener('change', event => (cover = event.target.value));

const createEvent = () => {
    id++;

    eventsData.push({
        id: `post${id}`,
        date: `${date} ${time}`,
        description,
        location,
        price,
        cover,
        hashtags,
    });

    console.log('newEventsData', eventsData);
    //re-render with updated eventsData.
    document.querySelectorAll('.eventspage__events__event-card').forEach(element => element.remove());
    renderEvents();
};

export const checkActive = () => {
    console.log('checking activity...');
    dropArea.classList.contains('active') ? dropArea.classList.remove('active') : dropArea.classList.add('active');
};

createBtn.addEventListener('click', () => {
    //FIXME: add error message for non-filled inputs
    createEvent();
    closeSlideModal();
});
