/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 16.07.2017
 */

describe("formatDate", function () {
    it("читает дату вида гггг-мм-дд из строки", function () {
        assert.equal(formatDate('2011-10-02'), "02.10.11");
    });

    it("читает дату из числа 1234567890 (секунды)", function () {
        assert.equal(formatDate(1234567890), "14.02.09");
    });

    it("читает дату из массива вида [гггг, м, д]", function () {
        assert.equal(formatDate([2014, 0, 1]), "01.01.14");
    });

    it('formatDate([2016, 1]) returns "01.02.16"', function () {
        assert.equal(formatDate([2016, 1]), "01.02.16");
    });

    it("читает дату из объекта Date", function () {
        assert.equal(formatDate(new Date(2014, 0, 1)), "01.01.14");
    });

    it('formatDate() throws TypeError', function () {
        assert.throws(formatDate, TypeError);
    });

    it('formatDate({}) throws TypeError with the message "unknown type of parameter"', function () {
        let stub = () => formatDate({});

        assert.throws(stub, TypeError, 'unknown type of parameter');
    });
});


describe("get/set", function () {
    let user;

    beforeEach(function () {
        user = new User('Василий Попкин');
    });

    afterEach(function () {
        user = null;
    });

    it("returns first name", function () {
        assert.equal(user.firstName, "Василий");
    });

    it("returns last name", function () {
        assert.equal(user.lastName, "Попкин");
    });

    it("returns changed full name", function () {
        user.lastName = 'Сидоров';
        user.firstName = 'Михаил';
        assert.equal(user.fullName, "Михаил Сидоров");
    });
});


describe("Article.showStats", function () {
    before(function () {
        sinon.stub(window, "alert");
        this.clock = sinon.useFakeTimers();
    });

    after(function () {
        window.alert.restore();
        this.clock.restore();
    });

    it("Выводит число статей и дату создания последней", function () {
        new Article();
        this.clock.tick(100);
        new Article();
        Article.showStats();

        assert(alert.calledWith('Всего: 2, Последняя: ' + new Date()));
    });

    it("и ещё одна статья...", function () {
        this.clock.tick(100);
        new Article();
        Article.showStats();

        assert(alert.calledWith('Всего: 3, Последняя: ' + new Date()));
    });
});


describe("sumArgs", function () {
    it("sumArgs() = 0", function () {
        assert.equal(sumArgs(), 0);
    });

    it("sumArgs(1, 2, 3) = 6", function () {
        assert.equal(sumArgs(1, 2, 3), 6);
    });

    it("sumArgs(1, -2, 3) = 2", function () {
        assert.equal(sumArgs(1, -2, 3), 2);
    });
});
