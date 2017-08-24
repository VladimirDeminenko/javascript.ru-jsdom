/**
 * @file clockClass.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/clock-class
 * @param options
 */
class Clock {
    constructor(options) {
        this._template = options.template;
        this._timer = null;
    }

    stop() {
        clearInterval(this._timer);
    }

    start() {
        this._render(this._template);
        this._timer = setInterval(() => this._render(this._template), 1000);
    }
}

Clock.prototype._render = function(template = '') {
    let now = new Date();
    let localTime = new Date(now - now.getTimezoneOffset() * 60 * 1000);
    let [hours, min, sec] = localTime.toISOString().slice(11, -5).split(':');
    let output = template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};
