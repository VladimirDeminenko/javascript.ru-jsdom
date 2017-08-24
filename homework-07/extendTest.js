/**
 * @file extendTest.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

describe(`extend`, function () {
    let dd;

    it(`dd is Class`, () => assert.isTrue(dd instanceof Class));
    it(`dd is Widget`, () => assert.isTrue(dd instanceof Widget));
    it(`dd is Dropdown`, () => assert.isTrue(dd instanceof Dropdown));

    before(() => dd = new Dropdown(menu));
});
