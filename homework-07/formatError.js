/**
 * @file formatError.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/format-error
 */
class FormatError extends SyntaxError {
    constructor() {
        super(arguments);

        this.name = 'FormatError';
        this.message = 'ошибка форматирования';

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }
}
