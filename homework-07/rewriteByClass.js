/**
 * @file rewriteByClass.js
 * @author Vladimir Deminenko
 * @date 23.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/rewrite-by-class
 * @constructor CoffeeMachine
 * @param   {number}    power       мощность кофеварки
 * @param   {number}    waterAmount количество воды
 * @method              run()       запускает кофеварку
 * @method              stop()      останавливает кофеварку
 */
let CoffeeMachine = (function () {
    const WATER_HEAT_CAPACITY = 4200;

    return class CoffeeMachine {
        constructor(power, waterAmount = 0) {
            this.power = power;
            this.waterAmount = waterAmount;
        }

        stop(timerId) {
            if (timerId) {
                clearTimeout(timerId);
            }
        }

        run() {
            return setTimeout(this.onReady, this.getBoilTime);
        }

        onReady() {
            alert('Кофе готов!');
        }

        getBoilTime() {
            return this.waterAmount * WATER_HEAT_CAPACITY * 80 / this.power;
        }

        get waterAmount() {
            return this._waterAmount;
        }

        set waterAmount(value) {
            this._waterAmount = value;
        }

        get power() {
            return this._power;
        }

        set power(value) {
            this._power = value;
        }
    }
})();

