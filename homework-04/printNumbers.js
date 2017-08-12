/**
 * @file printNumbers.js
 * @author Vladimir Deminenko
 * @date 12.08.2017
 */

const MESSAGE_INVALID_PARAMETER = 'Invalid parameter';

/**
 * Возвращает строки чисел в колонках.
 * @throws  {Error}         при передаче неподходящих параметров,
 *                          возбуждает Exception с соответствующим текстом
 * @param   {number}  max   от 0 до max
 * @param   {number}  cols  количество колонок
 * @returns {string}
 */
var printNumbers = function (max, cols) {
    checkParams(max, cols);

    let rows = [];
    let rowCount = Math.ceil(max / cols);

    for (let i = 0; i < rowCount; i++) {
        rows.push(getRow(i, rowCount, max, cols));
    }

    return rows.join('\n');
};

/**
 * Проверяет корректность переданных параметров.
 * @throws  {Error} при передаче неподходящих параметров,
 *                  возбуждает Exception с соответствующим текстом
 * @param   max     максимальное значение, не меньше нуля
 * @param   cols    количество колонок, положительное, больше нуля
 */
function checkParams(max, cols) {
    if (max < 0 || cols <= 0) {
        throw new Error(MESSAGE_INVALID_PARAMETER);
    }
}

/**
 * Возвращает строку чисел, разделённых пробелом;
 * стартует с числа, переданного в аргументе start.
 * @param   {number}  start     первое значение в результирующей строке
 * @param   {number}  step      шаг, на который увеличивается следующее число
 * @param   {number}  max       максимальное значение, не попадает в результат
 * @param   {number}  cols      максимальное количество чисел (колонок) в строке
 * @returns {string}
 */
function getRow(start, step, max, cols) {
    let row = [];

    for (let i = start; i < max && row.length < cols; i += step) {
        row.push(i);
    }

    return row.join(' ');
}
