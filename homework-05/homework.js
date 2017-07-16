/**
 * @file homework.js
 * @author Vladimir Deminenko
 * @date 16.07.2017
 */

'use strict';

function DateUtils() {
    this.fromString = str => {
        let [year = 2000, mouth = 1, day = 1] = str.split('-', 3);

        return this.fromDate(new Date(year, mouth - 1, day));
    };

    this.fromNumber = secs => {
        return this.fromDate(new Date(secs * 1000));
    };

    this.fromArray = arr => {
        let [year = 2000, mouth = 0, day = 1] = arr;

        return this.fromDate(new Date(year, mouth, day));
    };

    this.fromDate = date => {
        const options = {
            year: '2-digit',
            month: 'numeric',
            day: 'numeric'
        };

        return date.toLocaleString("ru", options);
    };
}

function formatDate(value) {
    const dateUtils = new DateUtils();
    const typeOfValue = typeof value;

    if (typeOfValue === 'string') {
        return dateUtils.fromString(value);
    }

    if (typeOfValue === 'number') {
        return dateUtils.fromNumber(value);
    }

    if (Array.isArray(value)) {
        return dateUtils.fromArray(value);
    }

    if (typeOfValue === 'object' && value instanceof Date) {
        return dateUtils.fromDate(value);
    }

    throw new TypeError('unknown type of parameter');
}
