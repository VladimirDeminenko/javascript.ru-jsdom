/**
 * @file addMethodPropertyCoffeeMachine.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

function CoffeeMachine(power) {
    const WATER_HEAT_CAPACITY = 4200;

    let self = this;
    let timerId = null;

    self.waterAmount = 0;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Кофе готов!');
    }

    self.stop = function () {
        if (timerId) {
            clearTimeout(timerId);
        }
    };

    self.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };
}
