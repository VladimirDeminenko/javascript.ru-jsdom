/**
 * @file dummy.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

let Dummy = (function () {
    let instance;

    return function Dummy() {
        if (instance) {
            return instance;
        }

        if (this && this.constructor === Dummy) {
            instance = this;
        } else {
            return new Dummy();
        }
    }
})();

Dummy.prototype.value = 'fail';

Dummy.prototype.setValue = function (value) {
    this.value = value;
};

Dummy.prototype.getValue = function () {
    return this.value;
};
