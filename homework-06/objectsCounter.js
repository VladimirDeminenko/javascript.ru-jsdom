/**
 * @file objectsCounter.js
 * @author Vladimir Deminenko
 * @date 19.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/objects-counter
 * @constructor
 */
function Article() {
    this.created = new Date();

    Article.count++;
    Article.lastCreated = this.created;
    Article.showStats = function() {
        alert(`Всего: ${Article.count}, Последняя: ${Article.lastCreated}`);
    }
}

Article.count = 0;
