/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 04.08.2017
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
    const first500PrimeNumbers = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
        73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
        179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
        283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
        419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
        547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
        661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
        811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941,
        947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069,
        1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223,
        1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373,
        1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511,
        1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657,
        1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811,
        1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987,
        1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129,
        2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287,
        2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423,
        2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617,
        2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741,
        2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903,
        2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079,
        3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257,
        3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413,
        3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571
    ];

    it("returns все простые числа до 100", function () {
        assert.deepEqual(first500PrimeNumbers.slice(0, 25), primeNumbersTo(100));
    });

    it("returns сумму всех простых чисел до 100", function () {
        assert.equal(1060, sumOfPrimeNumbersTo(100));
    });

    it("returns 481-е простое число", function () {
        assert.equal(first500PrimeNumbers[480], primeNumbersTo(3433).pop());
    });

    it("returns 500-е простое число", function () {
        assert.equal(first500PrimeNumbers[499], primeNumbersTo(3571).pop());
    });

});

describe("getMaxSubSum", function () {
    it("maximal subsum of [1, 2, 3] equals 6", function () {
        assert.equal(6, getMaxSubSum([1, 2, 3]));
    });

    it("maximal subsum of [-1, 2, 3, -9] equals 5", function () {
        assert.equal(5, getMaxSubSum([-1, 2, 3, -9]));
    });

    it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function () {
        assert.equal(11, getMaxSubSum([-1, 2, 3, -9, 11]));
    });

    it("maximal subsum of [-2, -1, 1, 2] equals 3", function () {
        assert.equal(3, getMaxSubSum([-2, -1, 1, 2]));
    });

    it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function () {
        assert.equal(100, getMaxSubSum([100, -9, 2, -3, 5]));
    });

    it("maximal subsum of [] equals 0", function () {
        assert.equal(0, getMaxSubSum([]));
    });

    it("maximal subsum of [-1] equals 0", function () {
        assert.equal(0, getMaxSubSum([-1]));
    });

    it("maximal subsum of [-1, -2] equals 0", function () {
        assert.equal(0, getMaxSubSum([-1, -2]));
    });

    it("maximal subsum of [100, -9, 2, -3, 15] equals 105", function () {
        assert.equal(105, getMaxSubSum([100, -9, 2, -3, 15]));
    });
});

describe("addClass", function () {

    it("добавляет класс, которого нет", function () {
        let obj = {
            className: 'open menu'
        };
        addClass(obj, 'new');
        assert.deepEqual(obj, {
            className: 'open menu new'
        });
    });

    it("не добавляет класс, который уже есть", function () {
        let obj = {
            className: 'open menu'
        };

        addClass(obj, 'menu');
        addClass(obj, 'open');

        assert.deepEqual(obj, {
            className: 'open menu'
        });
    });

    it("не добавляет лишних пробелов, который уже есть", function () {
        let obj = {
            className: ''
        };
        addClass(obj, 'open');
        assert.deepEqual(obj, {
            className: 'open'
        });
    });

});

describe("removeClass", function () {

    it("ничего не делает, если класса нет", function () {
        let obj = {
            className: 'open menu'
        };
        removeClass(obj, 'new');
        assert.deepEqual(obj, {
            className: 'open menu'
        });
    });

    it("не меняет пустое свойство", function () {
        let obj = {
            className: ''
        };
        removeClass(obj, 'new');
        assert.deepEqual(obj, {
            className: ""
        });
    });

    it("удаляет класс, не оставляя лишних пробелов", function () {
        let obj = {
            className: 'open menu'
        };
        removeClass(obj, 'open');
        assert.deepEqual(obj, {
            className: "menu"
        });
    });

    it("если класс один и он удалён, то результат - пустая строка", function () {
        let obj = {
            className: "menu"
        };
        removeClass(obj, 'menu');
        assert.deepEqual(obj, {
            className: ""
        });
    });

    it("удаляет класс из середины списка", function () {
        let obj = {
            className: "open menu now"
        };
        removeClass(obj, 'menu');
        assert.deepEqual(obj, {
            className: "open now"
        });
    });

    it("удаляет повторяющийся класс из середины списка", function () {
        let obj = {
            className: "open menu menu zero"
        };
        removeClass(obj, 'menu');
        assert.deepEqual(obj, {
            className: "open zero"
        });
    });

});

