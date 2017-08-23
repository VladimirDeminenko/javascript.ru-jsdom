/**
 * @file dummy.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

let Dummy = (function () {
    let instance = null;

    return function Singleton() {
        if (instance) {
            return instance;
        }

        if (new.target) {
            instance = this;
        } else {
            return new Singleton();
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
