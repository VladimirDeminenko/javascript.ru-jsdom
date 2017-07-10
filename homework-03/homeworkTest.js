/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 07.07.2017
 */

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

describe("сумма через замыкание", function () {
    it("sum(1)(2) = 3", function () {
        assert.equal(3, closureSum(1)(2));
    });

    it("sum('5')('-1') = 4", function () {
        assert.equal(4, closureSum('5')('-1'));
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


// условия дополнительных заданий здесь:
// https://javascriptru.slack.com/archives/G5TUHBU6S/p1499641062568410
describe("дополнительные задания", function () {

    describe("- в качестве метода", function () {
        it("(0).PlusTwo() = 2", function () {
            assert.equal((0).PlusTwo(), 2);
        });

        it("(0).PlusTwo().PlusThree() = 5", function () {
            assert.equal((0).PlusTwo().PlusThree(), 5);
        });

        it("(13).PlusTwo() = 15", function () {
            assert.equal((13).PlusTwo(), 15);
        });

        it("(17).PlusTwo().PlusThree() = 22", function () {
            assert.equal((17).PlusTwo().PlusThree(), 22);
        });

        it("(17).PlusThree().PlusThree() = 23", function () {
            assert.equal((17).PlusThree().PlusThree(), 23);
        });

        it("(17).PlusThree().PlusThree().PlusTwo() = 25", function () {
            assert.equal((17).PlusThree().PlusThree().PlusTwo(), 25);
        });
    });

    describe("- в качестве свойства", function () {
        it("(5).plus2 = 7", function () {
            assert.equal((5).plus2, 7);
        });

        it("(7).plus3 = 10", function () {
            assert.equal((7).plus3, 10);
        });

        it("(0).plus2.plus3 = 5", function () {
            assert.equal((0).plus2.plus3, 5);
        });

        it("(7).plus2.plus3.plus2.plus3 = 17", function () {
            assert.equal((7).plus2.plus3.plus2.plus3, 17);
        });

        it("(+'6').plus2.plus3.plus2 = 13", function () {
            assert.equal((+'6').plus2.plus3.plus2, 13);
        });
    });

    describe("- всё в одну кучу!", function () {
        it("(+'6').PlusTwo().plus3.plus2.PlusThree().plus2 = 18", function () {
            assert.equal((+'6').PlusTwo().plus3.plus2.PlusThree().plus2, 18);
        });
    });
});
