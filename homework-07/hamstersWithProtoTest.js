/**
 * @file hamstersWithProtoTest.js
 * @author Vladimir Deminenko
 * @date 23.08.2017
 */

'use strict';

describe(`hamsters with proto`, function () {
    let speedy;
    let lazy;

    it(`speedy is well-fed`, () => assert.equal(speedy.food.length, 2));

    it(`lazy is hungry`, () => assert.equal(lazy.food.length, 0));

    before(() => {
        speedy = new Hamster();
        lazy = new Hamster();
        speedy.found(`яблоко`);
        speedy.found(`орех`);
    });

    after(() => {
        lazy = null;
        speedy = null;
    });
});
