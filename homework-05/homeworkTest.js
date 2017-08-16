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


describe("makeLogging", function () {
    it("записывает вызовы в массив log", function () {
        let work = sinon.spy();

        let log = [];
        work = makeLogging(work, log);
        assert.deepEqual(log, []);

        work(1);
        // assert.deepEqual(log, [1]);

        work(2);
        assert.deepEqual(log, [1, 2]);
    });

    it("передаёт вызов функции, возвращает её результат", function () {
        let log = [];

        function work(x) {
            return x * 2;
        }

        work = sinon.spy(work);
        let spy = work;
        work = makeLogging(work, log);

        assert.equal(work(1), 2);
        assert(spy.calledWith(1));
    });

    it("сохраняет контекст вызова для методов объекта", function () {
        let log = [];

        let calculator = {
            double: function (x) {
                return x * 2;
            }
        };

        calculator.double = sinon.spy(calculator.double);
        let spy = calculator.double;
        calculator.double = makeLogging(calculator.double, log);

        assert.equal(calculator.double(1), 2);
        assert(spy.calledWith(1));
        assert(spy.calledOn(calculator));
    });
});

describe("makeLogging2", function () {
    it("записывает вызовы в массив log", function () {
        let work = sinon.spy();

        let log = [];
        work = makeLogging2(work, log);
        assert.deepEqual(log, []);

        work(1, 2);
        assert.deepEqual(log, [
            [1, 2]
        ]);

        work(3, 4);
        assert.deepEqual(log, [
            [1, 2],
            [3, 4]
        ]);
    });

    it("передаёт вызов функции, возвращает её результат", function () {
        let log = [];

        function sum(a, b) {
            return a + b;
        }

        sum = sinon.spy(sum);
        let spy = sum;
        sum = makeLogging2(sum, log);

        assert.equal(sum(1, 2), 3);
        assert(spy.calledWith(1, 2));
    });


    it("сохраняет контекст вызова для методов объекта", function () {
        let log = [];

        let calculator = {
            sum: function (a, b) {
                return a + b;
            }
        };

        calculator.sum = sinon.spy(calculator.sum);
        let spy = calculator.sum;
        calculator.sum = makeLogging2(calculator.sum, log);

        assert.equal(calculator.sum(1, 2), 3);
        assert(spy.calledWith(1, 2));
        assert(spy.calledOn(calculator));
    });
});

describe("makeCaching", function () {
    it("запоминает предыдущее значение функции с таким аргументом", function () {
        function f(x) {
            return Math.random() * x;
        }

        f = makeCaching(f);

        let a = f(1);
        let b = f(1);
        assert.equal(a, b);

        let anotherValue = f(2);
        // почти наверняка другое значение
        assert.notEqual(a, anotherValue);
    });

    it("сохраняет контекст вызова", function () {
        let obj = {
            spy: sinon.spy()
        };

        let spy = obj.spy;
        obj.spy = makeCaching(obj.spy);
        obj.spy(123);
        assert(spy.calledWith(123));
        assert(spy.calledOn(obj));
    });
});
