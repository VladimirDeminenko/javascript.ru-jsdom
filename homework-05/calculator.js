/**
 * @file calculator.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/calculator
 * @constructor Calculator()
 * read()   запрашивает prompt два значения и сохраняет их как свойства объекта
 * sum()    возвращает сумму этих двух значений
 * mul()    возвращает произведение этих двух значений
 */
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
