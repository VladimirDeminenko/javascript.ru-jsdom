/**
 * @file singleton.js
 * @author Vladimir Deminenko
 * @date 04.07.2017
 */

'use strict';

const Singleton = (function () {
    let instance = null;

    return function () {
        if (!instance) {
            instance = this;
        }

        return instance;
    }
})();

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function sumOf(salaries) {
    let result = 0;

    for (let employee in salaries) {
        result += salaries[employee];
    }

    return result;
}

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

function multiplyNumeric(obj) {
    let value;

    for (let prop in obj) {
        value = obj[prop];

        if (isNumeric(value)) {
            obj[prop] = value * 2;
        }
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
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


    function strikeOut(arr, startIdx) {
        let result = arr.slice(0, startIdx + 1); // starts as [2];
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

    function initArray(n) {
        let result = [];

        for (let i = 2; i < n; i++) {
            result.push(i);
        }

        return result;
    }
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
