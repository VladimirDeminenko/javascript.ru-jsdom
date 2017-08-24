/**
 * @file clockClassExtended.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/clock-class-extended
 * @param options
 */
class ExtendedClock extends Clock {
    constructor(options) {
        super(options);

        this._precision = +options.precision || 1000;
    }

    start() {
        this._render(this._template);
        this._timer = setInterval(() => this._render(this._template), this._precision);
    }
}
