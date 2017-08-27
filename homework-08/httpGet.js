/**
 * @file httpGet.js
 * @author Vladimir Deminenko
 * @date 27.08.2017
 */

'use strict';

function httpGet(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}
