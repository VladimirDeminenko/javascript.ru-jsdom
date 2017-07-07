/**
 * @file singleton.js
 * @author Vladimir Deminenko
 * @date 07.07.2017
 */

'use strict';

const ONE_SECOND_LENGTH = 1000;
const ONE_MINUTE_LENGTH = 60 * ONE_SECOND_LENGTH;
const ONE_HOUR_LENGTH = 60 * ONE_MINUTE_LENGTH;
const ONE_DAY_LENGTH = 24 * ONE_HOUR_LENGTH;

function getWeekDay(date) {
    const daysOfWeek = [
        'вс',
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб'
    ];

    return daysOfWeek[date.getDay()];
}

function getLocalDay(date) {
    return date.getUTCDay() + 1;
}

function getDateAgo(date, days) {
    return new Date(date - days * ONE_DAY_LENGTH).getDate();
}

function getLastDayOfMonth(year, month) {
    return new Date(new Date(year, month + 1, 1) - ONE_DAY_LENGTH).getDate();
}

function formatDate(date) {
    const options = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric'
    };

    return date.toLocaleString("ru", options);
}

function formatRelativeDate(date) {
    const options = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    const relativeDate = new Date() - date;

    let result;

    if (relativeDate < ONE_SECOND_LENGTH) {
        result = 'только что';
    } else if (relativeDate < ONE_MINUTE_LENGTH) {
        result = `${relativeDate / ONE_SECOND_LENGTH} сек. назад`;
    } else if (relativeDate < ONE_HOUR_LENGTH) {
        result = `${relativeDate / ONE_MINUTE_LENGTH} мин. назад`;
    } else {
        result = date
            .toLocaleString("ru", options)
            .replace(',', '');
    }

    return result;
}
