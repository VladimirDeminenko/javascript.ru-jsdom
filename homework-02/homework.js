/**
 * @file homework.js
 * @author Vladimir Deminenko
 * @date 04.08.2017
 */

'use strict';

const ONE_SECOND_LENGTH = 1000;
const ONE_MINUTE_LENGTH = 60 * ONE_SECOND_LENGTH;
const ONE_HOUR_LENGTH = 60 * ONE_MINUTE_LENGTH;
const ONE_DAY_LENGTH = 24 * ONE_HOUR_LENGTH;
const DAYS_OF_WEEK = [
    'вс',
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб'
];

let Singleton = (function () {
    let instance;

    return function Singleton() {
        if (instance) {
            return instance;
        }

        if (this && this.constructor === Singleton) {
            instance = this;
        } else {
            return new Singleton();
        }
    }
})();

function maxValue(salaries) {
    let result = "нет сотрудников";
    let max = 0;

    for (let employee in salaries) {
        if (salaries[employee] > max) {
            max = salaries[employee];
            result = employee;
        }
    }

    return result;
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
    let value;

    for (let prop in obj) {
        value = obj[prop];

        if (isNumeric(value)) {
            obj[prop] = value * 2;
        }
    }
}

function findInArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}

function filterRange(arr, a, b) {
    let result = [];
    let value;

    for (let i = 0; i < arr.length; i++) {
        value = arr[i];

        if ((value >= a) && (value <= b)) {
            result.push(value);
        }
    }

    return result;
}

// Решето Эратосфена
function primeNumbersTo(n) {
    let p;
    let result = initArray(n);
    let idx = 0;

    do {
        p = result[idx];
        result = strikeOut(result, idx);
        idx++;
    } while (p * p < n);

    return result;
}

function initArray(n) {
    let result = [];

    for (let i = 2; i <= n; i++) {
        result.push(i);
    }

    return result;
}

function strikeOut(arr, startIdx) {
    let result = arr.slice(0, startIdx + 1);
    let p = arr[startIdx];
    let value;

    for (let i = startIdx + 1; i < arr.length; i++) {
        value = arr[i];

        if (value % p !== 0) {
            result.push(value);
        }
    }

    return result;
}

function sumOfPrimeNumbersTo(n) {
    let result = 0;
    let primeNumbers = primeNumbersTo(n);

    for (let i = 0; i < primeNumbers.length; i++) {
        result += primeNumbers[i];
    }

    return result;
}

function getMaxSubSum(arr) {
    let result = 0;
    let subSum = 0;

    for (let i = 0; i < arr.length; i++) {
        subSum = Math.max(0, subSum + arr[i]);
        result = Math.max(subSum, result);
    }

    return result;
}

function addClass(obj, cls) {
    let classes = obj.className.split(' ');

    if (!classes.includes(cls)) {
        classes.push(cls);
    }

    obj.className = classes.join(' ').trim();
}

function removeClass(obj, cls) {
    let classes = obj.className.split(' ');
    let idx;
    let isFound;

    do {
        idx = classes.indexOf(cls);
        isFound = !!~idx;

        if (isFound) {
            classes.splice(idx, 1);
        }

    } while (isFound);


    obj.className = classes.join(' ');
}

function camelize(str) {
    let word;
    let words = str.split('-');

    for (let i = 1; i < words.length; i++) {
        word = words[i];
        word = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
        words[i] = word;
    }

    return words.join('');
}

function filterRangeInPlace(arr, a, b) {
    let value;
    let idx = 0;

    while (idx < arr.length) {
        value = arr[idx];

        if ((value >= a) && (value <= b)) {
            idx++;
        }
        else {
            arr.splice(idx, 1);
        }
    }
}

function aclean(arr) {
    let result = [];
    let keys = [];
    let key;
    let firstKeyIdx;
    let lastKeyIdx;
    let word;

    for (let i = 0; i < arr.length; i++) {
        word = arr[i];

        key = createKey(word);
        keys.push(key);
        firstKeyIdx = keys.indexOf(key);
        lastKeyIdx = keys.lastIndexOf(key);

        if ((keys.indexOf(key, firstKeyIdx + 1) === lastKeyIdx) && !!~firstKeyIdx) {
            result.push(word);
        }
    }

    return result;
}

function createKey(word) {
    return word
        .trim()
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function unique(arr) {
    let result = [];
    let value;

    for (let i = 0; i < arr.length; i++) {
        value = arr[i];

        if (!result.includes(value)) {
            result.push(value);
        }
    }

    return result;
}

function getSums(arr) {
    let result = [];

    arr.reduce(function (previousValue, currentItem) {
        let sum = +previousValue + +currentItem;

        result.push(sum);

        return sum;
    }, 0);

    return result;
}

function getWeekDay(date) {
    return DAYS_OF_WEEK[date.getDay()];
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

function stringToNumericArray(str) {
    let result = str.match(/(\-|\+)?(\d*\.)?\d+/g);

    if (result) {
        result.map(function (elem, idx) {
            result[idx] = +elem;
        });
    }

    return result;
}

function getMinMax(str) {
    let min = null;
    let max = null;
    let numArray = stringToNumericArray(str);

    if (numArray) {
        numArray.map(function (elem) {
            if (min > elem || min === null) {
                min = elem;
            }

            if (max < elem || max === null) {
                max = elem;
            }
        });
    }

    return {min, max};
}
