/**
 * @file sortTest.js
 * @author Vladimir Deminenko
 * @date 14.08.2017
 */

'use strict';

describe("сортировка", function () {
    let users;

    beforeEach(function () {
        users = [{
            name: "Вася",
            surname: 'Иванов',
            age: 20
        }, {
            name: "Петя",
            surname: 'Чапаев',
            age: 25
        }, {
            name: "Маша",
            surname: 'Медведева',
            age: 18
        }];
    });

    it("сортировка по полю name", function () {
        assert.equal(25, users.sort(byField('name'))[2].age);
    });

    it("сортировка по полю age", function () {
        assert.equal(18, users.sort(byField('age'))[0].age);
    });
});
