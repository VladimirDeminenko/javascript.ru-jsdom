/**
 * @file dummyTest.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

describe(`Dummy / Singleton`, function () {
    let foo;
    let bar;
    let baz;

    before(function () {
        foo = new Dummy();
        bar = new Dummy();
        bar.setValue(123);
        baz = Dummy();
    });

    after(function () {
        baz = null;
        bar = null;
        foo = null;
    });

    it(`foo === bar`, function () {
        assert.isTrue(foo === bar);
    });

    it(`foo.getValue() === bar.getValue()`, function () {
        assert.isTrue(foo.getValue() === bar.getValue());
    });

    it(`baz === bar`, function () {
        assert.isTrue(baz === bar);
    });

    it(`baz.getValue() = 123`, function () {
        assert.isTrue(baz.getValue() === 123);
    });
});
