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
