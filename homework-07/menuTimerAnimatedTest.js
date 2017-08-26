/**
 * @file menuTimerAnimatedTest.js
 * @author Vladimir Deminenko
 * @date 24.08.2017
 */

'use strict';

describe(`AnimatingMenu`, function () {
    let menu;

    it(`при истечении 1 секунды, вызывается Menu.prototype.open()`, function () {
        menu.open();
        this.clock.tick(1000);

        assert(AnimatingMenu.prototype.open.calledWith());
    });

    before(function () {
        menu = new AnimatingMenu(AnimatingMenu.STATE_CLOSED);
        sinon.stub(AnimatingMenu.prototype, `open`);
        this.clock = sinon.useFakeTimers(Date.now());
    });

    after(function () {
        AnimatingMenu.prototype.open.restore();
        this.clock.restore();
        menu = null;
    });
});
