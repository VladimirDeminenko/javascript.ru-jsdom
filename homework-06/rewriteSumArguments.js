/**
 * @file rewriteSumArguments.js
 * @author Vladimir Deminenko
 * @date 19.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/rewrite-sum-arguments
 * @constructor sumArgs()           суммирует все свои аргументы
 * @throws {InvalidParameterError}  вызывает исключение, если сумма является NaN
 * @returns {number}                сумма всех аргументов
 */
function sumArgs() {
    return [].slice.call(arguments).reduce(sum, 0);
}

let sum = (a, b) => {
    let result = +a + (+b);

    if (isNaN(result)) {
        throw new InvalidParameterError();
    }

    return result;
};

function InvalidParameterError(message = 'Invalid parameter') {
    this.name = 'InvalidParameterError';
    this.message = message;
}
