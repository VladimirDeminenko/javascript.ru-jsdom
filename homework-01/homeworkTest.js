/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 01.07.2017
 */

describe("Numbers", function () {

    describe("1. sum()", function () {
        it("суммирует два числа", function () {
            assert.equal(18, closureSum(5, 13));
        });

        it("суммирует строку и число", function () {
            assert.equal(-30, closureSum('-55', 25));
        });

        it("суммирует две строки", function () {
            assert.equal(-5, closureSum('-255', '250'));
        });

        it("суммирует две пустые строки", function () {
            assert.equal(0, closureSum('', ''));
        });

        it("суммирует пять целых чисел и строк", function () {
            assert.equal(32, closureSum(-25, '36', '42', -78, 57));
        });

        it("суммирует нечисловые значения", function () {
            assert(isNaN(closureSum(-25, 'x', '', {}, 57)));
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

describe("Strings", function() {

    describe("1. ucFirst()", function() {
        it('Uppercases the first symbol', function() {
            assert.strictEqual("John", ucFirst("john"));
        });

        it("Doesn't die on an empty string", function() {
            assert.strictEqual("", ucFirst(""));
        });
    });

    describe("2. checkSpam()", function() {
        it('finds spam in "buy ViAgRA now"', function() {
            assert.isTrue(checkSpam('buy ViAgRA now'));
        });

        it('finds spam in "free xxxxx"', function() {
            assert.isTrue(checkSpam('free xxxxx'));
        });

        it('no spam in "innocent rabbit"', function() {
            assert.isFalse(checkSpam('innocent rabbit'));
        });
    });

    describe("3. truncate()", function() {
        it("truncate the long string to the given lenth (including the ellipsis)", function() {
            assert.equal("What I'd like to te…",
                truncate("What I'd like to tell on this topic is:", 20)
            );
        });

        it("doesn't change short strings", function() {
            assert.equal("Hi everyone!",
                truncate("Hi everyone!", 20)
            );
        });

    });

    describe("4. extractCurrencyValue()", function() {
        it("for the string $120 returns the number 120", function() {
            assert.strictEqual(120, extractCurrencyValue('$120'));
        });
    });

});
