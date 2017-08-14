/**
 * @file closureSum.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/closure-sum
 * Возвращает функцию, которая возвращает сумму двух чисел - числа,
 * переданного при создании функции и числа, переданного при её вызове.
 * @param {number} b
 * @returns {function(a: number): number}
 */
function closureSum(b = 0) {
    return (a = 0) => +a + (+b);
}

/**
 * Возвращает функцию, которая возвращает сумму нескольких чисел - числа,
 * переданного при создании функции и чисел,
 * переданных при её многократных вызовах.
 * @param {number} b
 * @returns {function(a: number): number}
 */
function multiClosureSum(a = 0) {
    let sum = +a;

    const f = (b = 0) => {
        sum += +b;

        return f;
    };

    f.valueOf = () => sum;
    f.toString = () => `${f.valueOf()}`;

    return f;
}
