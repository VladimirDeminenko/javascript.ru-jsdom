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

        return date.toLocaleString('ru', options);
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


function Article() {
    this.created = new Date();

    Article.count++;
    Article.lastCreated = this.created;
    Article.showStats = () => alert(`Всего: ${Article.count}, Последняя: ${Article.lastCreated}`);
}

Article.count = 0;


function sumArgs() {
    return [].slice.call(arguments).reduce((a, b) => a + b, 0);
}

function makeLogging(f, log) {
    return function (arg) {
        log.push(arg);

        return f.call(this, arg);
    }
}

function makeLogging2(f, log) {
    return function (...args) {
        log.push(args);

        return f.apply(this, args);
    }
}

function makeCaching(f) {
    let cache = {};

    return function (arg) {
        let result = cache[arg];

        if (!(result || arg in cache)) {
            result = f.call(this, arg);
            cache[arg] = result;
        }

        return result;
    }
}

function CoffeeMachine(power) {
    const WATER_HEAT_CAPACITY = 4200;

    let self = this;
    let timerId = null;

    self.waterAmount = 0;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Кофе готов!');
    }

    self.stop = function () {
        if (timerId) {
            clearTimeout(timerId);
        }
    };

    self.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };
}
