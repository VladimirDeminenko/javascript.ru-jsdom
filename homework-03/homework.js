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

    if (relativeDate < ONE_SECOND_LENGTH) {
        return 'только что';
    }

    if (relativeDate < ONE_MINUTE_LENGTH) {
        return `${Math.floor(relativeDate / ONE_SECOND_LENGTH)} сек. назад`;
    }

    if (relativeDate < ONE_HOUR_LENGTH) {
        return `${Math.floor(relativeDate / ONE_MINUTE_LENGTH)} мин. назад`;
    }

    return date.toLocaleString("ru", options).replace(',', '');
}

function closureSum(b) {
    return function (a) {
        return +a + +b;
    }
}

function makeBuffer() {
    let buffer = [];

    let cleanedBuffer = function (value) {
        if (arguments.length === 0) {
            return buffer.join('');
        }

        buffer.push(`${value}`);
    };

    cleanedBuffer.clear = function () {
        buffer.length = 0;
    };

    return cleanedBuffer;
}

function byField(fieldName) {
    let sortByAge = function (user1, user2) {
        return user1.age - user2.age;
    };

    let sortByName = function (user1, user2) {
        if (user1.name > user2.name) {
            return 1;
        }

        return -1;
    };

    if ('age' === fieldName.toLowerCase()) {
        return sortByAge;
    }

    return sortByName;
}

function inArray(arr) {
    return function (value) {
        return !!~arr.indexOf(value);
    };
}

function inBetween(a, b) {
    return function (value) {
        return value >= a && value <= b;
    };
}

function filter(arr, func) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (func(value)) {
            result.push(value);
        }
    }

    return result;
}

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            return i;
        };

        shooters.push(shooter);
    }

    return shooters;
}
