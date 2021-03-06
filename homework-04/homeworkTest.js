/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 11.07.2017
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

describe("smart calculator", function () {
    let calculator;

    before(function () {
        calculator = new ExtendableCalculator();
    });

    after(function () {
        calculator = null;
    });

    it("calculate(12 + 34) = 46", function () {
        assert.equal(calculator.calculate("12 + 34"), 46);
    });

    it("calculate(34 - 12) = 22", function () {
        assert.equal(calculator.calculate("34 - 12"), 22);
    });

    it("добавили умножение: calculate(2 * 3) = 6", function () {
        calculator.addMethod("*", function (a, b) {
            return a * b;
        });

        assert.equal(calculator.calculate("2 * 3"), 6);
    });

    it("добавили возведение в степень: calculate(2 ** 3) = 8", function () {
        calculator.addMethod("**", function (a, b) {
            return Math.pow(a, b);
        });

        assert.equal(calculator.calculate("2 ** 3"), 8);
    });

    it("calculate() throws an TypeError exception", function () {
        assert.throws(calculator.calculate, TypeError, 'Incorrect use of a method');
    });
});

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

describe("chaining", function () {
    const testMessage = 'using a class as a function throws a TypeError exception';
    const typeErrorMessage = 'Cannot call a class as a function';

    let ladder;

    before(function () {
        ladder = new Ladder();
    });

    after(function () {
        ladder = null;
    });

    it("ladder.up().up().down().up().down().showStep() = 1", function () {
        assert.equal(ladder.up().up().down().up().down().showStep(), 1);
    });

    it(testMessage, function () {
        assert.throws(Ladder, TypeError);
    });

    it(`${testMessage} with the message "${typeErrorMessage}"`, function () {
        assert.throws(Ladder, TypeError, typeErrorMessage);
    });

    describe("тестирование нескольких объектов Ladder, ladder2.up = ladder1.up", function () {
        let ladder1;
        let ladder2;

        beforeEach(function () {
            ladder1 = new Ladder();
            ladder2 = new Ladder();
            ladder2.up = ladder1.up;
        });

        afterEach(function () {
            ladder2 = null;
            ladder1 = null;
        });

        it("ladder1.up(); ladder1.showStep() = 1", function() {
            ladder1.up();
            assert.equal(ladder1.showStep(), 1);
        });

        it("ladder1.up(); ladder2.showStep() = 0", function() {
            ladder1.up();
            assert.equal(ladder2.showStep(), 0);
        });

        it("ladder2.up(); ladder1.showStep() = 1", function() {
            ladder2.up();
            assert.equal(ladder1.showStep(), 1);
        });

        it("ladder2.up(); ladder2.showStep() = 0", function() {
            ladder2.up();
            assert.equal(ladder2.showStep(), 0);
        });
    });
});
