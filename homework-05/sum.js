/**
 * @file sum.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/sum-many-brackets
 * Возвращает функцию, которая возвращает сумму нескольких чисел - числа,
 * переданного при создании функции и чисел,
 * переданных при её многократных вызовах.
 * @param {number} b
 * @returns {function(a: number): number}
 */
function sum(a = 0) {
    let sum = +a;

    const f = (b = 0) => {
        sum += +b;

        return f;
    };

    f.valueOf = () => sum;
    f.toString = () => `${f.valueOf()}`;

    return f;
}
