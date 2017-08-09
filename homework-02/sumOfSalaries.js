/**
 * @file singleton.js
 * @author Vladimir Deminenko
 * @date 09.08.2017
 */

'use strict';

/**
 * returns a sum of all employees salary
 * @param salaries
 * @returns {number}
 */
function sumOf(salaries) {
    let result = 0;

    for (let employee in salaries) {
        result += salaries[employee];
    }

    return result;
}
