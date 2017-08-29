/**
 * @file solution.js
 * @author Vladimir Deminenko
 * @date 29.08.2017
 */

'use strict';

/**
 * http://burlakilia.github.io/playground/#-KsirEYUEYY1E_UhbSCt
 */

let callbacks = [];

let setTimeout = function (callback, timeout) {
    // Здесь реализация вашей функции setTimeout

    callbacks.push(
        new Promise(resolve => resolve(window.setTimeout(callback, timeout)))
    );
};

// Точка входа
function main () {
    function process() {
        console.log(2);

        setTimeout(() => {
            console.log(3);
        }, 400);
    }

    setTimeout(() => {
        console.log(1);

        setTimeout(() => {
            console.log(4);
        }, 1000);

        process();
    }, 0);

    console.log(0);
}

main();

// То есть, что все переданные в setTimeout коллбеки будут взываны в правильном порядке
// Ожидается, что в консоли выведется
// 0, 1, 2, 3, 4


// пока что он не выполняется, дабы не повесить песочницу
while (true) {
    let promise = callbacks.shift();

    if (promise) {
        promise.then(funk => func());
    }
}
