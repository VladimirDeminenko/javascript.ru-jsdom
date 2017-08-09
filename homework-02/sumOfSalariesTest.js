/**
 * @file sumOfSalariesTest.js
 * @author Vladimir Deminenko
 * @date 09.08.2017
 */

'use strict';

describe("Сумма свойств", function () {
    it("returns sum of salaries", function () {
        const salaries = {
            "Вася": 100,
            "Петя": 300,
            "Даша": 250
        };

        assert.equal(650, sumOf(salaries));
    });

    it("returns 0", function () {
        assert.equal(0, sumOf({}));
    });
});
