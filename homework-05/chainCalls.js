/**
 * @file chainCalls.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/chain-calls
 * @constructor Ladder()
 * up()         increments step
 * down()       decrements step
 * showStep()   shows step
 */
function Ladder() {
    if (typeof this === 'undefined') {
        throw new TypeError('Cannot call a class as a function');
    }

    let step = 0;

    this.up = () => {
        step++;

        return this;
    };

    this.down = () => {
        step--;

        return this;
    };

    this.showStep = () => step;
}
