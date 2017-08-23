/**
 * @file applyFunctionSkipFirstArgument.js
 * @author Vladimir Deminenko
 * @date 19.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/apply-function-skip-first-argument
 * вызывает func(), передавая ей аргументы
 * @param func
 * @returns {*}
 */
function applyAll(func, ...args) {
    return func.apply(null, args);
}
