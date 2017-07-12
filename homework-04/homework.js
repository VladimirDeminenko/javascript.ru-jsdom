/**
 * @file homework.js
 * @author Vladimir Deminenko
 * @date 11.07.2017
 */

'use strict';

function Calculator() {
    this.a = 0;
    this.b = 0;

    return {
        read: () => {
            this.a = +prompt('first number:', '0');
            this.b = +prompt('second number:', '0');
        },

        sum: () => {
            return this.a + this.b;
        },

        mul: () => {
            return this.a * this.b;
        }
    }
}
