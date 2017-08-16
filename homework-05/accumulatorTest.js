/**
 * @file accumulatorTest.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

describe("accumulator", function () {
    let accumulator;

    before(function () {
        accumulator = new Accumulator(1);
    });

    beforeEach(function () {
        sinon.stub(window, "prompt")
    });

    afterEach(function () {
        prompt.restore();
    });

    after(function () {
        accumulator = null;
    });

    it("начальное значение 1", function () {
        assert.equal(accumulator.value, 1);
    });

    it("после ввода 0 значение 1", function () {
        prompt.returns("0");
        accumulator.read();
        assert.equal(accumulator.value, 1);
    });

    it("после ввода 1 значение 2", function () {
        prompt.returns("1");
        accumulator.read();
        assert.equal(accumulator.value, 2);
    });

    it("после ввода 2 значение 4", function () {
        prompt.returns("2");
        accumulator.read();
        assert.equal(accumulator.value, 4);
    });
});
