/**
 * @file rewriteSumArgumentsTest.js
 * @author Vladimir Deminenko
 * @date 19.08.2017
 */

'use strict';

describe(`sumArgs`, function () {
    it(`sumArgs() = 0`, function () {
        assert.equal(sumArgs(), 0);
    });

    it(`sumArgs(1, 2, 3) = 6`, function () {
        assert.equal(sumArgs(1, 2, 3), 6);
    });

    it(`sumArgs(1, -2, 3) = 2`, function () {
        assert.equal(sumArgs(1, -2, 3), 2);
    });

    it(`sumArgs(1, -2, '3') = 2`, function () {
        assert.equal(sumArgs(1, -2, '3'), 2);
    });

    it(`sumArgs(1, -2, [3]) = 2`, function () {
        assert.equal(sumArgs(1, -2, [3]), 2);
    });

    it(`sumArgs(1, -2, 3, []) = 2`, function () {
        assert.equal(sumArgs(1, -2, 3, []), 2);
    });

    describe(`throws exceptions`, function () {
        it(`sumArgs(1, 2, '3x') throws InvalidParameterError`, function () {
            let sumArgsWithWrongParams = () => sumArgs(1, 2, '3x');

            assert.throws(sumArgsWithWrongParams, InvalidParameterError);
        });

        it(`sumArgs(1, 2, 3, 'x') throws InvalidParameterError`, function () {
            let sumArgsWithWrongParams = () => sumArgs(1, 2, 3, 'x');

            assert.throws(sumArgsWithWrongParams, InvalidParameterError);
        });

        it(`sumArgs(1, 2, 3, undefined) throws InvalidParameterError`, function () {
            let sumArgsWithWrongParams = () => sumArgs(1, 2, 3, undefined);

            assert.throws(sumArgsWithWrongParams, InvalidParameterError);
        });

        it(`sumArgs(1, 2, 3, {}) throws InvalidParameterError`, function () {
            let sumArgsWithWrongParams = () => sumArgs(1, 2, 3, {});

            assert.throws(sumArgsWithWrongParams, InvalidParameterError);
        });

        it(`sumArgs(1, 2, [3, 4]) throws InvalidParameterError`, function () {
            let sumArgsWithWrongParams = () => sumArgs(1, 2, [3, 4]);

            assert.throws(sumArgsWithWrongParams, InvalidParameterError);
        });
    });
});