describe("camelize", function () {

    it("leaves an empty line as is", function () {
        assert.equal(camelize(""), "");
    });

    it("turns background-color into backgroundColor", function () {
        assert.equal(camelize("background-color"), "backgroundColor");
    });

    it("turns list-style-image into listStyleImage", function () {
        assert.equal(camelize("list-style-image"), "listStyleImage");
    });

    it("turns -webkit-transition into WebkitTransition", function () {
        assert.equal(camelize("-webkit-transition"), "WebkitTransition");
    });

});

describe("filterRangeInPlace", function () {

    it("меняет массив, оставляя только значения из диапазона", function () {
        let arr = [5, 3, 8, 1, -3, 16, -27, 3, 2, 4, -5];
        filterRangeInPlace(arr, 1, 4);
        assert.deepEqual(arr, [3, 1, 3, 2, 4]);
    });

    it("неверный диапазон", function () {
        let arr = [5, 3, 8, 1, -3, 16, -27, 3, 2, 4, -5];
        filterRangeInPlace(arr, 4, 1);
        assert.deepEqual(arr, []);
    });

    it("пустой массив", function () {
        let arr = [];
        filterRangeInPlace(arr, 1, 4);
        assert.deepEqual(arr, []);
    });

});

function intersection(arr1, arr2) {
    return arr1.filter(function (item) {
        return arr2.indexOf(item) != -1;
    });
}

describe("aclean", function () {

    it("содержит ровно по 1 слову из каждого набора анаграмм", function () {
        let arr = ["воз", "киборг", "корсет", "зов", "гробик", "костер", "сектор"];

        let result = aclean(arr);
        assert.equal(result.length, 3);

        // assert.equal(intersection(result, ["гробик", "киборг"]).length, 1);
        // assert.equal(intersection(result, ["воз", "зов"]).length, 1);
        // assert.equal(intersection(result, ["корсет", "сектор", "костер"]).length, 1);

    });

    it("не различает регистр символов", function () {
        let arr = ["воз", "ЗОВ"];
        assert.equal(aclean(arr).length, 1);
    });

});

describe("unique", function () {
    it("убирает неуникальные элементы из массива", function () {
        let strings = ["кришна", "кришна", "харе", "харе",
            "харе", "харе", "кришна", "кришна", "8-()"
        ];

        assert.sameMembers(unique(strings), ["кришна", "харе", "8-()"]);
    });

    it("не изменяет исходный массив", function () {
        let strings = ["кришна", "кришна", "харе", "харе"];
        unique(strings);
        assert.sameMembers(strings, ["кришна", "кришна", "харе", "харе"]);
    });
});

describe("getSums", function () {

    it("частичные суммы [1, 2, 3, 4, 5] равны [1, 3, 6, 10, 15]", function () {
        assert.deepEqual(getSums([1, 2, 3, 4, 5]), [1, 3, 6, 10, 15]);
    });

    it("частичные суммы [-2, '-1', 0, 1] равны [-2, -3, -3, -2]", function () {
        assert.deepEqual(getSums([-2, '-1', 0, 1]), [-2, -3, -3, -2]);
    });

    it("частичные суммы [] равны []", function () {
        assert.deepEqual(getSums([]), []);
    });

    it("частичные суммы [1] равны [1]", function () {
        assert.deepEqual(getSums([1]), [1]);
    });
});


describe("getWeekDay", function () {
    it("3 января 2014 - пятница", function () {
        assert.equal(getWeekDay(new Date(2014, 0, 3)), 'пт');
    });

    it("4 января 2014 - суббота", function () {
        assert.equal(getWeekDay(new Date(2014, 0, 4)), 'сб');
    });

    it("5 января 2014 - воскресенье", function () {
        assert.equal(getWeekDay(new Date(2014, 0, 5)), 'вс');
    });

    it("6 января 2014 - понедельник", function () {
        assert.equal(getWeekDay(new Date(2014, 0, 6)), 'пн');
    });

    it("7 января 2014 - вторник", function () {
        assert.equal(getWeekDay(new Date(2014, 0, 7)), 'вт');
    });

    it("8 января 2014 - среда", function () {
        assert.equal(getWeekDay(new Date(2014, 0, 8)), 'ср');
    });

    it("9 января 2014 - четверг", function () {
        assert.equal(getWeekDay(new Date(2014, 0, 9)), 'чт');
    });
});

