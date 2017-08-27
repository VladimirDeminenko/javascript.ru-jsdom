/**
 * @file menu.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/menu-timer-animated
 */

let Menu = (function () {
    let STATE_CLOSED = 0;
    let STATE_OPEN = 1;

    return class Menu {
        constructor(state) {
            this._state = state || STATE_CLOSED;
        }

        open() {
            this._state = STATE_OPEN;
        }

        close() {
            this._state = STATE_CLOSED;
        }

        _stateAsString() {
            switch (this._state) {
                case STATE_OPEN:
                    return 'открыто';

                case STATE_CLOSED:
                    return 'закрыто';
            }
        }

        showState() {
            alert(this._stateAsString());
        }
    }
})();
