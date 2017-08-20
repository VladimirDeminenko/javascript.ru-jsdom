/**
 * @file addMethodPropertyCoffeeMachine.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/add-method-property-coffeemachine
 * @constructor CoffeeMachine
 * @param   {number}    power   мощность кофеварки
 * @method              run()   запускает кофеварку
 * @method              stop()  останавливает кофеварку
 */
function CoffeeMachine(power) {
    const WATER_HEAT_CAPACITY = 4200;

    let self = this;
    let timerId = null;

    self.waterAmount = 0;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Кофе готов!' );
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
