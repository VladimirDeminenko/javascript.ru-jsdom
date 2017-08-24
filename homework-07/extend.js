/**
 * @file extend.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

class Class {
    extend(desc) {
        let ResultClass = new Class();

        for (let key in desc) {
            ResultClass.prototype[key] = desc[key];
        }

        return ResultClass;
    }
}

let Widget = Class.extend(
    {
        constructor(el, options) {
            this.el = el;
            this.options = options;
        },

        find: function (selector) {
            return this.el.querySelector(selector);
        }
    }
);

let menu;

let Dropdown = Widget.extend(
    {
        constructor() {
            Widget.apply(this, arguments);
            this.find('.js-ctrl').addEventListener('click', this);
        },

        handleEvent(event) {
            this.toggle();
        },

        toggle() {
            menu = this.find('.js-menu');
            menu.classList.toggle('collapsed');
        }
    }
);
