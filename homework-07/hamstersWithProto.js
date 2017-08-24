/**
 * @file hamstersWithProto.js
 * @author Vladimir Deminenko
 * @date 23.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/hamsters-with-proto
 */
class Hamster {
    constructor () {
        this.food = [];
    }

    found(something) {
        this.food.push(something);
    }
}
