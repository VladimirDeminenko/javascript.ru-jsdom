/**
 * @file menuTimerAnimated.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/menu-timer-animated
 */
let AnimatingMenu = (function () {
    let STATE_ANIMATING = 2;

    return class AnimatingMenu extends Menu {
        constructor(state) {
            super(state);

            this._timer = null;
        }

        _stateAsString() {
            if (this._state === STATE_ANIMATING) {
                return 'анимация';
            }

            return super._stateAsString.call(this);
        }

        open() {
            this._state = STATE_ANIMATING;
            this._timer = setTimeout(() => super.open.call(this), 1000);
        }

        close() {
            clearInterval(this._timer);
            super.close.call(this);
        }
    }
})();
