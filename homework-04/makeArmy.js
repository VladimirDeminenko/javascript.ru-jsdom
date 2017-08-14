/**
 * @file makeArmy.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/make-army
 * Создает массив функций-стрелков shooters.
 * Каждый стрелок хранит свой номер, под которым был создан.
 * @returns {Array} массив функций-стрелков
 */
function makeArmy() {
    function createShooter(shooter) {
        return () => shooter;
    }

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        shooters.push(createShooter(i));
    }

    return shooters;
}