describe("getLocalDay возвращает день недели", function () {
    it("3 января 2014 - пятница", function () {
        assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
    });

    it("4 января 2014 - суббота", function () {
        assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
    });

    it("5 января 2014 - воскресенье", function () {
        assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
    });

    it("6 января 2014 - понедельник", function () {
        assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
    });

    it("7 января 2014 - вторник", function () {
        assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
    });

    it("8 января 2014 - среда", function () {
        assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
    });

    it("9 января 2014 - четверг", function () {
        assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
    });
});

describe("getDateAgo", function () {
    it("1 день до 02.01.2015 -> число 1", function () {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
    });


    it("2 день до 02.01.2015 -> число 31", function () {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
    });

    it("100 дней от 02.01.2015 -> число 24", function () {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
    });

    it("365 дней от 02.01.2015 -> число 2", function () {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
    });

    it("не меняет переданный объект Date", function () {
        let date = new Date(2015, 0, 2);
        let dateCopy = new Date(date);
        getDateAgo(dateCopy, 100);
        assert.equal(date.getTime(), dateCopy.getTime());
    });
});

describe("getLastDayOfMonth", function () {
    it("последний день 01.01.2012 - 31", function () {
        assert.equal(getLastDayOfMonth(2012, 0), 31);
    });

    it("последний день 01.02.2012 - 29 (високосный год)", function () {
        assert.equal(getLastDayOfMonth(2012, 1), 29);
    });

    it("последний день 01.02.2013 - 28", function () {
        assert.equal(getLastDayOfMonth(2013, 1), 28);
    });
});

describe("formatDate", function () {
    it("правильно форматирует дату 30.01.14", function () {
        assert.equal(formatDate(new Date(2014, 0, 30)), '30.01.14');
    });

    it("правильно форматирует дату 01.01.01", function () {
        assert.equal(formatDate(new Date(2001, 0, 1)), '01.01.01');
    });

    it("правильно форматирует дату 01.01.00", function () {
        assert.equal(formatDate(new Date(2000, 0, 1)), '01.01.00');
    });
});

describe("formatRelativeDate", function () {
    it("выводит дату 1мс назад как \"только что\"", function () {
        assert.equal(formatRelativeDate(new Date(new Date - 1)), 'только что');
    });

    it('выводит дату "30 сек назад"', function () {
        assert.equal(formatRelativeDate(new Date(new Date - 30 * 1000)), "30 сек. назад");
    });

    it('выводит дату "5 мин назад"', function () {
        assert.equal(formatRelativeDate(new Date(new Date - 5 * 60 * 1000)), "5 мин. назад");
    });

    it("выводит старую дату в формате дд.мм.гг чч:мм", function () {
        assert.equal(formatRelativeDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
    });
});

describe("getMinMax", function () {
    const tests = [
        {
            str: '1, -5.8 или 10, хотя +34 + -5.3 и 73, а также - 123.685 или -.253',
            result: [1, -5.8, 10, +34, -5.3, 73, 123.685, -0.253],
            minmax: {
                min: -5.8,
                max: 123.685
            }
        },
        {
            str: 'text without digits',
            minmax: {
                min: null,
                max: null
            }
        },
        {
            str: 'text with one negative digit +--++-1',
            minmax: {
                min: -1,
                max: -1
            }
        },
        {
            str: 'text with one positive digit +---+1',
            minmax: {
                min: 1,
                max: 1
            }
        },
        {
            str: 'numbers without lead zero +.356, -.956',
            minmax: {
                min: -0.956,
                max: 0.356
            }
        }];

    for (let i = 0; i < tests.length; i++) {
        let test = tests[i];

        if (test.result) {
            it(`stringToNumeric-Array('${test.str}') = [${test.result}]`, function () {
                assert.deepEqual(stringToNumericArray(`${test.str}}`), test.result);
            });
        }

        it(`getMinMax('${test.str}')`, function () {
            assert.deepEqual(getMinMax(`${test.str}`), test.minmax);
        });
    }
});


