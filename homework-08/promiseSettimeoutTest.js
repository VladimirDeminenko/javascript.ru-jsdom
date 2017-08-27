/**
 * @file promiseSettimeoutTest.js
 * @author Vladimir Deminenko
 * @date 27.08.2017
 */

'use strict';

describe(`promiseSettimeout`, () => {
    const message = `Hello!`;

    it(`delay() -> alert('${message}')`, () => {
        delay(1000)
            .then(() => {
                assert(alert.calledWith(message));
            })
            .catch(error => console.error('promiseSettimeout ERROR:', error));
    });

    before(() => {
        sinon.stub(window, `alert`);
    });

    after(() => {
        window.alert.restore();
    });
});
