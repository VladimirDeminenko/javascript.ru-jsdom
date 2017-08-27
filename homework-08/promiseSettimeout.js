/**
 * @file promiseSettimeout.js
 * @author Vladimir Deminenko
 * @date 27.08.2017
 */

'use strict';

/**
 * http://learn.javascript.ru/task/promise-settimeout
 * function delay(ms) makes a pause in ms milliseconds
 * @param   {number}  ms   delay time, milliseconds
 * @returns {Promise.<function(): number>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
