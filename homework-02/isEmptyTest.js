/**
 * @file isEmptyTest.js
 * @author Vladimir Deminenko
 * @date 09.08.2017
 */

'use strict';

describe("Пуст ли объект", function () {
    it("returns true for an empty object", function () {
        assert.isTrue(isEmpty({}));
    });

    it("returns false if a property exists", function () {
        assert.isFalse(isEmpty({
            anything: false
        }));
    });
});
