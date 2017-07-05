/**
 * @file singletonTest.js
 * @author Vladimir Deminenko
 * @date 04.07.2017
 */

describe("Singleton", function() {
    it("new Singleton() === new Singleton()", function() {
        assert.strictEqual(new Singleton(), new Singleton());
    });
});
