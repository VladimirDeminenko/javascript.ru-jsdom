/**
 * @file menu.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/menu-timer-animated
 */
class Menu {
    constructor(state) {
        this._state = state || Menu.STATE_CLOSED;
    }

    open() {
        this._state = Menu.STATE_OPEN;
    }

    close() {
        this._state = Menu.STATE_CLOSED;
    }

    _stateAsString() {
        switch (this._state) {
            case Menu.STATE_OPEN:
                return 'открыто';

            case Menu.STATE_CLOSED:
                return 'закрыто';
        }
    }

    showState() {
        alert(this._stateAsString());
    }
}

Menu.STATE_CLOSED = 0;
Menu.STATE_OPEN = 1;
