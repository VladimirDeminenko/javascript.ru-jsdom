/**
 * @file accumulator.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/accumulator
 * @constructor Accumulator
 * @param startingValue
 * read()    вызывает prompt, принимает число и прибавляет его к свойству value
 */
function Accumulator(startingValue = 0) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('you value:', '0');
    };
}
