/**
 * @file homework.js
 * @author Vladimir Deminenko
 * @date 07.07.2017
 */

'use strict';

function closureSum(b) {
    return function (a) {
        return +a + (+b);
    };
}

function makeBuffer() {
    let buffer = [];

    let cleanedBuffer = function (value) {
        if (arguments.length === 0) {
            return buffer.join('');
        }

        buffer.push(`${value}`);
    };

    cleanedBuffer.clear = function () {
        buffer.length = 0;
    };

    return cleanedBuffer;
}

function byField(fieldName) {
    let sortByAge = function (user1, user2) {
        return user1.age - user2.age;
    };

    let sortByName = function (user1, user2) {
        if (user1.name > user2.name) {
            return 1;
        }

        return -1;
    };

    if ('age' === fieldName.toLowerCase()) {
        return sortByAge;
    }

    return sortByName;
}

function inArray(arr) {
    return function (value) {
        return !!~arr.indexOf(value);
    };
}

function inBetween(a, b) {
    return function (value) {
        return value >= a && value <= b;
    };
}

function filter(arr, func) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (func(value)) {
            result.push(value);
        }
    }

    return result;
}

function makeArmy() {
    function createShooter(shooter) {
        return function () {
            return shooter;
        }
    }

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        shooters.push(createShooter(i));
    }

    return shooters;
}
