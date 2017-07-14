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

function createFormula(str, operations = []) {
    let result = null;
    let values = str.split(' ');

    if (values.length === 3) {
        let arg1 = +values[0];
        let arg2 = +values[2];
        let op = values[1];

        if (typeof arg1 === 'number'
            && typeof arg2 === 'number'
            && (op === '+' || op === '-' || operations.includes(op))
        ) {
            result = {
                arg1,
                arg2,
                op
            };
        }
    }

    return result;
}

function SimpleCalculator() {
    this.calculate = (str = null) => {
        let formula = createFormula(str);

        if (formula) {
            return eval(`${formula.arg1} ${formula.op} ${formula.arg2}`);
        }

        throw new EvalError('calculate error');
    };
}

function SmartCalculator() {
    let methodNames = [];
    let methods = [];

    this.calculate = (str = null) => {
        let formula = createFormula(str, methodNames);

        if (formula) {
            let idx = methodNames.indexOf(formula.op);

            if (idx >= 0) {
                let func = methods[idx];

                return func(formula.arg1, formula.arg2);
            }
        }

        throw new EvalError('calculate error');
    };

    this.addMethod = (methodName = null, func = null) => {
        if (!methodName
            || typeof methodName !== 'string'
            || !func
            || typeof func !== 'function') {

            throw new Error('addMethod() error');
        }

        if (methodNames.includes(methodName)) {
            return;
        }

        methodNames.push(methodName);
        methods.push(func);
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
