/**
 * @file singleton.js
 * @author Vladimir Deminenko
 * @date 04.07.2017
 */

'use strict';

const Singleton = (function () {
    let instance = null;

    return function () {
        if (!instance) {
            instance = this;
        }

        return instance;
    }
})();
