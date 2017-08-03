/**
 * @file homework.js
 * @author Vladimir Deminenko
 * @date 01.08.2017
 */

'use strict';

function sum() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += +arguments[i];
    }

    return result;
}

function getDecimal(value) {
    let valStr = value.toString().trim();

    if (valStr === '' || !valStr.includes('.')) {
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
    const sqrt5 = Math.sqrt(5);

    return Math.round(Math.pow((1 + sqrt5) / 2, n) / sqrt5);
}

function ucFirst(str) {
    let result = `${str}`;

    if (result) {
        result = `${result[0].toUpperCase()}${result.substring(1)}`;
    }

    return result;
}

function checkSpam(str) {
    const dictionary = [
        'viagra',
        'xxx'
    ];

    const testValue = str.trim().toLowerCase();

    for (let i = 0; i < dictionary.length; i++) {
        if (testValue.includes(dictionary[i])) {
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
