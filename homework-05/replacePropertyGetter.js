/**
 * @file replacePropertyGetter.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/replace-property-getter
 * @param {string}    fullName
 * @constructor User()
 */
function User(fullName) {
    this.fullName = fullName;
}

const userDescriptors = {
    firstName: {
        get() {
            return this.fullName.split(' ')[0];
        },
        set(name) {
            this.fullName = `${name} ${this.lastName}`;
        }
    },
    lastName: {
        get() {
            return this.fullName.split(' ')[1];
        },
        set(name) {
            this.fullName = `${this.firstName} ${name}`;
        }
    }
};

Object.defineProperties(User.prototype, userDescriptors);
