/**
 * @file filter.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/filter-through-function
 * Получает массив arr и возвращает новый,
 * в который входят только те элементы arr, для которых func возвращает true.
 * @param arr
 * @param func
 * @returns {Array}
 */
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

/**
 * Возвращает функцию, возвращающую true,
 * если передаваемое значение value содержится в массиве arr
 * и false, в противном случае
 * @param {Array} arr
 * @returns {Function}
 */
function inArray(arr) {
    return function (value) {
        return arr.includes(value);
    };
}

/**
 * Возвращает функцию, возвращающую true,
 * если передаваемое значение value находится между значениями a и b
 * и false, в противном случае
 * @param a
 * @param b
 * @returns {Function}
 */
function inBetween(a, b) {
    return function (value) {
        return value >= a && value <= b;
    };
}
