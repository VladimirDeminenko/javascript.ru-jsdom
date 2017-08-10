/**
 * @file deepEqual.js
 * @author Vladimir Deminenko
 * @date 09.08.2017
 */

'use strict';

/**
 * function deepEqual() compares two objects and their properties
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {boolean}
 */
function deepEqual(obj1, obj2) {
    // сравнение примитивов, отличных от undefined
    if (![typeof obj1, typeof obj2].includes('object')) {
        return obj1 === obj2 && obj1 !== undefined;
    }

    if (
        obj1 === null &&
        obj2 === null
    ) {
        return true;
    }

    let keys;
    let keys2;

    // использование try...catch
    // позволяет обойтись без многих проверок - сравни с deepEqual2()
    try {
        keys = Object.keys(obj1);
        keys2 = Object.keys(obj2);
    }
    catch (err) {
        return false;
    }

    if (keys.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];

        if (typeof obj1[key] === 'object') {
            return deepEqual(obj1[key], obj2[key]);
        }

        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

/**
 * function deepEqual() compares two objects and their properties
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {boolean}
 */
function deepEqual2(obj1, obj2) {
    // сравнение примитивов, отличных от undefined
    if (![typeof obj1, typeof obj2].includes('object')) {
        return obj1 === obj2 && obj1 !== undefined;
    }

    if (
        obj1 === null &&
        obj2 === null
    ) {
        return true;
    }

    if (
        typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        (obj1 === null && obj2 !== null) ||
        (obj1 !== null && obj2 === null)
    ) {
        return false;
    }

    let keys = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (
        keys && keys.length &&
        keys2 && keys2.length &&
        keys.length !== keys2.length
    ) {
        return false;
    }

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];

        if (typeof obj1[key] === 'object') {
            return deepEqual(obj1[key], obj2[key]);
        }

        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}