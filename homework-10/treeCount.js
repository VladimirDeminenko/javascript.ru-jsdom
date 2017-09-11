/**
 * @file treeCount.js
 * @author Vladimir Deminenko
 * @date 08.09.2017
 */

'use strict';

(function () {
    let elements = document.querySelectorAll('#tree-count li');

    for (let elem of elements) {
        let count = elem.getElementsByTagName('li').length;

        if (count) {
            elem.firstChild.data += ` [${count}]`;
        }
    }
})();
