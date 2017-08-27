/**
 * @file promiseSequence.js
 * @author Vladimir Deminenko
 * @date 27.08.2017
 */

'use strict';

/**
 * http://learn.javascript.ru/task/promise-sequence
 * загружает все URL из этого массива – один за другим (последовательно)
 * и сохраняет в результаты в массиве results
 * @param   {Array} urls
 * @returns {Array} results
 */
function promiseSequence(urls) {
    let results = [];
    let chain = Promise.resolve();

    for (let i = 0; i < urls.length; i++) {
        let url = urls[i];

        chain = chain
            .then(() => httpGet(url))
            .then((result) => {
                results.push(result);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return results;
}
