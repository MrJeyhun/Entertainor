import { eventsData } from './eventsData.js';
import { openSlideModal } from './slideModal.js';

const countDownModalOverlay = document.querySelector('.countdown-modal-overlay');
const prevEventsWrapper = document.querySelector('.eventspage__events');

export const renderEvents = () => {
    eventsData.map(event => {
        //ah react, react...

        const eventCard = document.createElement('div');
        eventCard.className = 'eventspage__events__event-card';

        const eventCardCover = document.createElement('div');
        eventCardCover.className = 'eventspage__events__event-card__cover';
        const eventCardCover_image = document.createElement('div');
        eventCardCover_image.className = 'eventspage__events__event-card__cover__image';
        eventCardCover_image.style.backgroundImage = `url(${event.cover})`;

        const eventCardInfo = document.createElement('div');
        eventCardInfo.className = 'eventspage__events__event-card__info-section';

        const eventCardInfo_dateContainer = document.createElement('div');
        eventCardInfo_dateContainer.className = 'eventspage__events__event-card__info-section__date';

        const eventCardInfo_dateContainer_date = document.createElement('span');
        eventCardInfo_dateContainer_date.textContent = `${event.date}`;

        const eventCardInfo_description = document.createElement('div');
        eventCardInfo_description.className = 'eventspage__events__event-card__info-section__description';
        eventCardInfo_description.textContent = `${event.description}`;

        const eventCardInfo_loc_and_price = document.createElement('div');
        eventCardInfo_loc_and_price.className =
            'eventspage__events__event-card__info-section__loc-and-price card-bottom';

        const eventCardInfo_loc = document.createElement('span');
        eventCardInfo_loc.className = 'eventspage__events__event-card__info-section__loc-and-price__loc';
        eventCardInfo_loc.textContent = `${event.location}`;

        const eventCardInfo_price = document.createElement('span');
        eventCardInfo_price.className = 'eventspage__events__event-card__info-section__loc-and-price__price';
        eventCardInfo_price.textContent = `$${event.price}`;

        const eventCardInfo_hoversec = document.createElement('div');
        eventCardInfo_hoversec.className = 'eventspage__events__event-card__info-section__hover-section card-bottom';

        const eventCardInfo_hoversec_hashtags = document.createElement('span');
        eventCardInfo_hoversec_hashtags.className =
            'eventspage__events__event-card__info-section__hover-section__hashtags';
        eventCardInfo_hoversec_hashtags.textContent = `${event.hashtags}`;

        const eventCardInfo_hoversec_getTicket = document.createElement('button');
        eventCardInfo_hoversec_getTicket.className =
            'eventspage__events__event-card__info-section__hover-section__get-ticket';
        eventCardInfo_hoversec_getTicket.id = `${event.id}`;
        eventCardInfo_hoversec_getTicket.textContent = 'Get ticket!';

        //composing of elements
        prevEventsWrapper.appendChild(eventCard);

        eventCard.appendChild(eventCardCover);
        eventCard.appendChild(eventCardInfo);

        eventCardCover.appendChild(eventCardCover_image);

        eventCardInfo.appendChild(eventCardInfo_dateContainer);
        eventCardInfo.appendChild(eventCardInfo_description);
        eventCardInfo.appendChild(eventCardInfo_loc_and_price);
        eventCardInfo.appendChild(eventCardInfo_loc_and_price);
        eventCardInfo.appendChild(eventCardInfo_hoversec);

        eventCardInfo_dateContainer.appendChild(eventCardInfo_dateContainer_date);

        eventCardInfo_loc_and_price.appendChild(eventCardInfo_loc);
        eventCardInfo_loc_and_price.appendChild(eventCardInfo_price);

        eventCardInfo_hoversec.appendChild(eventCardInfo_hoversec_hashtags);
        eventCardInfo_hoversec.appendChild(eventCardInfo_hoversec_getTicket);
        console.log('rendering...');
    });

    const btnsOfEventCards = document.querySelectorAll(
        '.eventspage__events__event-card__info-section__hover-section__get-ticket',
    );

    if (btnsOfEventCards.length != 0) {
        for (const btn of btnsOfEventCards) {
            btn.addEventListener('click', event => {
                openSlideModal(countDownModalOverlay, event.target.id);
            });
        }
    }
};
