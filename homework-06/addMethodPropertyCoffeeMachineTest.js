/**
 * @file addMethodPropertyCoffeeMachineTest.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

describe("coffeeMachine", function () {
    it("кофе приготовлен не будет", function () {
        let coffeeMachine = new CoffeeMachine(50000);

        coffeeMachine.waterAmount = 200;
        coffeeMachine.run();
        coffeeMachine.stop();
    });
});
