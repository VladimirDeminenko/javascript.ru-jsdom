/**
 * @file loggingDecoratorTest.js
 * @author Vladimir Deminenko
 * @date 20.08.2017
 */

'use strict';

describe("makeLogging", function () {
    describe("с одним аргументом", function () {
        it("записывает вызовы в массив log", function () {
            let work = sinon.spy();

            let log = [];
            work = makeLogging(work, log);
            assert.deepEqual(log, []);

            work(1);
            assert.deepEqual(log, [1]);

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

    describe("со многими аргументами", function () {
        it("записывает вызовы в массив log", function () {
            let work = sinon.spy();

            let log = [];
            work = makeLogging(work, log);
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

            sum = makeLogging(sum, log);

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
            calculator.sum = makeLogging(calculator.sum, log);

            assert.equal(calculator.sum(1, 2), 3);
            assert(spy.calledWith(1, 2));
            assert(spy.calledOn(calculator));
        });
    });
});
