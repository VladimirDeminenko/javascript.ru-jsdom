/**
 * @file sort.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

/**
 * https://learn.javascript.ru/task/sort-by-field
 * Возвращает функцию, в зависимости от переданного имени поля.
 * Может использоваться при сортировке объектов
 * @param {string} fieldName    имя поля, по которому производится сортировка
 * @returns {Function}
 */
function byField(fieldName) {
    let sortByAge = (user1, user2) => user1.age - user2.age;

    let sortByName = (user1, user2) => {
        if (user1.name > user2.name) {
            return 1;
        }

        return -1;
    };

    if ('age' === fieldName.toLowerCase()) {
        return sortByAge;
    }

    return sortByName;
}
