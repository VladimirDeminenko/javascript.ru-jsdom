/**
 * @file clockClassExtendedTest.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

describe(`расширенные часики`, function () {
    const options = {
        template: 'h:m:s',
        precision: 1000
    };

    let clock;

    it(`по истечении 1 секунды, вызывается ExtendedClock.prototype._render('${options.template}')`, function () {
        clock.start();
        this.clock.tick(options.precision);

        assert(ExtendedClock.prototype._render.calledWith(options.template));
    });

    it(`по истечении 10 секунд, вызывается ExtendedClock.prototype._render('${options.template}')`, function () {
        options.precision = 10000;
        clock.start();
        this.clock.tick(options.precision);

        assert(ExtendedClock.prototype._render.calledWith(options.template));
    });

    before(function () {
        clock = new ExtendedClock(options);
        sinon.stub(ExtendedClock.prototype, `_render`);
        this.clock = sinon.useFakeTimers(Date.now());
    });

    after(function () {
        ExtendedClock.prototype._render.restore();
        this.clock.restore();
        clock = null;
    });
});
