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

    let getBoilTime = () => this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    let onReady = () => alert('Кофе готов!');
    let timerId = null;

    this.waterAmount = 0;

    this.stop = function () {
        if (timerId) {
            clearTimeout(timerId);
        }
    };

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };
}
