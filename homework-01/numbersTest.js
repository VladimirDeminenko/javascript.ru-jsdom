/**
 * @file numbersTest.js
 * @author Vladimir Deminenko
 * @date 01.07.2017
 */

describe("Numbers", function () {

    describe("1. sum()", function () {
        it("суммирует два числа", function () {
            assert.equal(18, sum(5, 13));
        });

        it("суммирует строку и число", function () {
            assert.equal(-30, sum('-55', 25));
        });

        it("суммирует две строки", function () {
            assert.equal(-5, sum('-255', '250'));
        });

        it("суммирует две пустые строки", function () {
            assert.equal(0, sum('', ''));
        });

        it("суммирует пять целых чисел и строк", function () {
            assert.equal(32, sum(-25, '36', '42', -78, 57));
        });

        it("суммирует нечисловые значения", function () {
            assert(isNaN(sum(-25, 'x', '', {}, 57)));
        });
    });


    describe("2. getDecimal()", function () {
        it("возвращает дробную часть 1.2 как 0.2", function () {
            assert.equal(0.2, getDecimal(1.2));
        });

        it("возвращает дробную часть 1.3 как 0.3", function () {
            assert.equal(0.3, getDecimal(1.3));
        });

        it("возвращает дробную часть 12.345 как 0.345", function () {
            assert.equal(0.345, getDecimal(12.345));
        });

        it("возвращает дробную часть -1.2 как 0.2", function () {
            assert.equal(0.2, getDecimal(-1.2));
        });

        it("возвращает дробную часть 5 как 0", function () {
            assert.equal(0, getDecimal(5));
        });
    });


    describe("3. fib() & fibBinet()", function () {
        it("fib(12) = 144", function () {
            assert.equal(144, fib(12));
        });

        it("fibBinet(12) = 144", function () {
            assert.equal(144, fibBinet(12));
        });

        it("fib(77) = 5527939700884757", function () {
            assert.equal(5527939700884757, fib(77));
        });

        it("fibBinet(77) = 5527939700884755", function () {
            assert.equal(5527939700884755, fibBinet(77));
        });

        it("fib(77) - fibBinet(77) = 2", function () {
            assert.equal(2, fib(77) - fibBinet(77));
        });

        it("fib(75) = fibBinet(75)", function () {
            assert.equal(0, fib(75) - fibBinet(75));
        });
    });

});
