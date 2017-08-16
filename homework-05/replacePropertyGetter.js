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
        get: function () {
            return this.fullName.split(' ')[0];
        },
        set: function (name) {
            this.fullName = `${name} ${this.lastName}`;
        }
    },
    lastName: {
        get: function () {
            return this.fullName.split(' ')[1];
        },
        set: function (name) {
            this.fullName = `${this.firstName} ${name}`;
        }
    }
};

Object.defineProperties(User.prototype, userDescriptors);
