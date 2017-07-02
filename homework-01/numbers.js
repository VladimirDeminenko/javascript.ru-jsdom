/**
 * @file numbers.js
 * @author Vladimir Deminenko
 * @date 01.07.2017
 */

'use strict';

function sum() {
    let args = Array.prototype.slice.call(arguments);
    let result = 0;

    args.forEach(function (arg) {
        result += +arg;
    });

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
