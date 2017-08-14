/**
 * @file makeArmyTest.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

describe("армия функций", function () {
    let army;

    before(function () {
        army = makeArmy();
    });

    it("проверка всех стрелков от первого к последнему", function () {
        for (let i = 0; i < army.length; i++) {
            assert.equal(i, army[i]());
        }
    });

    it("проверка всех стрелков от последнего к первому", function () {
        for (let i = army.length - 1; i >= 0; i--) {
            assert.equal(i, army[i]());
        }
    });
});
