/**
 * @file homework.js
 * @author Vladimir Deminenko
 * @date 01.07.2017
 */

'use strict';

function closureSum() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += +arguments[i];
    }

    return result;
}

function getDecimal(value) {
    let valStr = `${value}`.trim();

    if (valStr === '' || !~valStr.indexOf('.')) {
        return 0;
    }

    valStr = valStr.replace(/^.*\./, '.');

    return +valStr;
}

function fib(n) {
    let a = 1;
    let b = 0;
    let x;

    for (let i = 0; i < n; i++) {
        x = a + b;
        a = b;
        b = x;
    }

    return b;
}

function fibBinet(n) {
    const SQRT5 = Math.sqrt(5);

    return Math.round(Math.pow((1 + SQRT5) / 2, n) / SQRT5);
}

function ucFirst(str) {
    let result = `${str}`;

    if (result) {
        result = `${result[0].toUpperCase()}${result.substring(1)}`;
    }

    return result;
}

function checkSpam(str) {
    const DICTIONARY = [
        'viagra',
        'xxx'
    ];

    const TEST_VALUE = str.trim().toLowerCase();

    for (let i = 0; i < DICTIONARY.length; i++) {
        if (~TEST_VALUE.indexOf(DICTIONARY[i])) {
            return true;
        }
    }

    return false;
}

function truncate(str, maxLength) {
    if (maxLength >= str.length) {
        return str;
    }

    return `${str.substring(0, maxLength - 1)}…`;
}

function extractCurrencyValue(value) {
    return Number(`${value}`.substring(1));
}
