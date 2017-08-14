/**
 * @file printNumbersTest.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

describe("сумма через замыкание", function () {
    it("sum()() = 0", function () {
        assert.equal(closureSum()(), 0);
    });

    it("sum(1)() = 1", function () {
        assert.equal(closureSum(1)(), 1);
    });

    it("sum()(2) = 2", function () {
        assert.equal(closureSum()(2), 2);
    });

    it("sum(1)(2) = 3", function () {
        assert.equal(closureSum(1)(2), 3);
    });

    it("sum('5')('-1') = 4", function () {
        assert.equal(closureSum('5')('-1'), 4);
    });
});


describe("множественные суммы через замыкание", function () {
    it("sum() = 0", function () {
        assert.equal(multiClosureSum(), 0);
    });

    it("sum(5) = 5", function () {
        assert.equal(multiClosureSum(5), 5);
    });

    it("sum('5') = 5", function () {
        assert.equal(multiClosureSum('5'), 5);
    });

    it("sum(1)(2) = 3", function () {
        assert.equal(multiClosureSum(1)(2), 3);
    });

    it("sum('1')('2') = 3", function () {
        assert.equal(multiClosureSum('1')('2'), 3);
    });

    it("sum(1)(2)(3) = 6", function () {
        assert.equal(multiClosureSum(1)(2)(3), 6);
    });

    it("sum(5)(-1)(2) = 6", function () {
        assert.equal(multiClosureSum(5)(-1)(2), 6);
    });

    it("sum(6)(-1)(-2)(-3) = 0", function () {
        assert.equal(multiClosureSum(6)(-1)(-2)(-3), 0);
    });

    it("sum(0)(1)(2)(3)(4)(5) = 15", function () {
        assert.equal(multiClosureSum(0)(1)(2)(3)(4)(5), 15);
    });

    it("sum(1)(2)(0)()(4)(5)(3)() = 15", function () {
        assert.equal(multiClosureSum(1)(2)(0)()(4)(5)(3)(), 15);
    });
});
