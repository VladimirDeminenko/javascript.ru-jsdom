/**
 * @file addMethodPropertyCoffeeMachineTest.js
 * @author Vladimir Deminenko
 * @date 23.08.2017
 */

'use strict';

describe(`rewrite by class: CoffeeMachine`, () => {
    let coffeeMachine;

    it(`boil time`, () => assert.equal(coffeeMachine.getBoilTime(), 1344));

    it(`кофе приготовлен не будет`, () => coffeeMachine.stop(coffeeMachine.run()));

    before(() => coffeeMachine = new CoffeeMachine(50000, 200));
});
