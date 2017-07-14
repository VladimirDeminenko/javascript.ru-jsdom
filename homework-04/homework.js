/**
 * @file homework.js
 * @author Vladimir Deminenko
 * @date 11.07.2017
 */

'use strict';

function Calculator() {
    let a = 0;
    let b = 0;

    this.read = () => {
        a = +prompt('first number:', '0');
        b = +prompt('second number:', '0');
    };

    this.sum = () => {
        return a + b;
    };

    this.mul = () => {
        return a * b;
    };
}

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

    this.showStep = () => {
        return step;
    };
}

function closureSum(b = 0) {
    return (a = 0) => +a + (+b);
}

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
