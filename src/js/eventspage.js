import {renderEvents} from './renderEvents.js';
import {openSlideModal} from './slideModal.js';

const addEventBtn = document.querySelector('.eventspage__add-event');
const addEventModalOverlay = document.querySelector('.eventspage__add-event-modal-overlay');

addEventBtn.addEventListener('click', () => openSlideModal(addEventModalOverlay));

renderEvents();


