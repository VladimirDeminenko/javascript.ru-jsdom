/**
 * @file closure.js
 * @author Vladimir Deminenko
 * @date 17.08.2017
 */

'use strict';

/**
 * Необходимо реализовать простой вариант декоратора spyOn
 * (он используется в тестовом фреворке jasmine)
 *
 * Он должен задекорировать функции и считать количество запусков данной функции
 *
 **/

// Код который мы хотим протестировать
function write(text) {
    console.log('write: ', text);
}

function read() {
    console.log('read: ');

    return 'text from file';
}

function run(writable) {
    let text = read();

    if (writable) {
        write(text);
    }
}

// Декоратор
function spyOn(fn) {
    let count = 0;

    this.callsCount += 1;

    return fn;
}

const spyOnDescriptors = {
    callsCount: {
        get: function () {
            return this.count;
        },
        set: function (value) {
            this.count = value;
        }
    }
};

Object.defineProperties(spyOn.prototype, spyOnDescriptors);
