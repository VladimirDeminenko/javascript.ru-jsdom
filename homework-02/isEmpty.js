/**
 * @file isEmpty.js
 * @author Vladimir Deminenko
 * @date 09.08.2017
 */

'use strict';

/**
 * it checks an object is empty
 * @param obj
 * @returns {boolean}
 */
function isEmpty(obj) {
    return obj && Object.keys(obj).length === 0;
}
