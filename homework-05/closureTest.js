/**
 * @file closureTest.js
 * @author Vladimir Deminenko
 * @date 17.08.2017
 */

'use strict';

describe('closure', function () {
    before(function () {
        write = spyOn(write);
        read = spyOn(read);
    });

    it('write.callsCount === 0', function () {
        assert.isTrue(write.callsCount === 0);
    });

    it('read.callsCount === 0', function () {
        assert.isTrue(write.callsCount === 0);
    });

});
