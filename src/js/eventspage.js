import {eventsData} from './eventsData.js'

const eventsContainer = document.querySelector('.eventspage__events');
const modalOverlay = document.querySelector('.eventspage__countdown-modal-overlay');
const modalCountdown = document.querySelector('.eventspage__countdown-modal');


const renderEvents = () => {
    eventsData.map((event) => {
      console.log('rendering...')
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
      eventCardInfo_dateContainer_date.textContent = `${event.date}`

      const eventCardInfo_description = document.createElement('div');
      eventCardInfo_description.className = 'eventspage__events__event-card__info-section__description';
      eventCardInfo_description.textContent = `${event.description}`;

      const eventCardInfo_loc_and_price = document.createElement('div');
      eventCardInfo_loc_and_price.className = 'eventspage__events__event-card__info-section__loc-and-price card-bottom';
      
      const eventCardInfo_loc = document.createElement('span');
      eventCardInfo_loc.className = 'eventspage__events__event-card__info-section__loc-and-price__loc';
      eventCardInfo_loc.textContent = `${event.location}`;

      const eventCardInfo_price = document.createElement('span');
      eventCardInfo_price.className = 'eventspage__events__event-card__info-section__loc-and-price__price';
      eventCardInfo_price.textContent = `$${event.price}`;

      const eventCardInfo_hoversec = document.createElement('div');
      eventCardInfo_hoversec.className = 'eventspage__events__event-card__info-section__hover-section card-bottom';

      const eventCardInfo_hoversec_hashtags = document.createElement('span');
      eventCardInfo_hoversec_hashtags.className = 'eventspage__events__event-card__info-section__hover-section__hashtags';
      eventCardInfo_hoversec_hashtags.textContent = `${event.hashtags}`;

      const eventCardInfo_hoversec_getTicket = document.createElement('button');
      eventCardInfo_hoversec_getTicket.className = 'eventspage__events__event-card__info-section__hover-section__get-ticket';
      eventCardInfo_hoversec_getTicket.id = 'get-ticket';
      eventCardInfo_hoversec_getTicket.textContent = 'Get ticket!';

      //composing of elements
      eventsContainer.appendChild(eventCard);

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
    })
    const btnsOfEventCards = document.querySelectorAll('#get-ticket');

    for (const btn of btnsOfEventCards) {
      btn.addEventListener("click", () => {
        modalOverlay.style.display = 'flex';
        modalCountdown.style.display = 'block';
      })
    }
}

renderEvents();



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
