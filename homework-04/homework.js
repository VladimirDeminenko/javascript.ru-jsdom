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

function getSmartCalculatorMethod(str = null, methods = {}) {
    if (!str) {
        throw new TypeError('Incorrect use of a method');
    }

    let values = str.split(' ');
    let arg1 = +values[0];
    let arg2 = +values[2];
    let op = values[1];

    if (isNaN(arg1) || isNaN(arg2) || !methods[op]) {
        return null;
    }

    return {arg1, arg2, op};
}

function SmartCalculator() {
    const methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };

    this.calculate = (str) => {
        let method = getSmartCalculatorMethod(str, methods);

        if (method) {
            return methods[method.op](method.arg1, method.arg2);
        }

        throw new TypeError('calculate error');
    };

    this.addMethod = (methodName = null, func = null) => {
        if (!methodName
            || typeof methodName !== 'string'
            || !func
            || typeof func !== 'function') {

            throw new TypeError('addMethod() error');
        }

        if (!methods[methodName]) {
            methods[methodName] = func;
        }
    };
}

function Accumulator(startingValue = 0) {
    this.value = startingValue;

    this.read = () => {
        this.value += +prompt('you value:', '0');
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

    this.showStep = () => step;
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
