/**
 * @file addMethodPropertyCoffeeMachine.js
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
class CoffeeMachine {
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

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.onReady = function () {
    alert('Кофе готов!');
};

CoffeeMachine.prototype.getBoilTime = function () {
    return this.waterAmount * CoffeeMachine.prototype.WATER_HEAT_CAPACITY * 80 / this.power;
};

