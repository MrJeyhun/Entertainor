import { renderEvents } from './renderEvents.js';
import { openSlideModal } from './slideModal.js';
import { fileInput, checkActive, fileInputMessage } from './createEvent.js';

const addEventBtn = document.querySelector('.eventspage__add-event');
const addEventModalOverlay = document.querySelector('.add-event-modal-overlay');

renderEvents();

addEventBtn.addEventListener('click', () => openSlideModal(addEventModalOverlay));

//add event file(event cover) upload
fileInput.addEventListener('dragenter', checkActive);
fileInput.addEventListener('focus', checkActive);
fileInput.addEventListener('click', checkActive);

fileInput.addEventListener('change', event => {
    console.log('fileUp', event.target.files[0].name);

    event.target.files && (fileInputMessage.textContent = event.target.files[0].name);
});
