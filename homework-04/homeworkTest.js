/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 11.07.2017
 */

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
        assert.equal((assert.throws(Ladder, TypeError).message), typeErrorMessage);
    });
});

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
