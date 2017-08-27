/**
 * @file promiseSequenceTest.js
 * @author Vladimir Deminenko
 * @date 27.08.2017
 */

'use strict';

describe(`promiseSequence`, () => {
    const urls = [
        'user.json',
        'guest.json'
    ];

    const testData = JSON.stringify([
        "{\r\n  \"name\": \"iliakan\",\r\n  \"isAdmin\": true\r\n}\r\n","{\r\n  \"name\": \"guest\",\r\n  \"isAdmin\": false\r\n}\r\n"
]);

    it(`promiseSequence(urls)`, () => {
        let data = promiseSequence(urls);

        delay(1000)
            .then(() => assert.deepEqual(JSON.stringify(data), testData)
            )
            .catch(error => console.error('promiseSequence ERROR:', error.message));
    });
});
