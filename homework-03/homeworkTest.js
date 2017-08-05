/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 07.07.2017
 */

describe("сумма через замыкание", function () {
    it("sum(1)(2) = 3", function () {
        assert.equal(3, sum(1)(2));
    });

    it("sum('5')('-1') = 4", function () {
        assert.equal(4, sum('5')('-1'));
    });
});

describe("строковый буфер с очисткой", function () {
    let buffer;

    beforeEach(function () {
        buffer = makeBuffer();
    });

    it("возвращает пустую строку по умолчанию", function () {
        assert.strictEqual(buffer(), "");
    });

    it("добавляет аргументы в буффер", function () {
        buffer('Замыкания');
        buffer(' Использовать');
        buffer(' Нужно!');
        assert.equal(buffer(), 'Замыкания Использовать Нужно!');
    });

    it("приводит всё к строке", function () {
        buffer(null);
        buffer(false);
        assert.equal(buffer(), "nullfalse");
    });

    it("очищает буфер вызовом clear", function () {
        buffer("test");
        buffer.clear();
        buffer("первый");
        buffer("второй");
        assert.equal(buffer(), "первыйвторой");
    });
});

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

describe("фильтрация через функцию", function () {
    let arr;

    before(function () {
        arr = [1, 2, 3, 4, 5, 6, 7];
    });

    describe("inArray", function () {
        let checkInArr;

        before(function () {
            checkInArr = inArray(arr);
        });

        it("возвращает фильтр для значений в массиве", function () {
            assert.isTrue(checkInArr(5));
            assert.isFalse(checkInArr(0));
        });
    });


    describe("inBetween", function () {
        let checkBetween36;

        before(function () {
            checkBetween36 = inBetween(3, 6);
        });

        it("возвращает фильтрa для значений в промежутке", function () {
            assert.isTrue(checkBetween36(5));
            assert.isFalse(checkBetween36(0));
        });
    });


    describe("filter", function () {

        it("фильтрует через func", function () {
            assert.deepEqual(filter(arr, function (a) {
                return a % 2 == 0;
            }), [2, 4, 6]);
        });

        it("не модифицирует исходный массив", function () {
            filter(arr, function (a) {
                return a % 2 == 0;
            });
            assert.deepEqual(arr, [1, 2, 3, 4, 5, 6, 7]);
        });

        it("поддерживает фильтр inBetween", function () {
            assert.deepEqual(filter(arr, inBetween(3, 6)), [3, 4, 5, 6]);
        });

        it("поддерживает фильтр inArray", function () {
            assert.deepEqual(filter(arr, inArray([1, 2, 3])), [1, 2, 3]);
        });
    });
});

describe("армия функций", function () {
    let army;

    before(function () {
        army = makeArmy();
    });

    it("проверка всех стрелков от первого к последнему", function () {
        for (let i = 0; i < army.length; i++) {
            assert.equal(i, army[i]());
        }
    });

    it("проверка всех стрелков от последнего к первому", function () {
        for (let i = army.length - 1; i >= 0; i--) {
            assert.equal(i, army[i]());
        }
    });
});
