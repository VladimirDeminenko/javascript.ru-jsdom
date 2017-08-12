/**
 * @file printNumbersTest.js
 * @author Vladimir Deminenko
 * @date 12.08.2017
 */

'use strict';

describe('printNumbers', function () {
    it('printNumbers(5, 3)', function () {
        assert.equal(printNumbers(5, 3), '0 2 4\n1 3');
    });

    it('printNumbers(5, 5)', function () {
        assert.equal(printNumbers(5, 5), '0 1 2 3 4');
    });

    it('printNumbers(12, 3)', function () {
        assert.equal(printNumbers(12, 3), '0 4 8\n1 5 9\n2 6 10\n3 7 11');
    });

    describe('check params', function () {
        it('printNumbers()', function () {
            assert.equal(printNumbers(), '');
        });

        it('printNumbers(undefined)', function () {
            assert.equal(printNumbers(undefined), '');
        });

        it('printNumbers(undefined, undefined)', function () {
            assert.equal(printNumbers(undefined, undefined), '');
        });

        it('printNumbers(2, undefined)', function () {
            assert.equal(printNumbers(2, undefined), '');
        });

        it('printNumbers(undefined, 2)', function () {
            assert.equal(printNumbers(undefined, 2), '');
        });

        it('printNumbers(undefined, null)', function () {
            let printNumbersWithWrongParams = () => printNumbers(undefined, null);

            assert.throws(printNumbersWithWrongParams, MESSAGE_INVALID_PARAMETER);
        });

        it('printNumbers(null)', function () {
            assert.equal(printNumbers(null), '');
        });

        it('printNumbers(null, 2)', function () {
            assert.equal(printNumbers(null, 2), '');
        });

        it('printNumbers(2, null)', function () {
            let printNumbersWithWrongParams = () => printNumbers(2, null);

            assert.throws(printNumbersWithWrongParams, MESSAGE_INVALID_PARAMETER);
        });

        it('printNumbers(null, null)', function () {
            let printNumbersWithWrongParams = () => printNumbers(null, null);

            assert.throws(printNumbersWithWrongParams, MESSAGE_INVALID_PARAMETER);
        });

        it('printNumbers(-1, 2)', function () {
            let printNumbersWithWrongParams = () => printNumbers(-1, 2);

            assert.throws(printNumbersWithWrongParams, MESSAGE_INVALID_PARAMETER);
        });

        it('printNumbers(0, -2)', function () {
            let printNumbersWithWrongParams = () => printNumbers(0, -2);

            assert.throws(printNumbersWithWrongParams, MESSAGE_INVALID_PARAMETER);
        });
    });
});
