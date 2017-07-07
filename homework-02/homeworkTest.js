/**
 * @file singletonTest.js
 * @author Vladimir Deminenko
 * @date 04.07.2017
 */

describe("Singleton", function () {
    it("new Singleton() === new Singleton()", function () {
        assert.strictEqual(new Singleton(), new Singleton());
    });
});

describe("Пуст ли объект", function () {
    it("returns true for an empty object", function () {
        assert.isTrue(isEmpty({}));
    });

    it("returns false if a property exists", function () {
        assert.isFalse(isEmpty({
            anything: false
        }));
    });
});

describe("Сумма свойств", function () {
    it("returns sum of salaries", function () {
        const salaries = {
            "Вася": 100,
            "Петя": 300,
            "Даша": 250
        };

        assert.equal(650, sumOf(salaries));
    });

    it("returns 0", function () {
        assert.equal(0, sumOf({}));
    });
});

describe("Свойство с наибольшим значением", function () {
    it("returns имя сотрудника, у которого самая большая зарплата", function () {
        const salaries = {
            "Вася": 100,
            "Петя": 300,
            "Даша": 250
        };

        assert.equal("Петя", maxValue(salaries));
    });

    it("returns \"нет сотрудников\"", function () {
        assert.equal("нет сотрудников", maxValue({}));
    });
});

describe("multiplyNumeric", function () {
    it("multiplies all numeric properties by 2", function () {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };

        multiplyNumeric(menu);

        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
        assert.equal(menu.title, "My menu");
    });

    it("returns nothing", function () {
        assert.isUndefined(multiplyNumeric({}));
    });

});

describe("findInArray", function () {

    describe("возвращает позицию, на которой найден элемент", function () {
        it("в массиве [1,2,3] находит 1 на позиции 0", function () {
            assert.equal(findInArray([1, 2, 3], 1), 0);
        });
        it("в массиве [1,2,3] находит 2 на позиции 1", function () {
            assert.equal(findInArray([1, 2, 3], 2), 1);
        });
        it("в массиве [1,2,3] находит 3 на позиции 2", function () {
            assert.equal(findInArray([1, 2, 3], 3), 2);
        });
    });

    it("если элемент не найден, возвращает -1", function () {
        assert.equal(findInArray([1, 2, 3], 0), -1);
    });

    it("отличает false или null от 0", function () {
        assert.equal(findInArray([false, true, null], 0), -1);
    });

    it("отличает 1 от true", function () {
        assert.equal(findInArray([1, 2, 3], true), -1);
    });
});

describe("filterRange", function () {

    it("returns the filtered values", function () {

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function () {

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        assert.deepEqual(arr, [5, 3, 8, 1]);
    });

});

describe("Решето Эратосфена", function () {

    it("returns все простые числа до 100", function () {

        let arr = [
            2, 3, 5, 7, 11,
            13, 17, 19, 23,
            29, 31, 37, 41,
            43, 47, 53, 59,
            61, 67, 71, 73,
            79, 83, 89, 97
        ];

        assert.deepEqual(arr, primeNumbersTo(100));
    });

    it("returns сумму всех простых чисел до 100", function () {
        assert.deepEqual(1060, sumOfPrimeNumbersTo(100));
    });

});

describe("getMaxSubSum", function() {
    it("maximal subsum of [1, 2, 3] equals 6", function() {
        assert.equal(6, getMaxSubSum([1, 2, 3]));
    });

    it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
        assert.equal(5, getMaxSubSum([-1, 2, 3, -9]));
    });

    it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
        assert.equal(11, getMaxSubSum([-1, 2, 3, -9, 11]));
    });

    it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
        assert.equal(3, getMaxSubSum([-2, -1, 1, 2]));
    });

    it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
        assert.equal(100, getMaxSubSum([100, -9, 2, -3, 5]));
    });

    it("maximal subsum of [] equals 0", function() {
        assert.equal(0, getMaxSubSum([]));
    });

    it("maximal subsum of [-1] equals 0", function() {
        assert.equal(0, getMaxSubSum([-1]));
    });

    it("maximal subsum of [-1, -2] equals 0", function() {
        assert.equal(0, getMaxSubSum([-1, -2]));
    });

    it("maximal subsum of [100, -9, 2, -3, 15] equals 105", function() {
        assert.equal(105, getMaxSubSum([100, -9, 2, -3, 15]));
    });
});
