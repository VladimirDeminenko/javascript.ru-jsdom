/**
 * @file stringsTest.js
 * @author Vladimir Deminenko
 * @date 01.07.2017
 */

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
