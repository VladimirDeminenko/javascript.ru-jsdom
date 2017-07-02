/**
 * @file strings.js
 * @author Vladimir Deminenko
 * @date 01.07.2017
 */

'use strict';

function ucFirst(str) {
    let result = `${str}`.trim();

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
