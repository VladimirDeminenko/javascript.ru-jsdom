/**
 * @file formatErrorTest.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

describe(`FormatError`, function () {
    const errorName = `FormatError`;
    const errorMessage = `ошибка форматирования`;
    const errorStack = `${errorName}: ${errorMessage}\n    at Context.before`;

    let err;

    it(`err.message`, () => assert.equal(err.message, errorMessage));
    it(`err.name`, () => assert.equal(err.name, errorName));
    it(`err.stack`, () => assert.equal(err.stack.indexOf(errorStack), 0));
    it(`err instanceof SyntaxError`, () => assert.isTrue(err instanceof SyntaxError));

    before(() => err = new FormatError());
});
