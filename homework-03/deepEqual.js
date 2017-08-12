/**
 * @file deepEqual.js
 * @author Vladimir Deminenko
 * @date 09.08.2017
 */

'use strict';

/**
 * function deepEqual() compares two objects and their properties
 * @param {Object} obj
 * @param {Object} obj2
 * @returns {boolean}
 */
function deepEqual(obj, obj2) {
    // сравнение примитивов и значений undefined
    if (![typeof obj, typeof obj2].includes('object')) {
        return obj === obj2 && obj !== undefined;
    }

    if (
        obj === null &&
        obj2 === null
    ) {
        return true;
    }

    if (
        typeof obj !== 'object' ||
        typeof obj2 !== 'object' ||
        obj === null ||
        obj2 === null
    ) {
        return false;
    }

    let keys = Object.keys(obj);
    let keys2 = Object.keys(obj2);

    if (keys.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = obj[key];
        let value2 = obj2[key];

        if (typeof value === 'object') {
            return deepEqual(value, value2);
        }

        if (value !== value2) {
            return false;
        }
    }

    return true;
}
