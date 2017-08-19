/**
 * @file sumTest.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

describe('сумма произвольного количества скобок', function () {
    it('sum() = 0', function () {
        assert.equal(sum(), 0);
    });

    it('sum(5) = 5', function () {
        assert.equal(sum(5), 5);
    });

    it('sum(\'5\') = 5', function () {
        assert.equal(sum('5'), 5);
    });

    it('sum(1)(2) = 3', function () {
        assert.equal(sum(1)(2), 3);
    });

    it('sum(\'1\')(\'2\') = 3', function () {
        assert.equal(sum('1')('2'), 3);
    });

    it('sum(1)(2)(3) = 6', function () {
        assert.equal(sum(1)(2)(3), 6);
    });

    it('sum(5)(-1)(2) = 6', function () {
        assert.equal(sum(5)(-1)(2), 6);
    });

    it('sum(6)(-1)(-2)(-3) = 0', function () {
        assert.equal(sum(6)(-1)(-2)(-3), 0);
    });

    it('sum(0)(1)(2)(3)(4)(5) = 15', function () {
        assert.equal(sum(0)(1)(2)(3)(4)(5), 15);
    });

    it('sum(1)(2)(0)()(4)(5)(3)() = 15', function () {
        assert.equal(sum(1)(2)(0)()(4)(5)(3)(), 15);
    });
});
