/**
 * @file homeworkTest.js
 * @author Vladimir Deminenko
 * @date 19.08.2017
 */

'use strict';

describe(`formatDate`, () => {
    it(`читает дату из объекта Date`, () => {
        assert.equal(formatDate(new Date(2014, 0, 1)), `01.01.14`);
    });

    it(`formatDate({}) throws TypeError with the message 'unknown type of parameter'`, () => {
        let stub = () => formatDate({});

        assert.throws(stub, TypeError, `unknown type of parameter`);
    });
});

describe(`Article.showStats`, () => {
    before(() => {
        sinon.stub(window, `alert`);
        this.clock = sinon.useFakeTimers();
    });

    after(() => {
        window.alert.restore();
        this.clock.restore();
    });

    it(`Выводит число статей и дату создания последней`, () => {
        new Article();
        this.clock.tick(100);
        new Article();
        Article.showStats();

        assert(alert.calledWith(`Всего: 2, Последняя: ` + new Date()));
    });
});
