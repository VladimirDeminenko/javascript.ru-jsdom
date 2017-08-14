/**
 * @file makeBuffer.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/stringbuffer
 * https://learn.javascript.ru/task/stringbuffer-with-clear
 * Возвращает функцию cleanedBuffer,
 * которая при вызове cleanedBuffer(value)
 * добавляет значение во внутреннее хранилище,
 * а при вызове без аргументов cleanedBuffer() – возвращает его;
 * cleanedBuffer имеет метод clear(),
 * при вызове которой, очищается внутреннее хранилище
 * @returns {cleanedBuffer}
 */
function makeBuffer() {
    let buffer = [];

    let cleanedBuffer = function (value) {
        if (arguments.length === 0) {
            return buffer.join('');
        }

        buffer.push(`${value}`);
    };

    cleanedBuffer.clear = () => buffer.length = 0;

    return cleanedBuffer;
}
