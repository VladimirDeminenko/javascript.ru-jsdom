/**
 * @file calculatorTest.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

describe("calculator", function () {
    let calculator;

    sinon.stub(window, "prompt");

    prompt.onCall(0).returns("2");
    prompt.onCall(1).returns("3");

    before(function () {
        calculator = new Calculator();
        calculator.read();
    });

    after(function () {
        calculator = null;
        prompt.restore();
    });

    it("при вводе 2 и 3 сумма равна 5", function () {
        assert.equal(calculator.sum(), 5);
    });

    it("при вводе 2 и 3 произведение равно 6", function () {
        assert.equal(calculator.mul(), 6);
    });
});
