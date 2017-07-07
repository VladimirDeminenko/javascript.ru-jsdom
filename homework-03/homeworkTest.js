/**
 * @file singletonTest.js
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
        var date = new Date(2015, 0, 2);
        var dateCopy = new Date(date);
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
