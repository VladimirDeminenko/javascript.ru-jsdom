/**
 * @file chainCallsTest.js
 * @author Vladimir Deminenko
 * @date 16.08.2017
 */

'use strict';

describe("chain-calls", function () {
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

        it("ladder1.up(); ladder1.showStep() = 1", function () {
            ladder1.up();
            assert.equal(ladder1.showStep(), 1);
        });

        it("ladder1.up(); ladder2.showStep() = 0", function () {
            ladder1.up();
            assert.equal(ladder2.showStep(), 0);
        });

        it("ladder2.up(); ladder1.showStep() = 1", function () {
            ladder2.up();
            assert.equal(ladder1.showStep(), 1);
        });

        it("ladder2.up(); ladder2.showStep() = 0", function () {
            ladder2.up();
            assert.equal(ladder2.showStep(), 0);
        });
    });
});
