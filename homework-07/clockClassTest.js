/**
 * @file clockClassTest.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

describe(`часики`, function () {
    const template = 'h:m:s';
    const options = {
        template
    };

    let clock;

    it(`по истечении 1 секунды, вызывается Clock.prototype._render('${options.template}')`, function () {
        clock.start();
        this.clock.tick(1000);

        assert(Clock.prototype._render.calledWith(template));
    });

    it(`по истечении 10 секунд, вызывается Clock.prototype._render('${options.template}')`, function () {
        clock.start();
        this.clock.tick(10000);

        assert(Clock.prototype._render.calledWith(template));
    });

    before(function () {
        clock = new Clock({template});
        sinon.stub(Clock.prototype, `_render`);
        this.clock = sinon.useFakeTimers(Date.now());
    });

    after(function () {
        Clock.prototype._render.restore();
        this.clock.restore();
        clock = null;
    });
});
