/**
 * @file extendableCalculator.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/calculator-extendable
 * @constructor ExtendableCalculator()  создаёт расширяемые объекты-калькуляторы
 * addMethod()  учит калькулятор новой операции
 * @throws {TypeError}
 */
function ExtendableCalculator() {
    const methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };

    this.calculate = function (str) {
        let method = getExtendableCalculatorMethod(str, methods);

        if (method) {
            return methods[method.op](method.arg1, method.arg2);
        }

        throw new TypeError('calculate error');
    };

    this.addMethod = function (methodName = null, func = null) {
        if (
            !methodName
            || typeof methodName !== 'string'
            || !func
            || typeof func !== 'function'
        ) {
            throw new TypeError('addMethod() error');
        }

        if (!methods[methodName]) {
            methods[methodName] = func;
        }
    };
}

function getExtendableCalculatorMethod(str = null, methods = {}) {
    if (!str) {
        throw new TypeError('Incorrect use of a method');
    }

    let values = str.split(' ');
    let arg1 = +values[0];
    let arg2 = +values[2];
    let op = values[1];

    if (
        isNaN(arg1) ||
        isNaN(arg2) ||
        !methods[op]
    ) {
        return null;
    }

    return {arg1, arg2, op};
}
