/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * @format
 */

// @ts-check

import { qsa } from './query.js';

const dataAttributeName = 'data-timeline';

/**
 * Adds a class to past events to handle styling.
 *
 */
function setTimelineEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTimestamp = today.getTime();

    qsa('[' + dataAttributeName + '] time').forEach((timeEl) => {
        const eventDate = new Date(timeEl.getAttribute('datetime'));
        eventDate.setHours(0, 0, 0, 0);
        const eventTimestamp = eventDate.getTime();

        console.log(todayTimestamp, eventTimestamp);

        if (eventTimestamp === todayTimestamp) {
            timeEl.closest('.timeline-event').classList.add('event-today');
        } else if (eventTimestamp < todayTimestamp) {
            timeEl.closest('.timeline-event').classList.add('event-past');
        }
    });
}

export { setTimelineEvents };
