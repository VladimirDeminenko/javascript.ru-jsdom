/**
 * @file problem.js
 * @author Vladimir Deminenko
 * @date 29.08.2017
 */

'use strict';

/**
 * http://burlakilia.github.io/playground/#-KeF_KE82-LCaDCkF_UT
 */

let callbacks = [];

setTimeout = function () {
    // Здесь реализация вашей функции setTimeout
}


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

        setTimeotu(() => {
            console.log(4);
        }, 1000);

        process();
    }, 0);

    console.log(0);
}

// пока что он не выполняется, дабы не повесить песочницу
while (false) {
    // EventLoop, выполнять, пока все callback'и не выполнятся
}

main();

// Ожидается, что в консоли выведется
// 0, 1, 2, 3, 4



